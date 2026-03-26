import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
} from "@/lib/seo";
import {
  inquiryFormSchema,
  type InquiryFormData,
} from "@/lib/contact-schema";

export interface SubmitInquiryResult {
  mode: "endpoint";
}

export const CONTACT_FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || "/api/inquiry";

export const submitInquiry = async (input: InquiryFormData): Promise<SubmitInquiryResult> => {
  console.log("[CONTACT] submitInquiry called with:", input);
  const data = inquiryFormSchema.parse(input);
  console.log("[CONTACT] Schema validated, sending to endpoint:", CONTACT_FORM_ENDPOINT);

  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...data,
      business: BUSINESS_NAME,
      businessPhone: BUSINESS_PHONE,
      replyTo: data.email,
      submittedAt: new Date().toISOString(),
    }),
  });

  console.log("[CONTACT] Response received:", { status: response.status, ok: response.ok });

  if (!response.ok) {
    let errorMessage = "We couldn't send your inquiry right now. Please try again or call us directly.";

    try {
      const responseJson = await response.json();
      console.log("[CONTACT] Error response JSON:", responseJson);
      const providerMessage =
        typeof responseJson?.error === "string"
          ? responseJson.error
          : typeof responseJson?.message === "string"
            ? responseJson.message
            : "";

      if (providerMessage) {
        errorMessage = providerMessage;
      }
    } catch {
      // Keep the fallback message if the endpoint doesn't return JSON.
    }

    console.error("[CONTACT] Submit failed:", errorMessage);
    throw new Error(errorMessage);
  }

  console.log("[CONTACT] Submit successful!");
  return { mode: "endpoint" };
};
