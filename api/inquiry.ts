import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  handleInquirySubmission,
  readJsonBodyFromNodeRequest,
} from "../server/inquiry";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("[API] Inquiry request received:", { method: req.method, url: req.url });
  try {
    // Convert VercelRequest to Node IncomingMessage-like format
    const body = await readJsonBodyFromNodeRequest(req as any);
    console.log("[API] Parsed body:", JSON.stringify(body).substring(0, 200));

    const result = await handleInquirySubmission({
      method: req.method ?? "GET",
      body,
    });

    console.log("[API] Submission result:", { status: result.status, success: result.body?.success, message: result.body?.message });

    res.status(result.status).json(result.body ?? {});
  } catch (error) {
    console.error("[API] Error caught:", error);
    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "We couldn't send your inquiry right now. Please try again later.",
    });
  }
}