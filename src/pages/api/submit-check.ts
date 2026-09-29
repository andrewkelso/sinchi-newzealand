import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // 1. Honeypot check (anti-spam)
    if (data.website_hp && data.website_hp.trim() !== '') {
      // Silently discard bot submission
      return new Response(JSON.stringify({ success: true, redirect: '/thanks' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Validate required fields
    const { businessName, websiteUrl, mainService, townCity, email, phone, consent } = data;

    if (!businessName || !websiteUrl || !mainService || !townCity || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please fill in all required fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const payload = {
      type: 'free_google_visibility_check',
      timestamp: new Date().toISOString(),
      businessName: String(businessName).trim(),
      websiteUrl: String(websiteUrl).trim(),
      mainService: String(mainService).trim(),
      townCity: String(townCity).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : null,
      marketingConsent: Boolean(consent),
      sourceUrl: request.headers.get('referer') || 'https://sinchi.co.nz/free-google-check'
    };

    const webhookUrl = process.env.N8N_AUDIT_WEBHOOK_URL;

    if (webhookUrl) {
      const n8nResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Sinchi-Website/1.0'
        },
        body: JSON.stringify(payload)
      });

      if (!n8nResponse.ok) {
        console.error('n8n audit webhook error:', n8nResponse.status, await n8nResponse.text());
        // Return success to user so lead experience is not broken, but log error internally
      }
    } else {
      console.log('DEV MOCK: N8N_AUDIT_WEBHOOK_URL is unset. Form payload received:', payload);
    }

    return new Response(JSON.stringify({ success: true, redirect: '/thanks' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('API submit-check exception:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred. Please try again or email hello@sinchi.co.nz.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
