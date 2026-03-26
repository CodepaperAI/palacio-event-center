import type { IncomingMessage } from "node:http";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
} from "../src/lib/seo";
import {
  getInquiryFormErrors,
  inquiryFormSchema,
  type InquiryFormData,
} from "../src/lib/contact-schema";

const RESEND_API_URL = "https://api.resend.com/emails";
const INQUIRY_SERVICE_ERROR =
  "Inquiry service is not configured on the server. Add the required Resend environment variables before launching.";
const SEND_FAILURE_MESSAGE =
  "We couldn't send your inquiry right now. Please try again or call us directly.";

interface InquiryServerConfig {
  resendApiKey: string;
  fromEmail: string;
  toEmails: string[];
}

interface InquiryRequestInput {
  method: string;
  body: unknown;
  env?: NodeJS.ProcessEnv;
}

export interface InquiryResponsePayload {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export interface InquiryHandlerResult {
  status: number;
  body?: InquiryResponsePayload;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatValue = (value: string) => (value.trim() ? value.trim() : "Not provided");

const getInquiryServerConfig = (env: NodeJS.ProcessEnv = process.env): InquiryServerConfig | null => {
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
    toEmails: toEmails,
    fromEmailPreview: fromEmail ? fromEmail.substring(0, 20) + "..." : "",
    resendApiKeyPreview: resendApiKey ? "***" + resendApiKey.slice(-4) : "",
  });

  if (!resendApiKey || !fromEmail || toEmails.length === 0) {
    console.error("[INQUIRY] Config missing! Missing fields:", {
      resendApiKey: !resendApiKey,
      fromEmail: !fromEmail,
      toEmailsEmpty: toEmails.length === 0,
    });
    return null;
  }

  return {
    resendApiKey,
    fromEmail,
    toEmails,
  };
};

const buildInquirySubject = (data: InquiryFormData) =>
  `New ${data.eventType} inquiry from ${data.name}`;

const buildInquiryHtml = (data: InquiryFormData) => {
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

const buildInquiryText = (data: InquiryFormData) => {
  const details = [
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
  ];

  return details.join("\n");
};

const normalizeBody = (body: unknown) => {
  if (typeof body === "string" && body.trim()) {
    return JSON.parse(body);
  }

  return body;
};

export const readJsonBodyFromNodeRequest = async (req: IncomingMessage & { body?: unknown }) => {
  // Vercel serverless functions provide pre-parsed body
  if ("body" in req && typeof (req as any).body !== "undefined") {
    return (req as any).body;
  }

  if (typeof req.body !== "undefined") {
    return req.body;
  }

  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
};

export const handleInquirySubmission = async ({
  method,
  body,
  env = process.env,
}: InquiryRequestInput): Promise<InquiryHandlerResult> => {
  if (method === "OPTIONS") {
    return { status: 204 };
  }

  if (method !== "POST") {
    return {
      status: 405,
      body: {
        success: false,
        message: "Method not allowed.",
      },
    };
  }

  const config = getInquiryServerConfig(env);
  console.log("[INQUIRY] Config result:", config ? "Config loaded successfully" : "Config is NULL");
  if (!config) {
    console.error("[INQUIRY] Returning 500 - service not configured");
    return {
      status: 500,
      body: {
        success: false,
        message: INQUIRY_SERVICE_ERROR,
      },
    };
  }

  let parsedBody: unknown;

  try {
    parsedBody = normalizeBody(body);
  } catch {
    return {
      status: 400,
      body: {
        success: false,
        message: "The inquiry payload could not be read.",
      },
    };
  }

  const validation = inquiryFormSchema.safeParse(parsedBody);

  if (!validation.success) {
    return {
      status: 400,
      body: {
        success: false,
        message: "Please correct the highlighted fields and try again.",
        errors: getInquiryFormErrors(validation.error),
      },
    };
  }

  const data = validation.data;

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
    statusText: resendResponse.statusText,
    ok: resendResponse.ok,
  });

  if (!resendResponse.ok) {
    let providerMessage = "";

    try {
      const providerJson = (await resendResponse.json()) as { message?: string; error?: string };
      console.error("[INQUIRY] Resend API error response:", providerJson);
      providerMessage =
        typeof providerJson?.message === "string"
          ? providerJson.message
          : typeof providerJson?.error === "string"
            ? providerJson.error
            : "";
    } catch {
      providerMessage = "";
    }

    return {
      status: 502,
      body: {
        success: false,
        message: providerMessage || SEND_FAILURE_MESSAGE,
      },
    };
  }

  return {
    status: 200,
    body: {
      success: true,
      message: "Inquiry sent successfully.",
    },
  };
};


