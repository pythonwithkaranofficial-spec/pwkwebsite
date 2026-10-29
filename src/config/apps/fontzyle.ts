import { AppConfig } from "@/types/app-config";

export const fontzyleConfig: AppConfig = {
  metadata: {
    id: "fontzyle",
    name: "FontZyle: Fancy Text & Fonts",
    packageName: "com.fontzyle.app",
    category: "Tools",
    description:
      "FontZyle is a creative mobile utility application providing Unicode-based fancy fonts, decorative text symbols, gaming nicknames, social media bio templates, and custom text-to-image graphic cards — built as an offline-first, client-side utility with zero user accounts or server text logging.",
    logoUrl: "/apps/fontzyle/logo.png",
    version: "1.0.0",
    effectiveDate: "October 29, 2026",
    lastUpdated: "October 29, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "FontZyle Studio",
    companyName: "FontZyle Studio",
    email: "support@fontzyle.com",
    supportEmail: "support@fontzyle.com",
    website: "https://fontzyle.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to FontZyle ('we', 'our', or 'the App'), operated by FontZyle Studio. FontZyle is a creative mobile typography utility application designed to provide users with Unicode-based fancy fonts, decorative text symbols, gaming nicknames, social media bio templates, and custom text-to-image graphic cards. We believe that user privacy is a fundamental right. FontZyle has been architected from the ground up as an offline-first, client-side utility: we do NOT require any user registration or account creation, do NOT operate remote user databases or cloud servers that store your text or activity, and do NOT collect, log, sell, or monitor any personal text, names, bios, or quotes you enter into the App. This Privacy Policy explains what information may be processed when you use FontZyle, how third-party ad networks operate within the App, and your rights under global privacy regulations, including GDPR, CCPA/CPRA, and Google Play Developer Program Policies.",
    dataCollection: [
      {
        category: "Information We DO NOT Collect (Zero Personal Data & Zero Keystroke Logging)",
        items: [
          "No Personal Identifiable Information (PII) — We do not collect names, email addresses, physical addresses, phone numbers, or government identifiers.",
          "No User Text or Keystroke Logging — Any text, nickname, symbol composition, or phrase typed or pasted into FontZyle is processed purely in volatile Random Access Memory (RAM) on your physical Android device. It is never transmitted across the network or saved to remote databases.",
          "No Financial Information — FontZyle is a 100% free application with zero in-app purchases. We never request or handle credit card, bank, or billing information.",
          "No Sensitive Hardware Access — We do not access your microphone, camera, contacts, phone calls, SMS messages, or biometric sensors.",
          "No Precise GPS Location — We never request or access precise GPS location coordinates.",
        ],
        purpose:
          "FontZyle operates on a zero-knowledge, privacy-first architecture. All text transformation and styling algorithms execute locally in volatile memory (RAM). When you close the app, all temporary text in memory is discarded.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Data Processed Locally on Your Device (On-Device Storage Only — Never Transmitted)",
        items: [
          "User Preferences — Remembers your chosen UI Theme (Light Mode, Dark Mode, or System Default), Haptic Feedback preferences, and Auto-Copy toggles.",
          "Favorites — Saves font styles, symbol compositions, and bio templates that you explicitly bookmark using the star icon.",
          "Temporary Image Rendering Cache — When you create a graphic card in the Text-to-Image Creator and tap 'Export' or 'Share', the app uses your device's local storage cache to temporarily render the high-resolution PNG image before handing it off to the native Android system share sheet.",
        ],
        purpose:
          "All locally saved preferences and favorites remain exclusively inside the private application sandbox on your Android device (SharedPreferences and app-scoped cache). This data never leaves your device and can be erased instantly at any time via FontZyle Settings -> Clear Saved Data or Android Settings.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Advertising & Telemetry Data (Google AdMob)",
        items: [
          "Google Play Advertising ID (AD_ID) — Used for advertising frequency capping and interest-based ad personalization (unless opted out).",
          "IP Address — Used by Google to determine coarse geographical location (country/city level) for appropriate regional ad serving and fraud prevention.",
          "Device Telemetry — Device make, model, Android operating system version, screen dimensions, and diagnostic crash information.",
          "Ad Interaction Events — Impressions, click data, and ad render performance metrics.",
        ],
        purpose:
          "FontZyle is supported by non-intrusive advertising provided by Google AdMob (Google Mobile Ads SDK v9.1.0). The App does NOT share any user-typed text or personal data with AdMob. Ad telemetry is processed directly by Google according to Google's Privacy Policy.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android System Permissions Declared",
        items: [
          "android.permission.INTERNET — Required by Google AdMob to load advertisements and stream initial Google Font files.",
          "android.permission.ACCESS_NETWORK_STATE — Allows AdMob and the app to check whether an active Wi-Fi or cellular network exists before issuing network requests.",
          "android.permission.POST_NOTIFICATIONS — Android 13+ (API 33+) permission for optional local notifications (e.g., daily styling inspiration). Users can grant or deny this without affecting font features.",
          "android.permission.RECEIVE_BOOT_COMPLETED — Allows local notification alarms to be rescheduled automatically after device reboot.",
          "android.permission.VIBRATE — Provides subtle haptic tactile feedback when tapping copy or favorite buttons (can be toggled off in Settings).",
        ],
        purpose:
          "Only minimal system permissions are requested. FontZyle does NOT request legacy broad storage permissions (READ_EXTERNAL_STORAGE or WRITE_EXTERNAL_STORAGE). Any exported image is saved through modern Android Scoped Storage / MediaStore APIs only upon your explicit command.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK v9.1.0)",
        provider: "Google LLC",
        purpose:
          "Displays adaptive banner ads (at the bottom of screens) and full-screen interstitial ads to support free development. Processes non-personally identifiable technical identifiers including Advertising ID (AD_ID) and coarse IP location.",
        privacyPolicyUrl: "https://support.google.com/admob/answer/6128543",
      },
      {
        name: "Google User Messaging Platform (UMP SDK)",
        provider: "Google LLC",
        purpose:
          "Manages user consent in compliance with the GDPR, UK Data Protection Act, Swiss FADP, and US State privacy laws. Users in regulated regions are presented with a consent banner and can review or revoke preferences anytime via the 'Advertising Privacy Options' button in FontZyle Settings.",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Google Fonts API (google_fonts v8.2.1)",
        provider: "Google LLC",
        purpose:
          "Streams open-source typography files (e.g., Cinzel, Outfit, Poppins) for rendering inside the Text-to-Image Creator. Font files are downloaded directly from Google's secure CDN and cached locally on your device for future offline usage.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Privacy Policy",
        provider: "Google LLC",
        purpose:
          "Governs how Google collects, stores, and processes information across mobile applications, SDKs, and partner technologies.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Partner Technologies Policy",
        provider: "Google LLC",
        purpose:
          "Details how Google uses data when you interact with partner applications and advertising technologies.",
        privacyPolicyUrl:
          "https://policies.google.com/technologies/partner-sites",
      },
    ],
    dataUsePurposes: [
      "Provide instant, client-side Unicode fancy font styling, text transformations, symbol decorations, and gaming nickname generation without network dependencies.",
      "Save user interface preferences (theme mode, haptic feedback, auto-copy) and bookmarked favorites strictly on-device in private storage.",
      "Temporarily render high-resolution PNG graphic cards in the Text-to-Image Creator for immediate sharing via the native Android share sheet.",
      "Display policy-compliant banner and interstitial advertisements via Google AdMob to keep the creative utility 100% free.",
      "Facilitate GDPR / ePrivacy consent management via Google UMP with full user revocation capabilities inside app settings.",
      "Fetch and locally cache open-source Google Font families for stylized typography in exported image cards.",
    ],
    dataRetentionPolicy:
      "Because all text transformations occur in volatile RAM and all preferences reside in local application storage, FontZyle stores zero personal or user data on remote cloud servers. Locally saved preferences and bookmarked favorites persist only until you manually clear application data via FontZyle Settings -> Clear Saved Data, through Android Settings -> Apps -> FontZyle -> Storage -> Clear Data, or by uninstalling the app. Third-party advertising telemetry collected by Google AdMob is retained according to Google's Privacy Policy (https://policies.google.com/privacy).",
    securityPractices: [
      "Volatile RAM Text Transformation: Any text, nickname, symbol, or quote entered is processed strictly in volatile device memory (RAM) and is never written to disk or transmitted across the network.",
      "Zero Cloud Database Architecture: We do not operate remote databases, user accounts, authentication backends, or cloud logging servers.",
      "On-Device Sandbox Isolation: All local preferences, favorites, and settings are secured within Android's private internal storage sandbox (SharedPreferences).",
      "Scoped Storage & MediaStore Standards: FontZyle omits legacy broad storage permissions; saved graphic cards are exported through modern Android Scoped Storage APIs only upon explicit user command.",
      "Encrypted Network Communications: All communications initiated by Google AdMob and the Google Fonts API are encrypted in transit using standard HTTPS/TLS protocols.",
      "Minimal Permission Surface: The application requests only the minimal set of permissions strictly necessary to display ads, cache fonts, provide optional notifications, and deliver haptic feedback.",
    ],
    childrensPrivacy:
      "FontZyle is intended for a general audience (ages 13 and older), including creators, gamers, and social media enthusiasts. We do not knowingly collect, solicit, or maintain personal identifiable information from children under the age of 13 (or under 16 in certain European jurisdictions). Advertisements delivered by Google AdMob may use device advertising identifiers for frequency capping and ad personalization. Parents can disable ad personalization or delete the Advertising ID at any time via Android Settings -> Google -> Ads. If a parent or legal guardian believes that their child has provided personal information through third-party ad networks in our app, please contact us immediately at support@fontzyle.com so we can take prompt appropriate action.",
    userRights: [
      "Right to Access & Data Deletion: Because FontZyle maintains no user accounts or cloud databases, we hold no personal data linked to your identity. You can delete all locally held app preferences and favorites directly via FontZyle Settings -> Clear Saved Data or Android Settings.",
      "Right to Opt-Out of Personalized Advertising: EEA/UK/Swiss users can modify or withdraw consent at any time via the 'Advertising Privacy Options' button in FontZyle Settings. All Android users can reset or delete their Advertising ID via Android Settings -> Google -> Ads -> 'Delete advertising ID', or customize preferences at https://adssettings.google.com.",
      "Right to Non-Discrimination: Exercising your privacy rights will never impact your access to FontZyle's core font styling, symbol generator, nickname maker, or image card creator.",
      "Offline Access: Full access to all Unicode text styling, symbol libraries, bio templates, and cached Google Fonts without requiring an active internet connection.",
    ],
    internationalTransfers:
      "FontZyle does not operate remote servers and transfers zero personal data across international borders. Any network requests for third-party advertisements (Google AdMob) or typography files (Google Fonts) are processed across Google's secure global infrastructure in accordance with Google's Privacy Policy. For users in the European Economic Area (EEA), United Kingdom, and Switzerland, Google's User Messaging Platform (UMP) provides explicit consent mechanisms before personalized ad serving.",
    changesToPolicy:
      "We may update our Privacy Policy periodically to reflect changes in app functionality, third-party SDK updates, or applicable legal requirements. The updated policy will be posted on this page with an updated 'Last Updated' date and will be directly accessible inside the application under Settings -> Privacy Policy. Continued use of the application following any modifications signifies acceptance of the updated terms.",
  },
  terms: {
    introduction:
      "Welcome to FontZyle. These Terms and Conditions ('Terms') govern your access to and use of the FontZyle: Fancy Text & Fonts mobile application ('App') developed and operated by FontZyle Studio. By downloading, installing, accessing, or using FontZyle, you agree to be bound by these Terms and our Privacy Policy.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content:
          "By downloading, accessing, or using FontZyle, you confirm that you have read, understood, and agreed to be legally bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these Terms, you must discontinue using and uninstall the application immediately.",
      },
      {
        id: "creative-utility-description",
        title: "2. Creative Utility & In-Memory Text Transformation",
        content:
          "FontZyle is an offline-first mobile utility designed to assist users with Unicode-based fancy text formatting, decorative symbols, gaming nickname ideas, social media bio templates, and graphic card generation. All text conversions and decorative transformations occur exclusively in your physical device's volatile Random Access Memory (RAM). The App does not monitor, record, store, or transmit any text, names, bios, or creative compositions you enter.",
      },
      {
        id: "free-model-no-purchases",
        title: "3. Free-to-Use Model & Zero In-App Purchases",
        content:
          "FontZyle is a 100% free creative application. There are no paid subscriptions, premium paywalls, or in-app purchases. All font styles, decorative symbols, bio templates, and image export tools are available without financial obligation.",
      },
      {
        id: "account-free-architecture",
        title: "4. Account-Free Architecture & Local Data Storage",
        content:
          "FontZyle operates entirely without user registration, login credentials, or cloud accounts. Any user preferences (theme settings, haptic feedback toggle, auto-copy preference) and bookmarked favorites are stored strictly in private, on-device application storage (Android SharedPreferences). Clearing application data in Android Settings or uninstalling the App will permanently delete all locally saved preferences and favorites.",
      },
      {
        id: "in-app-advertising-ump",
        title: "5. In-App Advertising & Consent Management (Google AdMob & UMP)",
        content:
          "To keep FontZyle completely free, the App displays third-party banner and interstitial advertisements served via Google AdMob. The App integrates Google's User Messaging Platform (UMP) to obtain and manage consent from users in the EEA, UK, Switzerland, and relevant US states. Users may change or revoke advertising consent at any time via the 'Advertising Privacy Options' button in FontZyle Settings.",
      },
      {
        id: "permissions-and-media",
        title: "6. Device Permissions & Scoped Storage Compliance",
        content: [
          "android.permission.INTERNET — Used exclusively to load AdMob advertisements and download initial Google Font assets.",
          "android.permission.ACCESS_NETWORK_STATE — Used to determine network connectivity before attempting ad or font downloads.",
          "android.permission.POST_NOTIFICATIONS — Optional notification permission (Android 13+) for styling inspiration alerts. Can be granted or revoked at any time in device settings.",
          "android.permission.RECEIVE_BOOT_COMPLETED — Used strictly to restore scheduled local notification alarms following a device restart.",
          "android.permission.VIBRATE — Used to provide tactile haptic feedback during copy and bookmark interactions (can be disabled in Settings).",
          "Scoped Storage & MediaStore: FontZyle does not request broad external storage permissions. Images created in the Text-to-Image Creator are exported through Android's modern Scoped Storage and MediaStore APIs only upon explicit user command.",
        ],
      },
      {
        id: "intellectual-property",
        title: "7. Intellectual Property Rights & Ownership",
        content:
          "All software code, application layout, graphic designs, icons, UI elements, and styling algorithms in FontZyle are the intellectual property of FontZyle Studio. You are granted a limited, personal, non-exclusive, non-transferable, revocable license to use the App for personal, creative, and non-commercial purposes. All content, text, and graphics generated or exported by you using the App remain your personal property.",
      },
      {
        id: "third-party-trademarks-disclaimer",
        title: "8. Third-Party Trademarks & Gaming Disclaimer",
        content:
          "Any references to third-party video games (such as BGMI, Free Fire, PUBG Mobile, Call of Duty, Roblox, Valorant) or social media platforms (such as Instagram, WhatsApp, TikTok, Discord, X/Twitter) within FontZyle are used purely for nominative, descriptive, and stylistic compatibility purposes. FontZyle is an independent creative toolkit and is NOT affiliated with, sponsored by, authorized by, or endorsed by Krafton, Garena, Activision, Roblox Corp, Meta Platforms, Discord Inc., X Corp, or any of their affiliates.",
      },
      {
        id: "prohibited-conduct",
        title: "9. Prohibited Conduct",
        content: [
          "Decompiling, reverse engineering, disassembling, or attempting to derive the source code of the application.",
          "Using automated bots, scripts, emulators, or click farms to generate artificial ad impressions or clicks.",
          "Redistributing, sublicensing, selling, or commercially exploiting the application binary or its proprietary assets.",
          "Using the App to generate abusive, defamatory, harassing, or unlawful text content.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "10. Limitation of Liability & Warranty Disclaimer",
        content:
          "FontZyle is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind, whether express or implied. To the maximum extent permitted by applicable law, FontZyle Studio shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use the application.",
      },
      {
        id: "governing-law",
        title: "11. Governing Law & Jurisdiction",
        content:
          "These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.",
      },
      {
        id: "contact-information",
        title: "12. Contact Information",
        content:
          "For any questions, feedback, or support regarding FontZyle or these Terms, please contact support@fontzyle.com.",
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Zero sign-up/login architecture). All user preferences and bookmarked favorites are stored locally on your device. To erase all local data immediately: open FontZyle Settings -> tap 'Clear Saved Data', or navigate to Android Settings -> Apps -> FontZyle -> Storage -> tap 'Clear Data' / 'Clear Storage', or uninstall the application from your device.",
    deletedDataTypes: [
      "UI Theme preference (Light, Dark, or System Default)",
      "Haptic feedback vibration setting",
      "Auto-copy to clipboard preference",
      "Bookmarked favorite fonts, symbol decorations, and bio templates",
      "Temporary PNG rendering cache from the Text-to-Image Creator",
    ],
    retainedDataTypes: [],
    retentionReason:
      "FontZyle does not collect, transmit, or retain any personal or user data on cloud servers. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "support@fontzyle.com",
  },
};
