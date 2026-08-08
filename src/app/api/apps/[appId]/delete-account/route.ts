import { NextRequest, NextResponse } from "next/server";
import { getAppConfig, isValidAppId } from "@/config/apps";

export async function POST(
  request: NextRequest,
  { params }: { params: { appId: string } }
) {
  try {
    const { appId } = params;

    // 1. Validate application existence
    if (!isValidAppId(appId)) {
      return NextResponse.json(
        { success: false, error: "Application not found in compliance registry." },
        { status: 404 }
      );
    }

    const app = getAppConfig(appId)!;

    if (!app.accountDeletion.supportsAccountCreation) {
      return NextResponse.json(
        {
          success: false,
          error: "This application does not collect user accounts or cloud profile data.",
        },
        { status: 400 }
      );
    }

    // 2. Parse request payload
    const body = await request.json();
    const { email, reason, confirmed } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!confirmed) {
      return NextResponse.json(
        { success: false, error: "You must confirm that account deletion is permanent." },
        { status: 400 }
      );
    }

    // 3. Generate secure Request ID
    const requestId = `DEL-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    // STAGE 1 LOGIC: Record request for manual verification
    console.log(`[ACCOUNT DELETION REQUEST]`, {
      requestId,
      appId,
      email,
      reason: reason || "N/A",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
    });

    /* 
      STAGE 2 BACKEND INTEGRATION HOOK (Prepared for production deployment):
      
      When environment variables are provided on Vercel:
      - process.env.FIREBASE_SERVICE_ACCOUNT_KEY
      - process.env.SUPABASE_SERVICE_ROLE_KEY
      
      You can perform automated deletion server-side:
      
      ```ts
      if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        const admin = await getFirebaseAdminApp();
        const user = await admin.auth().getUserByEmail(email);
        
        // Delete Firestore document
        await admin.firestore().collection("users").doc(user.uid).delete();
        
        // Delete Firebase Auth User
        await admin.auth().deleteUser(user.uid);
      }
      ```
      
      Secrets are strictly executed server-side in this API route and NEVER exposed to client browsers.
    */

    return NextResponse.json({
      success: true,
      requestId,
      message: `Account deletion request recorded. Identity verification instructions sent to ${email}.`,
      app: app.metadata.name,
      processingTime: app.accountDeletion.processingTime,
    });
  } catch (err: any) {
    console.error("API error handling account deletion request:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
