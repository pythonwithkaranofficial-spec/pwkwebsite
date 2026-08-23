import { AppConfig } from "@/types/app-config";

export const ncertMathFormulasHubConfig: AppConfig = {
  metadata: {
    id: "ncertmathformulashub",
    name: "NCERT Math Formulas Hub",
    packageName: "com.pwk.ncertmathformulashub",
    category: "Education",
    description:
      "Comprehensive offline NCERT Mathematics formulas, theorems, and definitions reference for Class 9, Class 10, Class 11, and Class 12 students. Features chapter-wise formulas, interactive flashcards, bookmarks, daily study streaks, and practice quizzes — fully functional 100% offline.",
    logoUrl: "/apps/ncertmathformulashub/logo.png",
    version: "1.0.0",
    effectiveDate: "August 23, 2026",
    lastUpdated: "August 23, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "NCERT Math Formulas Hub",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "NCERT Math Formulas Hub ('we', 'our', or 'the App') is committed to protecting your privacy. This Privacy Policy explains how NCERT Math Formulas Hub handles information when you use our mobile application available on the Google Play Store (Package ID: com.pwk.ncertmathformulashub). We are committed to protecting your privacy. This App is designed as an offline-first educational tool for students from Class 9 to Class 12.",
    dataCollection: [
      {
        category: "Personal Information (Zero PII Collection)",
        items: [
          "First or last name",
          "Email address",
          "Phone number",
          "Physical address or postal code",
          "Contact list or address book",
          "Photos, camera access, audio recordings, or device files",
          "Financial, banking, or payment card details",
          "Biometric data or personal profiles",
          "GPS or precise location data",
        ],
        purpose:
          "We do NOT collect, store, or transmit any Personally Identifiable Information (PII). The App does not require user registration, sign-up, or account creation.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Offline & Local Device Data (On-Device Storage)",
        items: [
          "Bookmarked formulas and theorems",
          "Recently viewed formulas and chapters",
          "Daily study streak count and milestone achievement badges",
          "Quiz performance, accuracy score, and flashcard statistics",
          "App theme preferences (Dark Mode / Light Mode) and font scale settings",
        ],
        purpose:
          "All your learning progress, bookmarks, and preferences are stored locally on your device (using on-device storage) and are never sent to external servers or shared with third parties. You can erase this data at any time by clearing the App's data in Android settings or by uninstalling the application.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Services & Advertising (Google AdMob)",
        items: [
          "Device Identifiers: Android Advertising ID (AD_ID), general device model, and OS version",
          "IP address (used strictly for approximate / country-level ad serving and fraud detection)",
          "Ad Performance Metrics: Ad impressions, click data, and diagnostic/crash information",
        ],
        purpose:
          "To support the ongoing development and maintenance of this free educational app, we display third-party advertisements via Google AdMob in accordance with Google Play Developer Policies and Google's Privacy Policy.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "System Permissions Used by the App",
        items: [
          "android.permission.INTERNET: Required to load Google AdMob advertisements and verify network connectivity.",
          "android.permission.ACCESS_NETWORK_STATE: Used to verify internet connectivity before requesting ads.",
          "com.google.android.gms.permission.AD_ID: Used by the Google Mobile Ads SDK to serve relevant ads according to Google Play Developer Policies.",
        ],
        purpose:
          "The App requests minimal permissions solely for ad delivery and performance. All mathematical formulas, theorems, flashcards, and quizzes remain fully functional 100% offline.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK)",
        provider: "Google LLC",
        purpose:
          "Displays advertising formats (Banner, Interstitial, and App Open ads) to support free educational access for all students. Collects non-personally identifiable technical identifiers.",
        privacyPolicyUrl: "https://support.google.com/admob/answer/6128543",
      },
      {
        name: "Google Privacy Policy",
        provider: "Google LLC",
        purpose:
          "Governs how Google collects, stores, and processes information across mobile applications and SDK services.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Partner Technologies Policy",
        provider: "Google LLC",
        purpose:
          "Details how Google uses data when you use partner apps and advertising technologies.",
        privacyPolicyUrl: "https://policies.google.com/technologies/partner-sites",
      },
    ],
    dataUsePurposes: [
      "Deliver 100% offline access to NCERT Mathematics formulas, theorems, definitions, and flashcards for Classes 9, 10, 11, and 12.",
      "Save bookmarked formulas, study streak achievements, quiz performance statistics, and user interface preferences strictly on local device storage.",
      "Display family-safe advertisements via Google Mobile Ads (AdMob) to keep the educational application completely free for students and educators.",
      "Maintain app stability, diagnose crash reports, and ensure compatibility across various Android device specifications.",
    ],
    dataRetentionPolicy:
      "Because all user preferences and learning data remain on your local device, no personal data is stored on remote servers. All user-generated progress (bookmarked formulas, streaks, and quiz statistics) resides strictly in your device's local storage. This data is retained only as long as the application remains installed on your device. Clearing app storage or uninstalling the app permanently erases all local data immediately.",
    securityPractices: [
      "Zero Cloud Database Storage: No user personal information or account profiles are ever transmitted to or stored on external cloud servers.",
      "On-Device Protection: Learning bookmarks, streaks, and settings are secured by your Android operating system's sandbox and storage controls.",
      "Encrypted Ad Communications: All ad requests communicated by the Google AdMob SDK are encrypted in transit via standard HTTPS/TLS protocols.",
      "Minimal System Permissions: The application requests only minimal system permissions strictly required for ad loading (INTERNET, ACCESS_NETWORK_STATE, AD_ID).",
    ],
    childrensPrivacy:
      "Our App provides educational mathematical formulas for secondary and higher secondary school students (Classes 9–12). We do not knowingly collect any personally identifiable information from children under the age of 13 (or applicable age in your jurisdiction). Advertisements displayed within the app are configured to adhere to Google Play Families Policy and COPPA guidelines for family-safe, educational viewing. If a parent or guardian becomes aware that their child has provided us with personal information without consent, please contact us at officialworldwithtechnology@gmail.com so we can take immediate appropriate action.",
    userRights: [
      "Local Data Erasure: You can erase all local bookmarks, streak history, quiz performance data, and app preferences at any time by clearing the App's data/cache in your Android device settings or by uninstalling the application.",
      "Opt-Out of Personalized Advertising: You can opt out of personalized ads at any time via your Android device settings: Go to Settings > Google > Ads > Delete advertising ID or enable Opt out of Ads Personalization (or visit https://adssettings.google.com).",
      "Offline Access: Full access to all NCERT math formulas, theorems, and flashcards without requiring any internet connection or user login.",
      "Display & Theme Customization: Customize font scaling and toggle Dark / Light themes freely in the app settings.",
    ],
    internationalTransfers:
      "Because NCERT Math Formulas Hub does not operate cloud servers, no user personal data is transferred across borders. Third-party ad requests processed by Google AdMob are handled across Google's secure global infrastructure in accordance with Google's Privacy Policy.",
    changesToPolicy:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for regulatory compliance. Any updates will be posted on this page with an updated 'Last Updated' date.",
  },
  terms: {
    introduction:
      "Welcome to NCERT Math Formulas Hub. These Terms and Conditions ('Terms') govern your use of the NCERT Math Formulas Hub mobile application ('App') developed by Karan Saini. By downloading, installing, or using NCERT Math Formulas Hub, you agree to be bound by these Terms.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content:
          "By downloading, accessing, or using NCERT Math Formulas Hub, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue using and uninstall the application.",
      },
      {
        id: "educational-use",
        title: "2. Educational Purpose & Scientific Reference",
        content:
          "NCERT Math Formulas Hub is an educational reference and study companion created to assist students in learning and revising mathematical formulas, theorems, and definitions for Classes 9, 10, 11, and 12. While content has been carefully compiled from standard NCERT curriculum textbooks and educational guidelines, the software and materials are provided on an 'as-is' and 'as-available' basis without warranties of any kind.",
      },
      {
        id: "no-account-architecture",
        title: "3. Account-Free Architecture & Local Storage",
        content:
          "NCERT Math Formulas Hub does not require or support user account registration. All bookmarked formulas, study streaks, flashcard progress, and theme settings are stored locally on your device. Clearing your device application storage or uninstalling the app will permanently reset all locally saved bookmarks and progress.",
      },
      {
        id: "advertising",
        title: "4. Third-Party Advertising (Google AdMob)",
        content:
          "To provide free educational access to all students, NCERT Math Formulas Hub displays non-intrusive third-party advertisements served via Google AdMob (Google Mobile Ads SDK). Advertisements comply with Google Play Developer Policies and applicable family content guidelines.",
      },
      {
        id: "device-permissions",
        title: "5. App Permissions & Network Usage",
        content: [
          "android.permission.INTERNET: Used exclusively to load advertisements via Google AdMob and verify ad network availability. All mathematical formula tables, chapters, and quizzes remain fully functional offline without internet access.",
          "android.permission.ACCESS_NETWORK_STATE: Used to detect network connectivity status before attempting to load ad assets.",
          "com.google.android.gms.permission.AD_ID: Standard Google Play advertising identifier used by Google Mobile Ads SDK for policy-compliant ad serving.",
        ],
      },
      {
        id: "intellectual-property",
        title: "6. Intellectual Property Rights",
        content:
          "All custom user interface designs, flashcard layouts, quiz algorithms, software code, icons, and graphic presentations in NCERT Math Formulas Hub are the intellectual property of Karan Saini. You are granted a limited, personal, non-exclusive, non-transferable, revocable license to use the app for personal and educational study.",
      },
      {
        id: "prohibited-activities",
        title: "7. Prohibited Uses",
        content: [
          "Decompiling, reverse engineering, disassembling, or attempting to derive the source code of the application binary.",
          "Using automated bots, emulators, or ad-clicking scripts to artificially manipulate AdMob advertising impressions or clicks.",
          "Extracting, bundling, or redistributing the proprietary database assets or graphics for commercial sale without express written authorization.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content:
          "To the maximum extent permitted by applicable law, the developer shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use the application or any reliance placed upon the educational material provided within the app.",
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
      "No account required (Zero sign-up/login architecture). All study data, bookmarks, streaks, and quiz records are stored locally on your device. To erase all data immediately, go to Android Settings -> Apps -> NCERT Math Formulas Hub -> Storage -> Clear Data / Clear Storage, or uninstall the app from your device.",
    deletedDataTypes: [
      "Bookmarked & saved favorite mathematical formulas",
      "Daily study streak counts and milestone achievement badges",
      "Math quiz performance statistics, accuracy rates, and flashcard session history",
      "User preferences (Dark Mode / Light Mode, font scale adjustments)",
    ],
    retainedDataTypes: [],
    retentionReason:
      "NCERT Math Formulas Hub does not collect, transmit, or retain any personal data on cloud servers. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
