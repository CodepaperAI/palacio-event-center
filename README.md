# Palacio Event Centre Website

## Live Inquiry Form Setup

The inquiry form now submits to an internal endpoint:

`/api/inquiry`

The frontend can use:

`VITE_CONTACT_FORM_ENDPOINT=/api/inquiry`

If you do not set it locally, the frontend defaults to `/api/inquiry`.

### Server-side env vars required

Add these values locally in `.env.local` and in your hosting platform environment settings:

```bash
VITE_CONTACT_FORM_ENDPOINT=/api/inquiry
RESEND_API_KEY=re_your_resend_api_key
INQUIRY_FROM_EMAIL=Palacio Event Centre <inquiries@your-verified-domain.com>
INQUIRY_TO_EMAIL=sales@palacioeventcentre.com
```

### What each env var does

- `VITE_CONTACT_FORM_ENDPOINT`
  - The internal frontend submission target.
  - Keep this as `/api/inquiry` unless you intentionally proxy it elsewhere.

- `RESEND_API_KEY`
  - Your private Resend API key.
  - This must stay server-side only and must never be exposed in client code.

- `INQUIRY_FROM_EMAIL`
  - The verified sender identity used by Resend.
  - This should be an email at a domain you have verified in Resend.

- `INQUIRY_TO_EMAIL`
  - The final Palacio inbox that should receive inquiries.

## Deployment approach

This project uses a simple serverless route at:

`api/inquiry.ts`

That is the simplest production-ready pattern for this repo because:

- it keeps the current Vite frontend unchanged
- the API key stays server-side
- the same `/api/inquiry` contract can be used by both homepage and contact page forms
- local development can use the same endpoint path through the Vite dev middleware

## What the inquiry email contains

Each inquiry email includes:

- name
- email
- phone
- event type
- guest count
- event date
- message
- source (`homepage` or `contact-page`)

The handler validates the payload server-side with the same schema used by the frontend before sending to Resend.

## Manual setup left for you

1. Create `.env.local` in the project root.
2. Add the four env vars shown above.
3. In Resend:
   - add your domain
   - verify the domain
   - use a verified sender email for `INQUIRY_FROM_EMAIL`
4. Set `INQUIRY_TO_EMAIL` to the Palacio inbox you want to receive inquiries.
5. Add the same env vars in your hosting platform settings.

## End-to-end test

1. Add real values to `.env.local`.
2. Restart the dev server.
3. Open either the homepage inquiry form or `/contact`.
4. Submit a test inquiry.
5. Confirm:
   - the button shows `Sending...`
   - the success message appears
   - the API responds successfully at `/api/inquiry`
   - the email arrives in the `INQUIRY_TO_EMAIL` inbox
