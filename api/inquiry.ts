import type { VercelRequest, VercelResponse } from "@vercel/node";

const RESEND_API_URL = "https://api.resend.com/emails";
const INQUIRY_SERVICE_ERROR =
  "Inquiry service is not configured on the server. Add the required Resend environment variables before launching.";
const SEND_FAILURE_MESSAGE =
  "We couldn't send your inquiry right now. Please try again or call us directly.";

const BUSINESS_NAME = "Palacio Event Centre";
const BUSINESS_PHONE = "905-949-0555";

interface InquiryServerConfig {
  resendApiKey: string;
  fromEmail: string;
  toEmails: string[];
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatValue = (value: string) => (value.trim() ? value.trim() : "Not provided");

const getInquiryServerConfig = (env: NodeJS.ProcessEnv): InquiryServerConfig | null => {
  const resendApiKey = env.RESEND_API_KEY?.trim() ?? "";
  const fromEmail = env.INQUIRY_FROM_EMAIL?.trim() ?? "";
  const toEmails = (env.INQUIRY_TO_EMAIL ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  console.log("[INQUIRY] Config check:", {
    hasResendApiKey: !!resendApiKey,
    hasFromEmail: !!fromEmail,
    toEmailsCount: toEmails.length,
    resendApiKeyPreview: resendApiKey ? "***" + resendApiKey.slice(-4) : "",
  });

  if (!resendApiKey || !fromEmail || toEmails.length === 0) {
    console.error("[INQUIRY] Config missing:", {
      resendApiKey: !resendApiKey,
      fromEmail: !fromEmail,
      toEmailsEmpty: toEmails.length === 0,
    });
    return null;
  }

  return { resendApiKey, fromEmail, toEmails };
};

const buildInquirySubject = (data: any) =>
  `New ${data.eventType} inquiry from ${data.name}`;

const buildInquiryHtml = (data: any) => {
  const details: Array<[string, string]> = [
    ["Name", formatValue(data.name)],
    ["Email", formatValue(data.email)],
    ["Phone", formatValue(data.phone)],
    ["Event Type", formatValue(data.eventType)],
    ["Guest Count", formatValue(data.guestCount)],
    ["Event Date", formatValue(data.eventDate)],
    ["Source", data.source === "homepage" ? "Homepage form" : "Contact page form"],
  ];

  const rows = details
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e7dcc7;font-weight:600;background:#faf6ee;color:#2b241f;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #e7dcc7;color:#2b241f;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family:Montserrat,Arial,sans-serif;background:#f8f4ec;padding:32px;color:#2b241f;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #eadfcd;border-radius:20px;overflow:hidden;">
        <div style="padding:24px 28px;background:linear-gradient(135deg,#2a231e 0%,#3b322b 100%);color:#fff7eb;">
          <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#d4b062;">Palacio Event Centre</p>
          <h1 style="margin:0;font-size:28px;line-height:1.1;font-weight:600;">New Inquiry Received</h1>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;border-spacing:0;">
            <tbody>${rows}</tbody>
          </table>
          <div style="margin-top:24px;padding:20px;border-radius:18px;background:#faf6ee;border:1px solid #e7dcc7;">
            <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#b68b2c;font-weight:700;">Message</p>
            <p style="margin:0;white-space:pre-wrap;color:#2b241f;line-height:1.7;">${escapeHtml(formatValue(data.message))}</p>
          </div>
          <p style="margin:24px 0 0;color:#6a5c50;font-size:13px;line-height:1.6;">
            Sent from ${escapeHtml(BUSINESS_NAME)} inquiry form. Business phone: ${escapeHtml(BUSINESS_PHONE)}.
          </p>
        </div>
      </div>
    </div>
  `;
};

const buildInquiryText = (data: any) => [
  `Name: ${formatValue(data.name)}`,
  `Email: ${formatValue(data.email)}`,
  `Phone: ${formatValue(data.phone)}`,
  `Event Type: ${formatValue(data.eventType)}`,
  `Guest Count: ${formatValue(data.guestCount)}`,
  `Event Date: ${formatValue(data.eventDate)}`,
  `Source: ${data.source === "homepage" ? "Homepage form" : "Contact page form"}`,
  "",
  "Message:",
  formatValue(data.message),
  "",
  `Business: ${BUSINESS_NAME}`,
  `Business Phone: ${BUSINESS_PHONE}`,
].join("\n");

const validateInquiryForm = (data: any): { success: boolean; errors?: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone && !/^[0-9+\-().\s]{10,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.eventType) {
    errors.eventType = "Please select an event type.";
  }
  if (data.guestCount && (!/^\d+$/.test(data.guestCount) || Number(data.guestCount) < 1 || Number(data.guestCount) > 5000)) {
    errors.guestCount = "Please enter a valid guest count.";
  }
  if (!data.message || data.message.trim().length < 20) {
    errors.message = "Please share a few more details about your event.";
  }
  if (data.message && data.message.trim().length > 2000) {
    errors.message = "Please keep your message under 2000 characters.";
  }

  return { success: Object.keys(errors).length === 0, errors };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("[API] Inquiry request received:", { method: req.method });

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const config = getInquiryServerConfig(process.env);
  console.log("[INQUIRY] Config result:", config ? "loaded" : "NULL");

  if (!config) {
    return res.status(500).json({
      success: false,
      message: INQUIRY_SERVICE_ERROR,
    });
  }

  const body = req.body;
  console.log("[API] Parsed body:", JSON.stringify(body).substring(0, 200));

  const validation = validateInquiryForm(body);
  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: "Please correct the highlighted fields and try again.",
      errors: validation.errors,
    });
  }

  const data = body;

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "palacio-event-centre-inquiry/1.0",
      },
      body: JSON.stringify({
        from: config.fromEmail,
        to: config.toEmails,
        subject: buildInquirySubject(data),
        replyTo: data.email,
        html: buildInquiryHtml(data),
        text: buildInquiryText(data),
      }),
    });

    console.log("[INQUIRY] Resend API response:", {
      status: resendResponse.status,
      ok: resendResponse.ok,
    });

    if (!resendResponse.ok) {
      const providerJson = await resendResponse.json().catch(() => ({}));
      console.error("[INQUIRY] Resend API error:", providerJson);
      return res.status(502).json({
        success: false,
        message: providerJson.message || providerJson.error || SEND_FAILURE_MESSAGE,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("[API] Error:", error);
    return res.status(500).json({
      success: false,
      message: "We couldn't send your inquiry right now. Please try again later.",
    });
  }
}