import { AppConfig } from "@/types/app-config";

export const mithaiMergeConfig: AppConfig = {
  metadata: {
    id: "mithaimerge",
    name: "Mithai Merge: 2048 Puzzle",
    packageName: "com.mithaimerge.mithai_merge",
    category: "Games",
    description:
      "Mithai Merge: 2048 Puzzle is an Indian sweet-themed sliding block puzzle game featuring campaign levels (Mithai Yatra), endless mode, classic 2048 merges, vibrant cosmetic themes, streaks, and tactile haptic feedback — built on a zero-login, offline-first local sandbox architecture with zero server-side data collection.",
    logoUrl: "/apps/mithaimerge/logo.png",
    version: "1.0.0",
    effectiveDate: "October 29, 2026",
    lastUpdated: "October 29, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Mithai Merge Studio",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pwkwebsite.vercel.app/mithaimerge",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to Mithai Merge: 2048 Puzzle ('we', 'our', or 'the App'), operated by Mithai Merge Studio. We respect your privacy and are committed to protecting any information associated with your use of our mobile application. This Privacy Policy explains how our application operates, what information is processed, how third-party advertising partners may interact with your device, and the rights and choices available to you under global privacy laws including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA / CPRA), the Children's Online Privacy Protection Act (COPPA), and the Indian Digital Personal Data Protection Act (DPDP Act 2023). By installing and playing Mithai Merge, you understand and agree to the practices described in this policy.",
    dataCollection: [
      {
        category: "Information We DO NOT Collect (Zero-Login & Zero PII Architecture)",
        items: [
          "No Personal Identifiers — We do not collect real names, email addresses, postal addresses, phone numbers, or government IDs.",
          "No User Registration or Accounts — The app requires zero sign-up, no username/password, and communicates with no proprietary backends or databases.",
          "No Precise or Coarse GPS Location — We do not declare or request ACCESS_FINE_LOCATION or ACCESS_COARSE_LOCATION permissions.",
          "No Camera, Audio, or Microphone Access — We do not declare CAMERA or RECORD_AUDIO permissions.",
          "No Storage or Media Access — We do not declare READ_EXTERNAL_STORAGE or READ_MEDIA_IMAGES permissions.",
          "No Contacts or Phone State — We do not declare READ_CONTACTS or READ_PHONE_STATE permissions.",
          "No Financial or Banking Information — The App contains zero in-app purchases (IAP); we do not collect credit cards, bank accounts, or payment data.",
        ],
        purpose:
          "Mithai Merge operates on a privacy-first, local-only architecture. The application requires zero registration and communicates with no proprietary cloud servers.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Data Stored Strictly Locally on Your Device (On-Device Sandbox Storage Only)",
        items: [
          "Saved Game Boards & Tile States — Managed by SaveManager via atomic write operations (save_*.json) inside the app's internal sandbox directory (getApplicationDocumentsDirectory()).",
          "Mithai Yatra Campaign Level Progression — Unlocked levels, campaign stars, and milestone achievements stored locally.",
          "Player Streaks, High Scores & Coin Balances — Persisted in profile.json within local sandboxed storage.",
          "Player Preferences — Music, sound effects (SFX), haptic feedback vibration, colorblind contrast, language, and D-Pad toggle stored strictly locally via SharedPreferences.",
        ],
        purpose:
          "All gameplay progress and configuration are kept strictly inside the isolated Android application sandbox. This data never leaves your device and can be erased completely at any time by tapping 'Clear All Data' in the in-game Settings menu or via Android system storage settings.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Advertising & Telemetry Data (Google AdMob & UMP)",
        items: [
          "Google Advertising ID (AD_ID / AAID) — Declared for Android 13+ (API 33+) to enable Google Play Services to provide the Advertising ID for ad frequency capping, fraud prevention, and consent-based delivery.",
          "Approximate / Coarse Geolocation — Derived strictly from your IP address at the country/city level for regional ad inventory and appropriate language (no GPS coordinates accessed).",
          "App Performance & Diagnostic Telemetry — Crash logs, ad render latency, ad impression events, click activity, and network state for billing verification, fraud detection, and performance analytics.",
        ],
        purpose:
          "Mithai Merge is supported by non-intrusive advertisements provided by Google AdMob (google_mobile_ads SDK ^9.1.0). Consent is collected via the Google User Messaging Platform (UMP). The app never shares personal data or game state with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android System Permissions Declared",
        items: [
          "android.permission.INTERNET — Required by Google Mobile Ads SDK (AdMob) to load advertisement inventory, render banner/interstitial/rewarded ads, and communicate with Google User Messaging Platform (UMP) for consent choices.",
          "android.permission.ACCESS_NETWORK_STATE — Allows the App to verify whether an active internet connection is available before attempting ad requests, preventing unnecessary battery and data drain.",
          "android.permission.VIBRATE — Powers tactile haptic feedback when tiles are merged, buttons are pressed, or power-ups are triggered. No user data accessed.",
          "com.google.android.gms.permission.AD_ID — Declared for Android 13+ (API 33+) to permit Google Play Services and Google AdMob to access the device's Google Advertising ID for ad frequency capping and consent-based ad delivery.",
        ],
        purpose:
          "Only 4 standard system permissions are declared in AndroidManifest.xml. All 4 serve transparent, player-facing or ad-network functionality. No sensitive permissions are requested.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (google_mobile_ads: ^9.1.0)",
        provider: "Google LLC",
        purpose:
          "Serves non-intrusive banner ads, occasional interstitial ads after game rounds, and optional rewarded ads that provide bonus in-game items (undos, shuffles, coins). Processes device Advertising ID (AD_ID), coarse IP location, and ad performance telemetry.",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Google User Messaging Platform (UMP SDK)",
        provider: "Google LLC",
        purpose:
          "Collects and manages user consent in compliance with the GDPR, UK Data Protection Act, and CCPA/CPRA. Players can reopen and modify consent preferences anytime via in-game Settings > Privacy & Data > Ad Privacy & Consent.",
        privacyPolicyUrl: "https://policies.google.com/technologies/partner-sites",
      },
      {
        name: "Google Play In-App Review API (in_app_review: ^2.0.12)",
        provider: "Google LLC",
        purpose:
          "Prompts for store reviews solely after positive milestones (≥5 games, win/high-score, capped once every 60 days via ReviewService). Handled securely by the Android OS; no user input is transmitted to the app.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Privacy Policy",
        provider: "Google LLC",
        purpose:
          "Governs how Google collects, protects, and processes device telemetry and advertising data across mobile devices.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataUsePurposes: [
      "Provide offline-first 2048 sliding block puzzle gameplay with smooth tile animations and Indian sweet themes without account registration.",
      "Save game boards, Mithai Yatra campaign level stars, streaks, coins, and high scores securely in the local application sandbox.",
      "Maintain player preferences (music, SFX, haptic feedback, colorblind contrast, language, D-Pad controls) on-device.",
      "Display policy-compliant banner, interstitial, and rewarded ads via Google AdMob to support 100% free access to the game.",
      "Collect and enforce regulatory advertising consent choices (GDPR / CCPA) via Google User Messaging Platform (UMP) SDK.",
      "Allow players to review the app on the Google Play Store via the official system In-App Review API without capturing user feedback.",
      "Ensure ad frequency capping, combat fraudulent click activity, and review aggregated diagnostic telemetry.",
    ],
    dataRetentionPolicy:
      "All game progression (board states, Mithai Yatra level stars, high scores, coins, streaks, and preferences) is stored exclusively on your device sandbox (getApplicationDocumentsDirectory and SharedPreferences). This data persists until you tap 'Clear All Data' in the in-game Settings, clear app storage in Android Settings, or uninstall the game. Because we operate zero remote servers or cloud accounts, no personal or gameplay data is retained on cloud servers. Third-party advertising telemetry collected by Google AdMob is retained in accordance with Google's standard data retention policies (https://policies.google.com/privacy).",
    securityPractices: [
      "Zero-Login Architecture: No user accounts, passwords, or personal credentials are created, transmitted, or stored.",
      "Local Sandbox Isolation: Saved game boards, Mithai Yatra campaign stars, and profile progress are stored inside Android's private internal storage sandbox, isolated from other applications.",
      "Atomic Local Persistence: SaveManager uses atomic write operations for save_*.json and profile.json to prevent data corruption during unexpected power loss or app termination.",
      "Encrypted Network Communications: All network communications initiated by Google AdMob and Google Play Services are encrypted in transit using industry-standard TLS 1.2 / TLS 1.3 (HTTPS) protocols.",
      "Minimal Permission Footprint: The app requests only 4 standard permissions (INTERNET, ACCESS_NETWORK_STATE, VIBRATE, AD_ID) and requests zero sensitive permissions (no location, camera, audio, or storage permissions).",
      "Player Privacy Controls: Players can re-open the Google UMP consent form anytime via Settings > Privacy & Data > Ad Privacy & Consent, and can wipe all local game data instantly via 'Clear All Data'.",
    ],
    childrensPrivacy:
      "Mithai Merge: 2048 Puzzle is a general audience casual puzzle game intended for players aged 13 and older (and families). We do not knowingly collect personal identifiable information from children under the age of 13 (or under 16 in certain European jurisdictions). Advertisements delivered by Google AdMob may use device advertising identifiers for frequency capping and ad personalization based on user consent. In the Google Play Console, the target age group is declared as 13 and older (General Audience), and the store listing is marked as not primarily directed at children under 13 to avoid restrictive family ad network whitelisting. Parents may delete or reset the Advertising ID at any time in Android Settings -> Google -> Ads. If a parent or legal guardian believes their child has provided personal information to us or our advertising partners without required consent, please contact us immediately at officialworldwithtechnology@gmail.com for prompt deletion.",
    userRights: [
      "Right to Delete All Game Data: Players can delete 100% of their game progress, coins, stars, and high scores at any time via Settings -> Clear All Data or Android Settings -> Apps -> Mithai Merge -> Storage -> Clear Data.",
      "Right to Update / Revoke Advertising Consent (GDPR / UK GDPR): Players in the EEA/UK can modify or withdraw their consent at any time directly in-game via Settings -> Privacy & Data -> Ad Privacy & Consent.",
      "Right to Opt-Out of Targeted Advertising (CCPA / CPRA): California residents and all Android users can reset or delete their Google Advertising ID via Android Settings -> Google -> Ads -> 'Delete advertising ID', or customize ad personalization at https://adssettings.google.com.",
      "Indian DPDP Act (2023) Compliance: Players have the right to grievance redressal, correction, and erasure of data by clearing local storage or contacting our developer support channel.",
      "Right to Non-Discrimination: Exercising your privacy rights, revoking ad consent, or clearing local game data will never restrict your access to Mithai Merge's core 2048 gameplay.",
      "Full Offline Access: Core 2048 puzzle mechanics, local save slots, and campaign levels function seamlessly without requiring an active internet connection.",
    ],
    internationalTransfers:
      "Mithai Merge does not operate proprietary cloud servers and transfers zero personal data across international borders. Any network interactions required for serving advertisements (Google AdMob) or verifying user consent (Google UMP) are processed across Google's secure global infrastructure pursuant to Google's Privacy Policy. For users in the European Economic Area (EEA), United Kingdom, and Switzerland, Google's UMP SDK enforces strict legal consent requirements before personalized ad processing.",
    changesToPolicy:
      "We may update this Privacy Policy periodically to reflect changes in our legal obligations, regulatory requirements, or application features. When updates are published, the 'Last Updated' and 'Effective Date' at the top of this document will be revised. We encourage players to review this Privacy Policy periodically. Continued use of the App following any changes indicates acceptance of the updated policy.",
  },
  terms: {
    introduction:
      "Welcome to Mithai Merge: 2048 Puzzle. These Terms of Service ('Terms') constitute a legally binding agreement between you ('Player', 'User', 'you', or 'your') and Mithai Merge Studio / Karan Saini ('Developer', 'Trader', 'we', 'us', or 'our') governing your use of the Mithai Merge: 2048 Puzzle mobile application (Package Name: com.mithaimerge.mithai_merge). This application is provided as a free-to-play casual puzzle game and complies with applicable consumer protection laws and Google Play Console Trader requirements under the EU Digital Services Act (DSA).",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "Legally Binding Agreement: By downloading, installing, accessing, or playing Mithai Merge: 2048 Puzzle, you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must refrain from playing and uninstall the application immediately.",
          "Eligibility & General Audience: Mithai Merge is intended for casual puzzle players aged 13 and older and families. Users under 18 years of age confirm that they have reviewed these Terms with a parent or legal guardian.",
          "Google Play Trader Status Declaration: In accordance with Article 30 of the EU Digital Services Act (DSA) (Regulation EU 2022/2065), the developer is registered as a 'Trader' on Google Play, providing ad-supported digital entertainment software to users globally, including the European Economic Area (EEA) and the United Kingdom.",
          "Right of Withdrawal (EU/EEA & UK Consumers): Mithai Merge is 100% free-to-play with zero real-money in-app purchases (IAP). Under statutory consumer law, performance begins immediately upon installation. You may terminate this contract at any time simply by uninstalling the application from your device.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App and Services",
        content: [
          "Casual Indian Sweet Puzzle Game: Mithai Merge is a sliding block puzzle game featuring classic 2048 tile merging, Mithai Yatra campaign levels, endless board mode, sweet cosmetic themes, daily streaks, coin rewards, and tactile haptic feedback.",
          "100% Free-to-Play Structure: All game modes, campaign levels, cosmetic boards, and power-up tools (undos, shuffles) are unlockable through standard gameplay or optional rewarded advertisements. There are zero paid subscriptions or real-money transactions.",
          "100% Offline Core Availability: All puzzle move simulations, board evaluations, and streak computations execute locally on your physical Android device without requiring internet access.",
          "Account-Free Sandbox Persistence: The game requires zero user accounts or logins. All game boards, campaign level stars, streak records, coin balances, and audio/haptic preferences are saved strictly inside your device's isolated application sandbox (save_*.json and profile.json).",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. User Responsibilities & Acceptable Use",
        content: [
          "Lawful Entertainment Use: You agree to use Mithai Merge strictly for personal, non-commercial entertainment in compliance with all applicable laws.",
          "Prohibition on Cheating & Save File Tampering: You agree not to modify local save JSON files, inject artificial score values, or use automated puzzle solvers, bots, or emulators to manipulate high scores or leaderboards.",
          "Prohibition on Advertising Fraud: You strictly agree not to use bots, automated scripts, macros, or click farms to generate fraudulent AdMob ad impressions, clicks, or illegitimate rewarded ad completions.",
          "Prohibition on Reverse Engineering: You agree not to decompile, reverse engineer, disassemble, extract, or redistribute the game binary, sweet tile artwork, audio sound effects, or code assets for commercial sale.",
          "Device Maintenance: You are responsible for ensuring that your Android device hardware and operating system remain secure and up to date.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: [
          "Developer Ownership: All Indian sweet tile illustrations, animations, UI layouts, sound effects, background music compositions, software code, and promotional branding in Mithai Merge are the exclusive intellectual property of Mithai Merge Studio / Karan Saini.",
          "Limited License Grant: Subject to these Terms, you are granted a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to play the game solely for non-commercial entertainment.",
          "Protection of Proprietary Assets: No sweet illustrations, audio tracks, or branding elements may be copied, redistributed, or commercially exploited without express prior written permission.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements (AdMob and Third-Party Ads)",
        content: [
          "Ad-Supported Monetization: To keep Mithai Merge 100% free with zero in-app purchases, the game is supported by advertisements delivered via Google AdMob (google_mobile_ads SDK ^9.1.0).",
          "Ad Formats Deployed: Includes adaptive banner ads, occasional interstitial ads displayed after game rounds, and optional rewarded video ads (providing bonus in-game items such as undos, shuffles, or coins).",
          "Voluntary Rewarded Ads: Rewarded video ads are strictly voluntary and player-initiated. Declining rewarded ads has no negative effect on your ability to play standard 2048 puzzles or advance through campaign levels.",
          "Consent Management (Google UMP): The game implements the Google User Messaging Platform (UMP) SDK to capture and manage explicit advertising consent for EEA, UK, and Swiss players under GDPR and ePrivacy regulations. Players can review or revoke consent anytime via Settings -> Privacy & Data -> Ad Privacy & Consent.",
          "Opt-Out Options: You may manage or opt out of personalized advertising via Android Settings (Settings > Google > Ads) or via Google Ads Settings at https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "Integrated Service Providers: Integrates Google Mobile Ads (AdMob) for ad serving, Google User Messaging Platform (UMP) for regulatory consent, and the Google Play In-App Review API (in_app_review ^2.0.12) to prompt for optional store reviews.",
          "Google Play In-App Review API: Store review prompts occur solely after positive milestones (≥5 games, win/high-score, capped once every 60 days). The review flow is securely presented and handled by the Android OS; no user review text or rating data is collected by our App.",
          "Third-Party Policies: Third-party services operate under their own independent terms and privacy policies (https://policies.google.com/privacy). We do not control and are not liable for third-party network availability.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "Provided 'AS IS' & 'AS AVAILABLE': Mithai Merge: 2048 Puzzle is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranty of any kind, whether express, statutory, or implied.",
          "Casual Gaming Purpose: The game is designed purely for casual recreation. We make no warranty that gameplay will be uninterrupted, error-free, or compatible with every device hardware specification.",
          "Preservation of Consumer Guarantees: Nothing in these Terms shall limit or exclude any statutory legal warranties of conformity for digital content under applicable consumer protection legislation, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "Exclusion of Consequential Damages: To the maximum extent permitted by applicable law, Mithai Merge Studio and Karan Saini shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to play the game.",
          "Local Data Reset Disclaimer: Because all saved boards, Mithai Yatra stars, coins, and high scores reside strictly inside your device's local application sandbox, the Developer is not liable for progress loss resulting from clearing app data, device resets, or uninstallation.",
          "Aggregate Liability Cap: In no event shall our total aggregate liability for all claims arising out of or related to Mithai Merge exceed the amount paid by you ($0.00 / INR 0) or USD $10.00, whichever is greater.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        content: [
          "Modifications: We reserve the right to revise or update these Terms of Service at any time to reflect software updates, regulatory mandates, or Google Play Developer Policy revisions.",
          "Publication of Updates: Changes become effective immediately upon publication on this website, marked by the revised 'Last Updated' date.",
          "Continued Acceptance: Your continued installation or play of Mithai Merge following any updates signifies your binding acceptance of the revised Terms.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact Information & Google Play Trader Disclosures",
        content: [
          "Trader Identification (EU Digital Services Act): In compliance with Article 30 of the EU Digital Services Act (DSA) and Google Play Trader disclosure requirements, the legal provider of this application is:",
          "Developer / Trader Name: Karan Saini",
          "Trading / App Name: Mithai Merge Studio (Mithai Merge: 2048 Puzzle)",
          "Official Contact Email: officialworldwithtechnology@gmail.com",
          "Support & Legal Inquiries: officialworldwithtechnology@gmail.com",
          "Country & Jurisdiction of Establishment: India",
          "Self-Certification Commitment: The Trader hereby self-certifies that it only offers products and services that comply with applicable rules of European Union law, Indian law, and Google Play Developer Program Policies.",
          "Consumer Inquiries & Dispute Redressal: For questions, bug reports, or legal notices, please contact officialworldwithtechnology@gmail.com. We respond to verified inquiries within 48 to 72 business hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Zero sign-up/login architecture). All game boards, campaign level stars (Mithai Yatra), streaks, coins, high scores, and sound/theme settings are saved locally on your device. To delete all data: in Mithai Merge open Settings -> tap 'Clear All Data', or navigate to Android Settings -> Apps -> Mithai Merge -> Storage -> tap 'Clear Data' / 'Clear Storage', or uninstall the application from your device.",
    deletedDataTypes: [
      "Saved game boards and active tile states (save_*.json)",
      "Mithai Yatra campaign level stars and progression",
      "Streak records, coin balance, and personal high scores (profile.json)",
      "Player preferences (music, SFX, haptic feedback, colorblind mode, D-Pad)",
    ],
    retainedDataTypes: [],
    retentionReason:
      "Mithai Merge does not collect, transmit, or retain any player data on cloud servers. Zero data is retained remotely.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
