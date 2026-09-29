import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // 1. Honeypot check (anti-spam)
    if (data.website_hp && data.website_hp.trim() !== '') {
      return new Response(JSON.stringify({ success: true, redirect: '/thanks?source=fixes' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Validate email
    const { email, consent } = data;

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide your email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const payload = {
      type: 'three_quick_fixes_lead',
      timestamp: new Date().toISOString(),
      email: String(email).trim().toLowerCase(),
      marketingConsent: Boolean(consent),
      sourceUrl: request.headers.get('referer') || 'https://sinchi.co.nz/3-quick-fixes'
    };

    const webhookUrl = process.env.N8N_TIPS_WEBHOOK_URL;

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
        console.error('n8n tips webhook error:', n8nResponse.status, await n8nResponse.text());
      }
    } else {
      console.log('DEV MOCK: N8N_TIPS_WEBHOOK_URL is unset. Form payload received:', payload);
    }

    return new Response(JSON.stringify({ success: true, redirect: '/thanks?source=fixes' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('API submit-fixes exception:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
