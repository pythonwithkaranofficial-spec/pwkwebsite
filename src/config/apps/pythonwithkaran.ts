import { AppConfig } from "@/types/app-config";

export const pythonWithKaranConfig: AppConfig = {
  metadata: {
    id: "pythonwithkaran",
    name: "PythonWithKaran",
    packageName: "com.pwk.pythonwithkaran",
    category: "Educational",
    description: "Learn. Code. Excel. A Flutter educational app delivering computer science, IT, IP & AI study notes, video tutorials, MCQs, and previous year question papers for CBSE Classes 9–12 students.",
    logoUrl: "/apps/pythonwithkaran/logo.png",
    version: "1.0.0",
    effectiveDate: "August 13, 2026",
    lastUpdated: "August 13, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Karan Saini",
    email: "pythonwithkaran.official@gmail.com",
    supportEmail: "pythonwithkaran.official@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "PythonWithKaran ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application 'PythonWithKaran' (Package Name: com.pwk.pythonwithkaran). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access or use the application.",
    dataCollection: [
      {
        category: "Account & Profile Information",
        items: ["Email address", "Display name", "Profile avatar / picture (optional upload)"],
        purpose: "To register your user account, authenticate access via Firebase Authentication, and personalize your profile within the app.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
      {
        category: "Educational Progress & App Activity",
        items: ["Quiz/MCQ scores and completion history", "Completed study chapters and topic bookmarks", "Video watch history and favorites", "User preferences and settings"],
        purpose: "To synchronize your learning achievements across devices via Cloud Firestore and provide personalized study analytics.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Technical Identifiers & Offline Cache",
        items: ["Firebase Auth authentication token", "Local Hive cache storage keys", "App performance and crash diagnostic logs"],
        purpose: "To maintain secure active sessions, speed up PDF notes loading, enable offline caching, and improve app stability.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Firebase Authentication",
        provider: "Google LLC",
        purpose: "Handles user login, passwordless email-link sign in, Google Sign-In verification, and session token security.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Cloud Firestore",
        provider: "Google LLC",
        purpose: "Stores user profiles, roles, course structures, chapters, and progress records securely in the cloud.",
        privacyPolicyUrl: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Supabase Storage & Database",
        provider: "Supabase Inc.",
        purpose: "Hosts educational PDF notes, chapter material assets, and optional user profile avatars.",
        privacyPolicyUrl: "https://supabase.com/privacy",
      },
      {
        name: "YouTube Data API & Player",
        provider: "Google LLC / YouTube",
        purpose: "Streams educational video lessons and Shorts directly within the app.",
        privacyPolicyUrl: "https://www.youtube.com/t/terms",
      },
      {
        name: "Firebase Analytics",
        provider: "Google LLC",
        purpose: "Collects aggregated, anonymous app usage metrics to diagnose crashes and optimize educational feature performance.",
        privacyPolicyUrl: "https://firebase.google.com/support/privacy",
      },
    ],
    dataUsePurposes: [
      "Provide, maintain, and improve the PythonWithKaran educational platform.",
      "Authenticate user logins and protect account security.",
      "Sync quiz progress, bookmarks, and video history across your devices.",
      "Deliver CBSE-aligned notes, MCQs, and video tutorials efficiently.",
      "Respond to student support requests and technical inquiries.",
      "Detect, prevent, and address technical bugs or unauthorized app activity.",
    ],
    dataRetentionPolicy:
      "We retain user personal data (such as account credentials and learning progress) for as long as your account remains active. If you request account deletion, all personal profile records, stored avatars, and quiz progress will be securely erased from Cloud Firestore and Supabase Storage after identity verification.",
    securityPractices: [
      "All network communication between the app and servers is encrypted in transit using standard HTTPS/TLS protocols.",
      "Authentication tokens are managed through secure Firebase Authentication SDKs.",
      "Cloud Firestore and Supabase access control rules enforce strict user-level data isolation.",
      "No plain-text passwords or secret credentials are ever stored on user devices or client applications.",
    ],
    childrensPrivacy:
      "PythonWithKaran is designed for students studying CBSE Computer Science, IT, IP, and AI courses (typically ages 13 and above). We do not knowingly collect personal information from children under 13 without parental/guardian consent. If we learn that we have collected personal data from a child under 13 without verification, we will promptly delete that information.",
    userRights: [
      "Access: You have the right to request access to the personal data we hold about you.",
      "Correction: You can update your display name and profile image directly inside the application settings.",
      "Deletion: You can request complete account and data deletion at any time via the in-app menu or our dedicated account deletion web portal.",
      "Objection/Opt-Out: You can log out of the application to suspend active cloud data synchronization.",
    ],
    internationalTransfers:
      "Your information may be transferred to and maintained on cloud servers operated by Google Cloud (Firebase) and Supabase located outside your state or country. By using the app, you consent to this transfer.",
    changesToPolicy:
      "We may update our Privacy Policy from time to time. We will notify you of any changes by updating the 'Last Updated' date at the top of this policy and posting the updated policy on our website.",
  },
  terms: {
    introduction:
      "Welcome to PythonWithKaran. These Terms and Conditions ('Terms') govern your use of the PythonWithKaran mobile application ('App') and related services. By installing, accessing, or using PythonWithKaran, you agree to be bound by these Terms.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content:
          "By creating an account or using PythonWithKaran, you confirm that you have read, understood, and agreed to these Terms and our Privacy Policy. If you do not agree to these terms, you must refrain from using the application.",
      },
      {
        id: "eligibility",
        title: "2. Eligibility & Student Safety",
        content:
          "PythonWithKaran is intended primarily for high school students, educators, and self-learners studying Computer Science, Information Technology, Informatics Practices, and Artificial Intelligence. Users under 18 must use the app with parent or legal guardian guidance.",
      },
      {
        id: "account-registration",
        title: "3. Account Registration & Security",
        content:
          "To access cloud synchronization, quizzes, and personalized notes, you must register an account using a valid email address or supported third-party provider (Google Sign-In). You are responsible for maintaining the confidentiality of your login credentials.",
      },
      {
        id: "educational-content",
        title: "4. Educational Purpose & Disclaimer",
        content:
          "All educational materials, notes, code samples, MCQs, and solutions provided in PythonWithKaran are for informational and educational preparation purposes. While we strive for accuracy, we make no guarantee that the content guarantees specific exam performance or scores.",
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property Rights",
        content:
          "All original study notes, proprietary quizzes, UI design elements, logos, and curriculum structures in PythonWithKaran are the intellectual property of PythonWithKaran / Karan Saini. You are granted a non-exclusive, non-transferable, revocable license for personal, non-commercial educational use only.",
      },
      {
        id: "prohibited-uses",
        title: "6. Prohibited Activities",
        content: [
          "Scraping, copying, or bulk downloading study material or PDF notes for re-distribution or commercial sale.",
          "Attempting to reverse engineer, decompile, or tamper with the application binary or network communication.",
          "Attempting to bypass security mechanisms or gain unauthorized admin access to Firestore/Supabase databases.",
          "Impersonating another student, educator, or developer.",
        ],
      },
      {
        id: "youtube-integration",
        title: "7. Third-Party Content & YouTube Services",
        content:
          "PythonWithKaran embeds educational video tutorials hosted on YouTube via the official YouTube Player SDK. By utilizing video features in the App, users agree to be bound by the YouTube Terms of Service (https://www.youtube.com/t/terms) and Google Privacy Policy.",
      },
      {
        id: "user-generated-progress",
        title: "8. User Progress & Data Storage",
        content:
          "Your quiz progress, favorites, and watch history are synchronized using Cloud Firestore and local Hive cache. PythonWithKaran is not liable for data loss arising from device loss, unauthorized password sharing, or third-party service outages.",
      },
      {
        id: "modifications-to-service",
        title: "9. Modifications to App & Content",
        content:
          "We reserve the right to modify, update, suspend, or discontinue any feature, syllabus chapter, quiz set, or note PDF at any time without prior notice.",
      },
      {
        id: "limitation-of-liability",
        title: "10. Limitation of Liability",
        content:
          "To the fullest extent permitted by applicable law, PythonWithKaran and its creator shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the application.",
      },
      {
        id: "account-deletion-terms",
        title: "11. Account Deletion & Termination",
        content:
          "You may request account deletion at any time via the app settings or the web portal. PythonWithKaran reserves the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.",
      },
      {
        id: "governing-law",
        title: "12. Governing Law & Jurisdiction",
        content:
          "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
      },
      {
        id: "contact-terms",
        title: "13. Contact Information",
        content:
          "For any legal questions, copyright inquiries, or support requests regarding these Terms, please contact us at pythonwithkaran.official@gmail.com.",
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: true,
    inAppDeletionPath: "Open PythonWithKaran app -> Profile tab -> Tap Settings icon -> Select 'Delete Account'",
    deletedDataTypes: [
      "User authentication record (Firebase Auth account & credentials)",
      "Registered email address and display name",
      "User profile document in Cloud Firestore",
      "Uploaded profile photo avatar from Supabase Storage",
      "Quiz completion history, MCQ scores, and chapter progress",
      "Bookmarked notes and saved video favorites list",
    ],
    retainedDataTypes: [
      "Anonymous, aggregated app performance statistics (non-personally identifiable)",
      "Temporary security & rate-limiting logs (retained temporarily if legally required)",
    ],
    retentionReason: "Security logs and fraud prevention records are retained temporarily as required by cybersecurity best practices.",
    processingTime: "Requests are securely verified and processed as soon as reasonably possible.",
    supportEmail: "pythonwithkaran.official@gmail.com",
  },
};
