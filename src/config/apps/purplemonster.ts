import { AppConfig } from "@/types/app-config";

export const purpleMonsterConfig: AppConfig = {
  metadata: {
    id: "purplemonster",
    name: "Purple Monster: Snack Rain",
    packageName: "com.purplemonster.purple_monster_game",
    category: "Games",
    description:
      "Purple Monster: Snack Rain is a free, fun arcade game where you control a purple monster to catch falling snacks. Features monster skins, arena backgrounds, achievements, boosters, and a coin progression system — all fully offline with no accounts or logins required.",
    logoUrl: "/apps/purplemonster/logo.png",
    version: "1.7.3",
    effectiveDate: "October 29, 2026",
    lastUpdated: "October 29, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Python With Karan",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Purple Monster: Snack Rain ('we', 'our', or 'the App') is committed to protecting your privacy. This Privacy Policy explains how Purple Monster: Snack Rain handles information when you use our free Android arcade game available on the Google Play Store (Package ID: com.purplemonster.purple_monster_game). We are committed to protecting your privacy. The App is designed with a privacy-first, zero-data-collection architecture: no accounts, no logins, no personal information collected, and all gameplay data stored exclusively on your device.",
    dataCollection: [
      {
        category: "Personal Information (Zero PII Collection)",
        items: [
          "First or last name",
          "Email address or phone number",
          "Physical address or postal code",
          "Contact list or address book",
          "Photos, camera access, or audio recordings",
          "Financial, banking, or payment card details",
          "GPS or precise location data",
          "Biometric data or personal profiles",
        ],
        purpose:
          "We do NOT collect, store, or transmit any Personally Identifiable Information (PII). The App does not require user registration, sign-up, or account creation of any kind. There are no accounts, no login screens, no cloud profiles, and no emails collected.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "On-Device Game Data (Local Storage Only — Never Uploaded)",
        items: [
          "'best' (Integer) — Player's all-time highest score record",
          "'skin' (String) — Name of the currently selected monster skin",
          "'muted' (Boolean) — Whether sound effects are muted",
          "'music' (Boolean) — Whether background music is enabled",
          "'reducedMotion' (Boolean) — Accessibility setting for reduced animations",
          "'hasSeenOnboarding' (Boolean) — Whether the first-run tutorial overlay has been shown",
          "'arenaBackgroundV1' (String) — Selected arena background theme (cosmetic)",
          "'skinRewardsV1' (JSON) — Rewarded ad watch count per skin, ownership flags, and unlock timestamps",
          "'snackProgressionV1' (JSON) — Coin balance, purchased boosters, owned cosmetics, XP per skin, coin earnings per stage/round, daily ad-boost status, celebration preferences, and skin trial status",
          "'ach_[id]' (~60 keys, Boolean) — Individual achievement unlock flags",
          "'stat_[id]' (~60 keys, Integer) — Progress counters toward each achievement (e.g., seconds survived, snacks caught, scores reached)",
        ],
        purpose:
          "All gameplay state, settings, achievements, and progression data are stored 100% locally on your device via Android SharedPreferences. None of this data ever leaves your device or gets transmitted to any server. You can erase all of this data instantly by clearing the App's storage in Android Settings or by uninstalling the application.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Advertising Data — Google AdMob",
        items: [
          "Android Advertising ID (GAID) — used by Google for ad personalization and frequency capping (can be reset/deleted in Android Settings)",
          "IP Address — used by Google for approximate, country/regional-level ad serving and fraud detection (never stored long term)",
          "Device information — device model, operating system version, screen dimensions, system language, and timezone for ad rendering",
          "Ad interaction events — ad impressions, clicks, and rewarded video ad completions for AdMob reporting",
          "Approximate location — derived from IP address only; precise GPS location is never accessed or requested",
        ],
        purpose:
          "To keep the game completely free to play, we display advertisements via Google AdMob (google_mobile_ads SDK v9.1.0). The App does NOT share any personally identifiable information with AdMob. Ad data collection is governed directly by Google's Privacy Policy.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android System Permissions Used by the App",
        items: [
          "android.permission.INTERNET — Required exclusively by Google AdMob to load and display advertisements. The App itself makes zero internet calls.",
          "android.permission.ACCESS_NETWORK_STATE — Required by Google AdMob to check network connectivity before requesting ads, preventing unnecessary network calls when offline.",
        ],
        purpose:
          "Only 2 permissions are requested. Both are used strictly by the Google AdMob SDK. The App requests NO location access, NO camera access, NO microphone access, NO contacts access, NO phone state access, NO media/storage access, NO Bluetooth, and NO push notification permissions. Core gameplay remains 100% functional offline.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (google_mobile_ads SDK v9.1.0)",
        provider: "Google LLC",
        purpose:
          "Serves four distinct ad formats with strict player-first pacing rules: (1) Rewarded Video Ads — 100% optional and user-initiated; shown only when the player voluntarily taps to earn a second chance after Game Over, unlock monster skins, unlock shop backgrounds/bundles, double coin earnings, or receive daily boosters; (2) Interstitial Ads — shown between sessions only after completing at least 3 rounds AND 300+ seconds of real gameplay, never during active gameplay, and suppressed if a rewarded ad was watched in the same session; (3) Banner Ads — anchored adaptive banners displayed in menu and pause screens only, never overlaying the active play arena; (4) Native Advanced Ads — styled to match the dark purple aesthetic, displayed in the Shop and Achievements screens.",
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
          "Explains how Google uses data when you use partner applications and advertising technologies.",
        privacyPolicyUrl:
          "https://policies.google.com/technologies/partner-sites",
      },
    ],
    dataUsePurposes: [
      "Provide an engaging, free-to-play arcade gaming experience with zero mandatory sign-ups, accounts, or personal data collection.",
      "Save high scores, monster skin selections, achievement milestones, booster inventories, and cosmetic preferences strictly on-device.",
      "Respect accessibility preferences including reduced motion animations and audio toggle settings.",
      "Display policy-compliant advertisements via Google AdMob with player-friendly pacing rules to keep the game completely free.",
      "Ensure player safety: rewarded ads are never auto-triggered, interstitial ads have gameplay duration guards, and ads never interrupt active play.",
    ],
    dataRetentionPolicy:
      "All game progression (high scores, skins, achievements, booster inventory, coins, and settings) is stored purely locally on your device. It is never uploaded to any cloud server or database. This local data persists until you clear the application data in Android Settings or uninstall the game. Because we store no data on remote servers, there is no server-side data retention or deletion process needed. Google AdMob retains ad metrics in accordance with Google's Privacy Policy (https://policies.google.com/privacy).",
    securityPractices: [
      "Zero Remote Server Storage: We do not operate external databases, user account servers, or analytics backends that store user data.",
      "Operating System Sandboxing: All local game preferences and achievement states are safeguarded within the Android OS app sandbox.",
      "Encrypted Ad Communications: All ad communications initiated by Google AdMob are encrypted in transit via standard HTTPS/TLS protocols.",
      "Minimal Permissions: The application requires only 2 permissions (INTERNET and ACCESS_NETWORK_STATE), both restricted to ad delivery.",
      "Ad Pacing & Player Protections: Interstitial ads require 3+ completed rounds and 300+ seconds of active play; rewarded ads are strictly user-initiated; zero ads during active gameplay.",
      "No Persistent Tracking: The game does not track players across third-party websites or services.",
    ],
    childrensPrivacy:
      "Purple Monster: Snack Rain has a content rating of Everyone (ESRB E / PEGI 3) and is designed for a general, mixed audience. It is not specifically directed at children under the age of 13. We do not knowingly collect any personally identifiable information from children. Advertisements delivered by Google AdMob may use device advertising identifiers for frequency capping and ad personalization. Parents can disable ad personalization or delete the Advertising ID at any time via Android device settings (Settings > Google > Ads). If a parent or guardian believes their child has submitted personal data to us, please contact us at officialworldwithtechnology@gmail.com and we will take immediate steps to address the concern. (Note for EU release: Implementation of Google's User Messaging Platform (UMP) consent flow is scheduled for an upcoming update to support explicit GDPR consent.)",
    userRights: [
      "Right to Erase Local Data: Clear all scores, skins, coins, boosters, and achievements instantly by navigating to Android Settings → Apps → Purple Monster: Snack Rain → Storage → Clear Data, or by uninstalling the app.",
      "Right to Opt Out of Ad Personalization: Reset or delete your Android Advertising ID at any time via Android Settings → Google → Ads → 'Delete advertising ID', or customize ad settings at https://adssettings.google.com.",
      "Right to Offline Play: Enjoy all core catching gameplay, skins, and offline features without requiring an internet connection.",
      "No Account Deletion Needed: Because there are no user accounts or remote profiles, no account deletion request or verification is required.",
      "No Data Portability Necessary: No personal or gameplay data is stored on remote servers.",
    ],
    internationalTransfers:
      "Purple Monster: Snack Rain does not operate remote servers and transfers zero personal data internationally. Any data transmission related to Google AdMob is processed through Google's secure global infrastructure pursuant to Google's Privacy Policy. For users residing in the European Economic Area (EEA), note that a formal UMP GDPR consent dialog is planned for future versions; EU players may also manage their ad preferences directly via device settings.",
    changesToPolicy:
      "We may update this Privacy Policy periodically to reflect changes in the game, advertising SDKs, or legal requirements. Any modifications will be posted on this page with an updated 'Last Updated' date. Continued use of the game following any updates indicates acceptance of the revised policy.",
  },
  terms: {
    introduction:
      "Welcome to Purple Monster: Snack Rain. These Terms of Service ('Terms') constitute a legally binding agreement between you ('Player', 'User', 'you', or 'your') and Karan Saini ('Developer', 'Trader', 'we', 'us', or 'our') governing your use of the Purple Monster: Snack Rain mobile application (Package Name: com.purplemonster.purple_monster_game). This application is provided as a free-to-play arcade game and complies with applicable consumer protection laws and Google Play Console Trader requirements under the EU Digital Services Act (DSA).",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "Legally Binding Agreement: By downloading, installing, accessing, or playing Purple Monster: Snack Rain, you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must refrain from playing and uninstall the application immediately.",
          "Eligibility & General Audience: Purple Monster: Snack Rain is rated ESRB Everyone / PEGI 3 for a general, family audience. Users under 18 years of age represent that they have reviewed these Terms with a parent or legal guardian.",
          "Google Play Trader Status Declaration: In accordance with Article 30 of the European Union Digital Services Act (DSA) (Regulation EU 2022/2065), the developer is registered as a 'Trader' on Google Play, providing ad-supported digital entertainment software to users globally, including the European Economic Area (EEA) and the United Kingdom.",
          "Right of Withdrawal (EU/EEA & UK Consumers): The application is 100% free-to-play with zero upfront monetary cost. Under statutory consumer protection law, performance begins immediately upon installation. You retain the right to terminate this agreement at any time by ceasing play and uninstalling the game from your device.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App and Services",
        content: [
          "Free-to-Play Arcade Game: Purple Monster: Snack Rain is a casual arcade mobile game where players control a friendly purple monster to catch falling snacks while dodging bombs and obstacles.",
          "Cosmetic Customization & Progression: Features unlockable monster skins, cosmetic arena background themes, a 60+ milestone achievement system, optional boosters, and an on-device coin economy.",
          "100% Offline Core Gameplay: All core arcade catching mechanics, scores, unlockable skins, and settings operate entirely offline on your local device without requiring an active internet connection.",
          "Account-Free & Local Storage Architecture: The game requires zero player accounts, sign-ups, or login credentials. All high scores ('best'), unlocked skins, achievements, coin progression, and booster inventories are stored strictly inside on-device SharedPreferences.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. User Responsibilities & Acceptable Use",
        content: [
          "Personal Entertainment Use: You agree to use the application strictly for personal, non-commercial entertainment in compliance with all applicable laws.",
          "Prohibition on Cheating & Memory Manipulation: You agree not to use memory editors, game-cracking software, automated bots, macros, or modified APKs to illegitimately bypass gameplay progression, coin balances, or skin unlock requirements.",
          "Prohibition on Advertising Manipulation: You strictly agree not to use automated tools, bots, click farms, or emulators to generate fraudulent AdMob impressions, clicks, or illegitimate rewarded video ad triggers.",
          "Prohibition on Reverse Engineering: You agree not to decompile, reverse engineer, disassemble, extract, or redistribute the game binary, sprites, audio tracks, or assets for commercial sale.",
          "Device Responsibility: You are responsible for maintaining your device operating system and storage.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: [
          "Developer Ownership: All custom monster character designs, sprite animations, arena artwork, original sound effects, background music compositions, gameplay mechanics, and software code in Purple Monster: Snack Rain are the exclusive intellectual property of Karan Saini (Python With Karan).",
          "Limited License: Subject to these Terms, you are granted a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to play the game solely for non-commercial personal entertainment.",
          "Protection of Proprietary Assets: No character art, animations, or audio tracks may be copied, repurposed, or publicly displayed for commercial purposes without prior written authorization.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements (AdMob and Third-Party Ads)",
        content: [
          "Ad-Supported Monetization: To keep Purple Monster: Snack Rain 100% free with zero real-money in-app purchases (IAP), the game is supported by advertisements served via Google AdMob (google_mobile_ads SDK v9.1.0).",
          "Four Ad Formats with Strict Player Pacing: (1) Rewarded Video Ads — 100% voluntary and user-initiated to earn a second chance after Game Over, unlock monster skins, double coin earnings, or receive daily boosters; (2) Interstitial Ads — shown strictly between sessions only after at least 3 completed rounds AND 300+ seconds of real gameplay, never interrupting active play; (3) Banner Ads — anchored adaptive banners in menus and pause screens only; (4) Native Ads — styled into the Shop and Achievements menus.",
          "Player-First Safety: Zero advertisements ever interrupt active gameplay inside the snack-catching arena.",
          "Consent Management (Google UMP): In compliance with the GDPR and ePrivacy regulations, Google User Messaging Platform (UMP) handles explicit advertising consent for EEA, UK, and Swiss players.",
          "Opt-Out Options: You may opt out of personalized ads at any time via Android Settings (Settings > Google > Ads) or via https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "Third-Party SDKs: Integrates Google Mobile Ads (AdMob) for ad delivery and Google Play Services.",
          "Zero Behavioral Telemetry: The game does not integrate Facebook SDK, Firebase Analytics, or behavioral telemetry trackers.",
          "Third-Party Disclaimers: Third-party services operate under their own independent terms and policies (https://policies.google.com/privacy). We do not control and are not responsible for third-party network availability.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "Provided 'AS IS' & 'AS AVAILABLE': Purple Monster: Snack Rain is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranty of any kind, whether express, statutory, or implied.",
          "Entertainment Purpose Only: The software is designed purely for casual recreation. We make no warranty that gameplay will be uninterrupted, error-free, or compatible with every past or future device hardware.",
          "Preservation of Consumer Guarantees: Nothing in these Terms limits or excludes any non-waivable statutory consumer guarantees of conformity under applicable consumer legislation, including EU Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "Exclusion of Consequential Damages: To the maximum extent permitted by applicable law, Karan Saini shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to play the game.",
          "Local Data Reset Disclaimer: Because all high scores, unlocked monster skins, coins, and achievement progress reside strictly in local on-device SharedPreferences, the Developer is not liable for progress loss resulting from device resets, storage clearing, uninstallation, or hardware malfunction.",
          "Aggregate Liability Cap: Our total aggregate liability for all claims related to the game shall not exceed the amount paid by you ($0.00 / INR 0) or USD $10.00, whichever is greater.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        content: [
          "Modifications: We reserve the right to revise or update these Terms at any time to reflect game updates, new features, or changing legal/Google Play requirements.",
          "Notice of Updates: Changes become effective upon publication on this portal, marked by the revised 'Last Updated' date.",
          "Continued Play: Continued installation or play of Purple Monster: Snack Rain constitutes acceptance of the revised Terms.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact Information & Google Play Trader Disclosures",
        content: [
          "Trader Identification (EU Digital Services Act): In compliance with Article 30 of the EU Digital Services Act (DSA) and Google Play Trader disclosure requirements, the legal provider of this application is:",
          "Developer / Trader Name: Karan Saini",
          "Trading / App Name: Python With Karan (Purple Monster: Snack Rain)",
          "Official Contact Email: officialworldwithtechnology@gmail.com",
          "Support & Legal Inquiries: officialworldwithtechnology@gmail.com",
          "Country & Jurisdiction of Establishment: India",
          "Self-Certification Commitment: The Trader hereby self-certifies that it only offers products and services that comply with applicable rules of European Union law, Indian law, and Google Play Developer Program Policies.",
          "Consumer Dispute Inquiries: For questions, bug reports, or legal inquiries, please contact officialworldwithtechnology@gmail.com. We respond to inquiries within 48 to 72 business hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Zero sign-up/login architecture). All game data—high scores, unlocked skins, achievements, coins, boosters, and settings—is stored locally on your device. To delete all local data immediately, open Android Settings → Apps → Purple Monster: Snack Rain → Storage → Clear Data / Clear Storage, or uninstall the application from your device.",
    deletedDataTypes: [
      "All-time highest score ('best')",
      "Selected monster skin ('skin')",
      "Audio and music preferences ('muted', 'music')",
      "Accessibility settings ('reducedMotion')",
      "Onboarding tutorial flag ('hasSeenOnboarding')",
      "Selected arena background theme ('arenaBackgroundV1')",
      "Rewarded ad skin unlock progress and timestamps ('skinRewardsV1')",
      "Coins, boosters, XP, cosmetics, and stage progress ('snackProgressionV1')",
      "Achievement unlock flags (~60 'ach_[id]' keys)",
      "Achievement progress counters (~60 'stat_[id]' keys)",
    ],
    retainedDataTypes: [],
    retentionReason:
      "Purple Monster: Snack Rain does not collect, transmit, or retain any player information on cloud databases. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
