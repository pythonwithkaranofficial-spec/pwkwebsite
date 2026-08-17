import { AppConfig } from "@/types/app-config";

export const periodicTableExplorerConfig: AppConfig = {
  metadata: {
    id: "periodictableexplorer",
    name: "Periodic Table Explorer",
    packageName: "com.pwk.periodictableexplorer",
    category: "Education",
    description:
      "Interactive Periodic Table & Chemistry Reference. Explore all 118 elements, electron configurations, Bohr models, chemical properties, interactive element comparisons, and quiz games — fully functional 100% offline.",
    logoUrl: "/apps/periodictableexplorer/logo.png",
    version: "1.0.0",
    effectiveDate: "August 17, 2026",
    lastUpdated: "August 17, 2026",
    platform: "iOS & Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Periodic Table Explorer",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Periodic Table Explorer ('we', 'our', or 'the App') is committed to protecting the privacy of our users, including students, teachers, and chemistry enthusiasts. This Privacy Policy explains how our application handles information and data when you use the mobile application (Package ID: com.pwk.periodictableexplorer). Periodic Table Explorer operates on a strict privacy-first architecture: zero personal data collected, no account required, and 100% offline core functionality.",
    dataCollection: [
      {
        category: "Information We Do NOT Collect (Zero Personal Data)",
        items: [
          "First or last name",
          "Email address or physical address",
          "Phone numbers or contacts list",
          "GPS or precise location data",
          "Photos, camera access, audio recordings, or device files",
          "Financial, banking, or payment card details",
          "Biometric data or personal profiles",
        ],
        purpose:
          "The App does not collect, transmit, store, or sell any Personally Identifiable Information (PII). You do not need to create an account or log in to use any feature in the App.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Local Data Storage on Your Device (SharedPreferences)",
        items: [
          "Favorites / Bookmarks: Elements starred for quick review and study",
          "Quiz Statistics: Current score, streak count, accuracy rate, and session counter",
          "User Preferences: Theme choice (Dark Mode / Light Mode), Haptic Feedback (vibrations), Sound Effects toggle, and display settings (Atomic Mass & Electron Config toggles)",
        ],
        purpose:
          "The App stores non-personal app preferences and study progress locally on your device via standard SharedPreferences. This data never leaves your device and is never uploaded to external servers. You can erase this data at any time by clearing the App's data in Android settings or by uninstalling the application.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Advertising Data (Google AdMob SDK)",
        items: [
          "Device identifiers (e.g., Google Advertising ID / AAID / IDFA)",
          "IP address (used strictly for approximate / country-level ad serving and fraud detection)",
          "Ad interaction and performance metrics (views, clicks, impressions)",
          "Crash logs and app performance diagnostics",
        ],
        purpose:
          "To support ongoing maintenance and provide the app free to learners worldwide, the App integrates Google AdMob (Google Mobile Ads SDK) to display App Open, Anchored Banner, Interstitial, and optional Rewarded Ads (which provide 50:50 lifelines in the chemistry quiz). AdMob App ID: ca-app-pub-1063071230306366~4799205538.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Analytics & Tracking SDKs (Zero Analytics)",
        items: [
          "No Google Analytics or Firebase Analytics integrated",
          "No Facebook SDK or social tracker integration",
          "No cross-app user tracking or behavioral profiling",
        ],
        purpose:
          "We do not use any third-party behavioral analytics or telemetry SDKs to monitor your learning activities inside the application.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK)",
        provider: "Google LLC",
        purpose:
          "Displays advertising formats (Banner, Interstitial, App Open, and Rewarded video ads for quiz 50:50 lifelines). AdMob App ID: ca-app-pub-1063071230306366~4799205538.",
        privacyPolicyUrl: "https://support.google.com/admob/answer/6128543",
      },
      {
        name: "Google Privacy & Advertising Terms",
        provider: "Google LLC",
        purpose:
          "Governs how Google handles advertising data and technology across mobile applications.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ads Settings (Opt-Out Resource)",
        provider: "Google LLC",
        purpose:
          "Allows users to manage ad personalization preferences or opt out of personalized ads.",
        privacyPolicyUrl: "https://adssettings.google.com",
      },
      {
        name: "Google Fonts",
        provider: "Google LLC",
        purpose:
          "Provides clean typography rendering (Poppins & Inter fonts) for chemistry tables and UI cards.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataUsePurposes: [
      "Deliver 100% offline access to all 118 chemical elements, Bohr atomic models, electron configurations, comparisons, and periodic trends.",
      "Save study bookmarks, quiz statistics (scores, streaks, accuracy rate), and user preferences strictly on local device storage.",
      "Display family-safe advertisements via Google Mobile Ads (AdMob) to keep the educational application completely free for students and teachers.",
      "Provide optional Rewarded Video Ads allowing users to unlock 50:50 hints during chemistry quiz sessions.",
    ],
    dataRetentionPolicy:
      "We do not maintain any cloud databases or external user records for Periodic Table Explorer. All user-generated data (bookmarked elements, quiz statistics, and settings) resides strictly in your device's local SharedPreferences. This data is retained only as long as the application remains installed on your device. Clearing app storage or uninstalling the app permanently erases all local data immediately.",
    securityPractices: [
      "Zero Cloud Databases: No user personal information is ever transmitted to or stored on external cloud servers.",
      "Local Isolation: Bookmarked elements and quiz preferences are securely stored within the Android application sandbox via SharedPreferences.",
      "Encrypted Ad Communications: All ad requests communicated by the Google AdMob SDK are encrypted in transit via standard HTTPS/TLS.",
      "Minimal System Permissions: The application requests only the minimal system permissions strictly required for ad loading (INTERNET) and tactile feedback (VIBRATE).",
    ],
    childrensPrivacy:
      "Periodic Table Explorer is designed for general audiences and educational use by students of all ages. We do not knowingly collect any personally identifiable information from children under the age of 13. Advertisements displayed within the app are configured to adhere to Google Play Families Policy and COPPA guidelines for family-safe, educational viewing. If a parent or guardian believes that non-compliant data has been collected, please contact us immediately at officialworldwithtechnology@gmail.com and we will take appropriate measures.",
    userRights: [
      "Local Data Erasure: You can erase all local bookmarks, quiz statistics, and preferences at any time by clearing the App's data/cache in your Android device settings or by uninstalling the application.",
      "Ads Personalization Opt-Out: You can opt out of personalized ads at any time via your device's Google Settings > Ads > Opt out of Ads Personalization or by visiting https://adssettings.google.com.",
      "Haptic Feedback (Vibration) Control: You can toggle tactile haptic vibration on or off at any time in the app Settings.",
      "Sound Effects Control: You can mute or enable quiz audio sound effects in Settings.",
      "Display Customization: You can enable or disable Atomic Mass and Electron Configuration values on the periodic table grid.",
    ],
    internationalTransfers:
      "Because Periodic Table Explorer does not operate cloud servers, no user account data is transferred across borders. Third-party ad requests processed by Google AdMob are handled across Google's secure global infrastructure in accordance with Google's Privacy Policy.",
    changesToPolicy:
      "We may update our Privacy Policy periodically to reflect changes in legal requirements, features, or third-party service policies. Any changes will be posted on this page with an updated 'Last Updated' date.",
  },
  terms: {
    introduction:
      "Welcome to Periodic Table Explorer. These Terms and Conditions ('Terms') govern your use of the Periodic Table Explorer mobile application ('App') developed by Karan Saini. By downloading, installing, or using Periodic Table Explorer, you agree to be bound by these Terms.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content:
          "By downloading, accessing, or using Periodic Table Explorer, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please discontinue using and uninstall the application.",
      },
      {
        id: "offline-educational-use",
        title: "2. Educational Purpose & Scientific Reference",
        content:
          "Periodic Table Explorer is an interactive reference and study aid provided for educational, scientific, and informational purposes for students, teachers, and researchers. While element data, atomic weights, electron configurations, Bohr models, and properties have been meticulously compiled from IUPAC (International Union of Pure and Applied Chemistry) and standard scientific references, the software is provided on an 'as-is' and 'as-available' basis without warranty of any kind.",
      },
      {
        id: "no-account-architecture",
        title: "3. Account-Free Architecture & Local Storage",
        content:
          "Periodic Table Explorer does not require or support user account registration. All element bookmarks, quiz statistics (scores, streaks, accuracy), and customization settings are stored locally on your device via SharedPreferences. Clearing your device application storage or uninstalling the app will permanently reset all locally saved bookmarks and quiz progress.",
      },
      {
        id: "advertising-and-rewarded-ads",
        title: "4. Third-Party Advertising & Rewarded Ad Features",
        content:
          "To provide free access to all 118 elements and study features, Periodic Table Explorer displays third-party advertisements served via the Google Mobile Ads (AdMob) SDK (including App Open, Banner, Interstitial, and optional Rewarded Video ads). Rewarded ads provide optional in-game lifelines (such as 50:50 quiz hints). Ad content is subject to Google AdMob's terms and advertising policies.",
      },
      {
        id: "device-permissions",
        title: "5. App Permissions & Hardware Features",
        content: [
          "android.permission.INTERNET: Used exclusively to load advertisements via Google AdMob and check ad network availability. All scientific tables, element descriptions, and quizzes remain fully functional offline without internet access.",
          "android.permission.VIBRATE: Used to provide optional tactile haptic feedback during UI interaction and button taps. Users can toggle haptic feedback on or off in the app Settings.",
        ],
      },
      {
        id: "intellectual-property",
        title: "6. Intellectual Property Rights",
        content:
          "All custom user interface designs, Bohr model visualizations, quiz algorithms, software code, icons, and graphic layouts in Periodic Table Explorer are the intellectual property of Karan Saini. You are granted a limited, personal, non-exclusive, non-transferable, revocable license to use the app for personal and educational study.",
      },
      {
        id: "prohibited-activities",
        title: "7. Prohibited Uses",
        content: [
          "Decompiling, reverse engineering, disassembling, or attempting to derive the source code of the application binary.",
          "Using automated bots, emulators, or ad-clicking scripts to artificially manipulate AdMob advertising impressions or rewarded ad lifelines.",
          "Extracting, bundling, or redistributing the proprietary database assets or graphics for commercial sale without express written authorization.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content:
          "To the maximum extent permitted by applicable law, the developer shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use the application or any reliance placed upon the scientific data provided within the app.",
      },
      {
        id: "governing-law",
        title: "9. Governing Law & Jurisdiction",
        content:
          "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
      },
      {
        id: "contact-information",
        title: "10. Contact & Support",
        content:
          "For any questions, feedback, or inquiries regarding these Terms or the application, please reach out to officialworldwithtechnology@gmail.com.",
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Zero sign-up/login architecture). All study data is stored locally. To erase all data immediately, go to Android Settings -> Apps -> Periodic Table Explorer -> Storage -> Clear Data / Clear Storage, or uninstall the app from your device.",
    deletedDataTypes: [
      "Bookmarked & saved favorite chemical elements",
      "Chemistry quiz statistics (scores, streaks, accuracy rate, and session counter)",
      "User preferences (Dark Mode / Light Mode, sound effects, haptic feedback, atomic mass, electron configuration toggles)",
    ],
    retainedDataTypes: [],
    retentionReason:
      "Periodic Table Explorer does not collect, transmit, or retain any personal data on cloud servers. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
