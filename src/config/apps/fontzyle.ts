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
      "Welcome to FontZyle. These Terms of Service ('Terms') constitute a legally binding agreement between you ('User', 'you', or 'your') and FontZyle Studio / Karan Saini ('Developer', 'Trader', 'we', 'us', or 'our') governing your use of the FontZyle: Fancy Text & Fonts mobile application (Package Name: com.fontzyle.app). This application is provided as a free creative typography utility and complies with applicable consumer protection laws and Google Play Console Trader requirements under the EU Digital Services Act (DSA).",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "Legally Binding Contract: By downloading, installing, accessing, or using FontZyle, you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree, you must immediately discontinue use and uninstall the application.",
          "Eligibility & General Audience: FontZyle is intended for creators, gamers, social media enthusiasts, and general users aged 13 and older. Users under 18 years of age confirm that they have reviewed these Terms with a parent or legal guardian.",
          "Google Play Trader Status Declaration: In compliance with Article 30 of the EU Digital Services Act (DSA) (Regulation EU 2022/2065), the developer is registered as a 'Trader' on Google Play, providing ad-supported digital utility software to consumers globally, including the European Economic Area (EEA) and the United Kingdom.",
          "Right of Withdrawal (EU/EEA & UK Consumers): FontZyle is provided 100% free of charge with zero in-app purchases or subscription fees. Under applicable consumer law, performance begins immediately upon installation. You may terminate this contract at any time simply by uninstalling the application.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App and Services",
        content: [
          "Client-Side Creative Utility: FontZyle provides Unicode-based fancy fonts, decorative text symbols, gaming nickname ideas, social media bio templates, and a Text-to-Image graphic card generator.",
          "Volatile RAM In-Memory Processing: All text styling conversions and transformations occur strictly in volatile Random Access Memory (RAM) on your physical Android device. FontZyle does NOT log, monitor, record, store, or transmit any text, names, bios, or creative compositions you enter.",
          "Zero User Accounts: The App operates with zero user registration, passwords, or cloud accounts. You have instant access to all styling tools upon launch.",
          "Local-Only Settings & Scoped Storage: Theme preferences (Dark Mode, Light Mode), haptic feedback toggles, and bookmarked favorites reside strictly in on-device private storage (SharedPreferences). Exported image cards are processed through modern Android Scoped Storage / MediaStore APIs only upon your explicit command.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. User Responsibilities & Acceptable Use",
        content: [
          "Lawful Creative Expression: You agree to use FontZyle exclusively for lawful creative, personal, and social media styling purposes.",
          "Prohibited Content: You agree not to use FontZyle to compose, generate, or export text or image content that is defamatory, harassing, threatening, discriminatory, hateful, pornographic, or in violation of any third-party rights or applicable laws.",
          "Prohibition on Reverse Engineering: You agree not to decompile, reverse engineer, disassemble, or extract proprietary code or typography asset bundles from the application binary.",
          "Prohibition on Advertising Fraud: You strictly agree not to use bots, automated scripts, emulators, or click farms to generate fraudulent AdMob ad impressions or clicks.",
          "Device Security: You are responsible for ensuring that your Android device hardware and operating system remain secure and compatible.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: [
          "Developer Ownership: All application software code, UI design elements, algorithms, proprietary symbols, templates, icons, and branding in FontZyle are the intellectual property of FontZyle Studio / Karan Saini.",
          "User Content Ownership: You retain 100% full ownership and intellectual property rights over any original text, nicknames, quotes, or graphic compositions that you create and export using FontZyle.",
          "Limited License Grant: You are granted a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to use the App for personal and creative purposes.",
          "Third-Party Nominative Disclaimer: Any references to third-party games (such as BGMI, Free Fire, PUBG Mobile, Call of Duty, Roblox, Valorant) or social platforms (Instagram, WhatsApp, TikTok, Discord, X/Twitter) are used purely for nominative compatibility and stylistic identification. FontZyle is independent and not affiliated with, sponsored by, or endorsed by Krafton, Garena, Activision, Roblox Corp, Meta Platforms, Discord Inc., X Corp, or their affiliates.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements (AdMob and Third-Party Ads)",
        content: [
          "Ad-Supported Free Model: To keep all font styles, symbol libraries, bio templates, and graphic card creators 100% free with zero in-app purchases, FontZyle displays advertisements via Google AdMob (google_mobile_ads SDK v9.1.0).",
          "Ad Formats Deployed: Includes adaptive banner ads (anchored at the bottom of screens) and occasional interstitial ads between menu transitions.",
          "Consent Management (Google UMP): The App implements Google's User Messaging Platform (UMP) SDK to capture and manage explicit advertising consent for EEA, UK, and Swiss users under GDPR and ePrivacy laws. Users can review or revoke consent at any time via Settings -> Advertising Privacy Options.",
          "Opt-Out Choices: You may opt out of interest-based personalized ads via Android Settings (Settings > Google > Ads) or via Google Ads Settings at https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "Integrated Service Providers: Integrates Google Mobile Ads (AdMob) for ad serving, Google User Messaging Platform (UMP) for consent compliance, and Google Fonts API (google_fonts v8.2.1) for downloading open-source font files.",
          "Zero Behavioral Tracking: The App does not integrate Facebook SDK or behavioral analytics trackers.",
          "Third-Party Terms & Disclaimers: Third-party services operate under their own independent terms and privacy policies (https://policies.google.com/privacy). We do not control and are not liable for third-party network availability.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "Provided 'AS IS' & 'AS AVAILABLE': FontZyle is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind, whether express, statutory, or implied.",
          "Unicode Platform Compatibility Disclaimer: While FontZyle utilizes standard universal Unicode characters, actual rendering appearance (such as glyph shapes or blank boxes) is determined by the destination application, operating system, or device used by the recipient. We make no warranty that all fancy text styles will render identically across every third-party game or platform.",
          "No Guarantee of Flawless Operation: We do not warrant that the application will operate completely uninterrupted, bug-free, or compatible with all past or future device hardware.",
          "Statutory Consumer Rights: Nothing in these Terms shall limit or exclude any statutory legal warranties of conformity for digital content under applicable consumer protection legislation, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "Exclusion of Consequential Damages: To the maximum extent permitted by applicable law, FontZyle Studio and Karan Saini shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the application.",
          "Local Data Reset Disclaimer: Because user favorites and theme preferences reside strictly in on-device storage, the Developer bears no liability for data loss resulting from device resets, storage clearing, or uninstallation.",
          "Liability Cap: In no event shall our total aggregate liability for all claims arising out of or related to FontZyle exceed the amount paid by you ($0.00 / INR 0) or USD $10.00, whichever is greater.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        content: [
          "Modifications & Revisions: We reserve the right to amend, update, or revise these Terms of Service at any time to comply with changes in legal requirements or Google Play Developer Policies.",
          "Publication of Updates: Changes become effective immediately upon publication on this legal portal, indicated by an updated 'Last Updated' date.",
          "Continued Acceptance: Your continued installation or use of FontZyle following any updates signifies your binding acceptance of the revised Terms.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact Information & Google Play Trader Disclosures",
        content: [
          "Trader Identification (EU Digital Services Act): In compliance with Article 30 of the EU Digital Services Act (DSA) and Google Play Trader disclosure requirements, the legal provider of this application is:",
          "Developer / Trader Name: Karan Saini",
          "Trading / App Name: FontZyle Studio (FontZyle: Fancy Text & Fonts)",
          "Official Contact Email: support@fontzyle.com",
          "Official Website: https://fontzyle.com",
          "Country & Jurisdiction of Establishment: India",
          "Self-Certification Commitment: The Trader hereby self-certifies that it only offers products and services that comply with applicable rules of European Union law, Indian law, and Google Play Developer Program Policies.",
          "Consumer Dispute Inquiries: For questions, feedback, or legal inquiries, please contact support@fontzyle.com. We respond to inquiries within 48 to 72 business hours.",
        ],
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
