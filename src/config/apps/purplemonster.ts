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
    version: "1.5.3",
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
      "Welcome to Purple Monster: Snack Rain. These Terms and Conditions ('Terms') govern your use of the Purple Monster: Snack Rain mobile application ('App') developed by Karan Saini (Python With Karan). By installing, accessing, or playing the game, you agree to be bound by these Terms and our Privacy Policy.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content:
          "By downloading, accessing, or playing Purple Monster: Snack Rain, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree with any provision of these terms, please discontinue using and uninstall the game.",
      },
      {
        id: "gameplay-and-model",
        title: "2. Gameplay & Free-to-Play Structure",
        content:
          "Purple Monster: Snack Rain is a free arcade catching game where players catch falling snacks while dodging obstacles. The game features unlockable monster skins, cosmetic arena backgrounds, an achievement system, and optional gameplay boosters. All core catching gameplay is 100% free. Optional rewards (such as extra lives, skin unlock progression, coin doubling, and daily boosters) can be earned by voluntarily watching rewarded video ads. No real-money in-app purchases are required to enjoy the game.",
      },
      {
        id: "account-free-architecture",
        title: "3. Account-Free Architecture & Local Storage",
        content:
          "Purple Monster: Snack Rain operates entirely without user accounts or cloud authentication. All game progress—including your high score, selected skin, achievement milestones, coin balance, and boosters—is stored solely on your device's local storage (Android SharedPreferences). Uninstalling the application or clearing device app data will permanently reset your local gameplay progress.",
      },
      {
        id: "third-party-advertising",
        title: "4. In-Game Advertising (Google AdMob)",
        content:
          "To sustain free game development, the App displays advertisements provided by Google AdMob. The game implements four ad formats with player-friendly protections: Rewarded Video Ads (always voluntary, user-initiated), Interstitial Ads (spaced with pacing rules of at least 3 rounds and 300+ seconds of play, never during active gameplay), Banner Ads (menus and pause screens only), and Native Ads (Shop and Achievements menus). If an advertisement fails to load or if you decline a rewarded ad, gameplay continues normally without penalty.",
      },
      {
        id: "system-permissions",
        title: "5. Permissions & Connectivity",
        content: [
          "android.permission.INTERNET — Used exclusively by Google AdMob to retrieve and display advertisements. The game engine itself performs no network requests.",
          "android.permission.ACCESS_NETWORK_STATE — Used by Google AdMob to check network availability before requesting ads, avoiding unnecessary retries while offline.",
        ],
      },
      {
        id: "intellectual-property",
        title: "6. Intellectual Property Rights",
        content:
          "All custom monster designs, animations, artwork, sound effects, music tracks, user interface elements, gameplay mechanics, and code in Purple Monster: Snack Rain are the intellectual property of Karan Saini (Python With Karan). You are granted a limited, personal, revocable, non-exclusive, non-transferable license to play the game for personal, non-commercial entertainment.",
      },
      {
        id: "prohibited-activities",
        title: "7. Prohibited Uses",
        content: [
          "Decompiling, reverse engineering, disassembling, or extracting the application binary or game assets.",
          "Employing automated tools, bots, scripts, or emulators to generate fraudulent ad impressions, clicks, or illegitimate gameplay scores.",
          "Redistributing, selling, licensing, or commercially exploiting any assets, artwork, audio, or code from the game.",
          "Tampering with local application storage to bypass game progression or ad systems.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content:
          "To the fullest extent permitted by applicable law, the developer shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use the application, including loss of local game progress due to device resetting, updates, or hardware failure.",
      },
      {
        id: "governing-law",
        title: "9. Governing Law & Dispute Resolution",
        content:
          "These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
      },
      {
        id: "contact-information",
        title: "10. Contact & Feedback",
        content:
          "For any questions, bug reports, or support regarding Purple Monster: Snack Rain or these Terms, please contact officialworldwithtechnology@gmail.com.",
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
