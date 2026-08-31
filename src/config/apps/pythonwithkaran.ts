import { AppConfig } from "@/types/app-config";

export const pythonWithKaranConfig: AppConfig = {
  metadata: {
    id: "pythonwithkaran",
    name: "PythonWithKaran",
    packageName: "com.pwk.pythonwithkaran",
    category: "Educational",
    description:
      "Learn. Code. Excel. A Flutter educational app delivering computer science, IT, IP & AI study notes, video tutorials, MCQs, and previous year question papers for CBSE Classes 9–12 students.",
    logoUrl: "/apps/pythonwithkaran/logo.png",
    version: "1.0.0",
    effectiveDate: "August 13, 2026",
    lastUpdated: "August 31, 2026",
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
      "PythonWithKaran ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application 'PythonWithKaran' (Package Name: com.pwk.pythonwithkaran). PythonWithKaran is built with an instant-access, local-first architecture: no user registration required, zero cloud account profiles, and fast on-device storage for your learning journey.",
    dataCollection: [
      {
        category: "Local Device Preferences & Avatar (Optional / Local Only)",
        items: [
          "Display name / student nickname (stored locally on device)",
          "Profile avatar / icon choice (stored locally on device)",
        ],
        purpose:
          "PythonWithKaran does not require user accounts, email registration, or passwords. Any profile name or avatar icon set within the app is stored strictly on your local device (via Hive local storage) and is never transmitted to our servers or third parties.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Educational Progress & App Activity (Local Storage)",
        items: [
          "Quiz/MCQ scores and completion history",
          "Completed study chapters and topic bookmarks",
          "Video watch history and favorites list",
          "User preferences and study settings",
        ],
        purpose:
          "Quiz scores, completed chapters, bookmarks, and video watch history are saved directly on the user's local device storage (via Hive) for fast offline access. This data is never uploaded to remote cloud databases.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Advertising & Technical Identifiers (Google AdMob)",
        items: [
          "Device identifiers (e.g., Google Advertising ID / AAID)",
          "User Messaging Platform (UMP) consent status",
          "IP address (used strictly for country-level ad serving and fraud prevention)",
          "Anonymous app performance and crash diagnostic logs",
          "Local Hive cache storage keys (to speed up offline PDF notes and syllabus access)",
        ],
        purpose:
          "To support ongoing maintenance and provide free educational content to CBSE students, the app serves advertisements via Google Mobile Ads (AdMob) and utilizes local caching for high performance.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google Mobile Ads (AdMob)",
        provider: "Google LLC",
        purpose:
          "Serves banner, interstitial, and rewarded advertisements, and manages advertising identifiers (AAID) and user consent (UMP).",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Google Firebase",
        provider: "Google LLC",
        purpose:
          "Collects anonymous diagnostic logs, crash reports, and aggregate usage analytics to maintain app stability.",
        privacyPolicyUrl: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Supabase",
        provider: "Supabase Inc.",
        purpose:
          "Hosts public educational PDF notes, chapter materials, and syllabus files.",
        privacyPolicyUrl: "https://supabase.com/privacy",
      },
      {
        name: "YouTube API Services",
        provider: "Google LLC / YouTube",
        purpose:
          "Streams educational tutorial videos and Shorts directly in-app.",
        privacyPolicyUrl: "https://www.youtube.com/t/terms",
      },
    ],
    dataUsePurposes: [
      "Provide, maintain, and improve the PythonWithKaran educational platform.",
      "Deliver CBSE-aligned notes, MCQs, syllabus files, and video tutorials efficiently.",
      "Save quiz progress, bookmarks, and video history strictly on local device storage (Hive cache).",
      "Display family-safe advertisements via Google Mobile Ads (AdMob) to keep educational resources freely available to all students.",
      "Provide optional Rewarded Video Ads allowing users to unlock detailed quiz solutions and explanations.",
      "Respond to student support requests and technical inquiries.",
      "Detect, prevent, and address technical bugs or crash reports to ensure high app performance.",
    ],
    dataRetentionPolicy:
      "Because PythonWithKaran operates without remote server accounts, you have complete control over your data. All student progress, quiz history, and offline caches are stored locally on your device (via Hive) and are retained only as long as the application remains installed. Clearing app storage in your device Settings or uninstalling the app permanently erases all local data immediately.",
    securityPractices: [
      "Zero Cloud Account Databases: PythonWithKaran does not store user profiles, passwords, or personal credentials on cloud servers.",
      "Local Sandbox Storage: Study progress, avatar preferences, and quiz history are isolated within the device's secure local Hive storage.",
      "Encrypted Data in Transit: All network requests for educational notes (Supabase) and ads (Google AdMob) use secure HTTPS/TLS encryption.",
      "Minimal System Permissions: The app requests only network permissions strictly necessary for loading public educational materials and advertisements.",
    ],
    childrensPrivacy:
      "PythonWithKaran is designed for students studying CBSE Computer Science, IT, IP, and AI courses (typically ages 13 and above). We do not knowingly collect personal information from children under 13 without parental/guardian consent. If we learn that we have collected personal data from a child under 13 without verification, we will promptly delete that information.",
    userRights: [
      "Local Data Erasure: You can erase all local study progress, quiz history, and cached PDFs at any time simply by clearing the app's cache/storage in your device Settings or by uninstalling the app.",
      "Ad Personalization Opt-Out: You can manage or reset your advertising ID and opt out of personalized ads via your device's Google Settings > Ads or by visiting https://adssettings.google.com.",
      "Offline Study Access: Full access to cached chapter notes and offline quizzes without requiring any internet connection or user login.",
      "Support Inquiries: Contact us at pythonwithkaran.official@gmail.com for any privacy questions or assistance.",
    ],
    internationalTransfers:
      "Because PythonWithKaran does not operate remote user account servers, no personal profile data is transferred across borders. Content delivery and advertising requests (Supabase, YouTube, Google AdMob) are processed across their respective secure global networks in accordance with their privacy policies.",
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
          "By installing, accessing, or using PythonWithKaran, you confirm that you have read, understood, and agreed to these Terms and our Privacy Policy. If you do not agree to these terms, you must refrain from using the application.",
      },
      {
        id: "eligibility",
        title: "2. Eligibility & Student Safety",
        content:
          "PythonWithKaran is intended primarily for high school students, educators, and self-learners studying Computer Science, Information Technology, Informatics Practices, and Artificial Intelligence. Users under 18 must use the app with parent or legal guardian guidance.",
      },
      {
        id: "instant-access",
        title: "3. Instant Access (No Account Required)",
        content:
          "PythonWithKaran is designed as an instant-access educational companion. You do not need to register an account or provide login credentials to access syllabus notes, previous year question papers (PYQs), video lessons, or chapter quizzes.",
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
          "Using automated bots, emulators, or ad-clicking scripts to artificially manipulate AdMob advertising impressions or rewarded ad features.",
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
        title: "8. Local Data Storage & Offline Caching",
        content:
          "User quiz history, bookmarked topics, and reading positions are stored locally on your device using local caching mechanisms (Hive). PythonWithKaran is not responsible for data loss resulting from device resets, manual storage clearing, or device changes.",
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
        id: "data-reset-termination",
        title: "11. Data Reset & Termination of Use",
        content:
          "You may discontinue use of the App at any time. To remove all locally stored progress, bookmarks, and preferences, you can clear app storage from your device settings or uninstall the App.",
      },
      {
        id: "advertisements",
        title: "12. Advertisements & Sponsored Content",
        content:
          "PythonWithKaran is supported by third-party advertisements served via Google AdMob. Certain features, such as unlocking detailed quiz solutions, may offer optional rewarded video advertisements.",
      },
      {
        id: "governing-law",
        title: "13. Governing Law & Jurisdiction",
        content:
          "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
      },
      {
        id: "contact-terms",
        title: "14. Contact Information",
        content:
          "For any legal questions, copyright inquiries, or support requests regarding these Terms, please contact us at pythonwithkaran.official@gmail.com.",
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Instant access / Zero sign-up architecture). All study progress, bookmarks, and cached files are stored locally on your device. To erase all data immediately, go to Android Settings -> Apps -> PythonWithKaran -> Storage -> Clear Data / Clear Storage, or uninstall the app from your device.",
    deletedDataTypes: [
      "Local Hive cache records (display name and avatar choice)",
      "Quiz completion history, MCQ scores, and chapter progress",
      "Bookmarked notes and saved video favorites list",
      "Locally cached PDF study materials and syllabus documents",
    ],
    retainedDataTypes: [],
    retentionReason:
      "PythonWithKaran does not collect, transmit, or retain any personal data on cloud servers. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "pythonwithkaran.official@gmail.com",
  },
};
