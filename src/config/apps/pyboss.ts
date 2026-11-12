import { AppConfig } from "@/types/app-config";

export const pyBossConfig: AppConfig = {
  metadata: {
    id: "pyboss",
    name: "PyBoss: Learn Python Game",
    packageName: "com.pyboss.game",
    category: "Education",
    description:
      "PyBoss: Learn Python Game is a free, offline, gamified Python learning app for students aged 13 and older. It contains 14 themed worlds (Print Plains, Variable Village, Operator Oasis, String Bazaar, Decision Dojo, Loop Forest, List Lake, Tuple Temple, Dict Desert, Function Fortress, Error Volcano, OOP Castle, Pythonic Peak and Trickster's Maze), 210 levels, 42 timed boss battles and 1,344 questions whose answers were verified by running the code in Python. Players predict output, identify errors, spot bugs, fill in blanks, arrange lines of code, answer true/false and concept questions, and read an explanation after every answer. It also has a Daily Challenge, a 60-second Blitz mode, a daily Lucky Spin, Mystery Chests, combos, Golden Questions, hearts, coins, hints, XP levels, titles, 16 avatars and 30 achievements. It needs no login, has no in-app purchases and no servers of its own; all progress stays on the device. The App is supported by Google AdMob ads.",
    version: "1.0.0",
    effectiveDate: "November 12, 2026",
    lastUpdated: "November 12, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "PyBoss",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pythonwithkaran.vercel.app/pyboss",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to PyBoss: Learn Python Game ('we', 'our', or 'the App'). We respect your privacy. This Privacy Policy explains what information the App processes, how our advertising partner Google AdMob may interact with your device, and the rights and choices you have under applicable privacy laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA / CPRA), the Children's Online Privacy Protection Act (COPPA) and India's Digital Personal Data Protection Act, 2023 (DPDP Act). By installing and using PyBoss you agree to the practices described here.",
    dataCollection: [
      {
        category: "Information We DO NOT Collect",
        items: [
          "No accounts or logins: PyBoss has no sign-up, username or password, and no servers of our own.",
          "No personal identifiers: we do not collect email addresses, phone numbers, postal addresses or government IDs.",
          "No location permission: the App does not request GPS or network location permissions.",
          "No camera, microphone, contacts, phone state, photos or files: none of these permissions are requested.",
          "No payments: the App has no in-app purchases and never handles payment information.",
        ],
        purpose:
          "PyBoss is designed to work offline. All questions ship inside the App, and gameplay does not need any of the data listed above.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Data Stored Only on Your Device",
        items: [
          "Game progress: stars per level, coins, hints, hearts, XP, player level, streaks, achievements, unlocked avatars, Daily Challenge and Lucky Spin dates, and statistics such as correct answers.",
          "Profile: the coder name you optionally type and the avatar you pick. The name is shown only inside the App and is never sent to us or to advertisers.",
          "Settings: sound effects and vibration preferences.",
        ],
        purpose:
          "This data is kept in the App's private storage (Android SharedPreferences) so you can continue your progress. If you have Android backup turned on, Android may include this progress file in your own Google account backup, so it can be restored on a new phone; we cannot access that backup. You can erase everything at any time with Settings > Reset all progress, by clearing the App's storage in Android Settings, or by uninstalling the App.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Network Use, Analytics and Other Features",
        items: [
          "Internet is used only to load ads and the Google consent form. All 210 levels, the question bank, sounds and rewards are inside the App and work offline.",
          "No analytics or crash-reporting SDKs of our own (such as Firebase Analytics or Crashlytics) are included.",
          "No push notifications, no cloud sync, no leaderboards, no chat, no social features and no user-generated content shared with others.",
          "No in-app purchases and no payment processing of any kind.",
          "The only external link is to this Privacy Policy, which opens in your browser from Settings.",
        ],
        purpose:
          "These limits keep the App simple and private: apart from Google's advertising services, the App does not talk to any server.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Advertising Data Processed by Google AdMob and UMP",
        items: [
          "Device advertising identifier (Android Advertising ID / AD_ID), used for ad delivery, frequency capping, measurement and, where you consent, personalised ads.",
          "Approximate location derived from your IP address (country or city level), used to select appropriate ads.",
          "Ad interaction and diagnostic data, such as ad impressions, clicks, ad load performance and crash information related to ads, used for measurement, fraud prevention and analytics.",
          "Consent choices made in the Google consent form (UMP), stored on your device.",
        ],
        purpose:
          "PyBoss is free and supported by ads from Google AdMob. Banner ads appear only on the Home and results screens, never while a question is on screen. Interstitial (full-screen) ads may appear only when you leave a results screen after finishing a level; never before you have cleared 3 levels, never in the first 2 minutes of a session, and at most once every 3 minutes. Rewarded ads play only when you tap a button clearly labelled 'Watch ad', in exchange for a refill of hearts, a hint, double coins or an extra daily spin. Ads are limited to content rated suitable for teens (maximum content rating T). No ads are requested until the Google consent flow allows it. The App never shares your game progress or coder name with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android Permissions",
        items: [
          "android.permission.INTERNET: to load ads and the consent form. Gameplay works offline.",
          "android.permission.ACCESS_NETWORK_STATE: to check for an internet connection before requesting ads.",
          "android.permission.VIBRATE: for optional haptic feedback on taps and answers (can be turned off in Settings).",
          "com.google.android.gms.permission.AD_ID and the Android Privacy Sandbox permissions ACCESS_ADSERVICES_AD_ID, ACCESS_ADSERVICES_ATTRIBUTION and ACCESS_ADSERVICES_TOPICS: added by the Google Mobile Ads SDK for ad delivery and measurement.",
          "android.permission.WAKE_LOCK and FOREGROUND_SERVICE: added by Google libraries used inside the Ads SDK for background work. They do not access personal data.",
        ],
        purpose:
          "No sensitive permissions (location, camera, microphone, contacts, storage) are requested.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK)",
        provider: "Google LLC",
        purpose:
          "Serves banner, interstitial and optional rewarded ads. Processes the advertising ID, IP-based approximate location and ad interaction data as described above.",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Google User Messaging Platform (UMP SDK)",
        provider: "Google LLC",
        purpose:
          "Shows the consent form where required (for example in the EEA, UK and Switzerland) and stores your choices. You can change them any time in the App via Settings > Ad privacy choices.",
        privacyPolicyUrl: "https://policies.google.com/technologies/partner-sites",
      },
      {
        name: "Google Privacy Policy",
        provider: "Google LLC",
        purpose: "Governs how Google processes data collected through its advertising services.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataUsePurposes: [
      "Provide offline Python learning gameplay: levels, bosses, the Daily Challenge, Blitz mode, rewards and achievements.",
      "Save your progress, profile and settings on your device.",
      "Show ads through Google AdMob so the App can stay free.",
      "Collect and respect advertising consent choices through Google UMP where required by law.",
      "Allow ad frequency capping, measurement and fraud prevention by Google.",
    ],
    dataRetentionPolicy:
      "Game progress, profile and settings remain on your device until you use Settings > Reset all progress, clear the App's storage, or uninstall the App. We run no servers and keep no copy of your data. If Android backup is enabled on your device, a copy may exist in your own Google account backup under Google's control. Advertising data processed by Google is retained according to Google's policies (https://policies.google.com/privacy).",
    securityPractices: [
      "No accounts: no passwords or credentials are created, stored or transmitted.",
      "Private app storage: progress is kept in Android's private, per-app storage that other apps cannot read.",
      "Encrypted connections: network traffic from the Google Mobile Ads SDK uses HTTPS (TLS). The App disallows unencrypted (cleartext) traffic.",
      "Minimal permissions: no sensitive permissions are requested.",
      "Player controls: you can reset all progress and change ad consent choices from the App's Settings.",
    ],
    childrensPrivacy:
      "PyBoss is an educational game intended for students aged 13 and older. It is not directed at children under 13, and in Google Play Console the target audience is set to 13 and older. We do not knowingly collect personal information from children under 13 (or under 16 where local law requires). The App has no accounts and collects no personal information itself; the optional coder name never leaves the device. Ads are limited to content rated suitable for teens. If a parent or guardian believes a child has provided personal information, please contact officialworldwithtechnology@gmail.com and we will help.",
    userRights: [
      "Delete your data: use Settings > Reset all progress, clear the App's storage in Android Settings, or uninstall the App.",
      "Change ad consent (GDPR / UK GDPR): where the consent form applies, use Settings > Ad privacy choices in the App at any time.",
      "Opt out of personalised ads (CCPA / CPRA and everyone): reset or delete your advertising ID in Android Settings > Google > Ads, or manage ad settings at https://adssettings.google.com.",
      "DPDP Act (India): you may contact us for grievance redressal at officialworldwithtechnology@gmail.com.",
      "Non-discrimination: changing consent or deleting data never blocks access to the game's levels.",
    ],
    internationalTransfers:
      "We do not operate servers and do not transfer your data. Ad requests and consent checks are processed by Google on its global infrastructure in line with Google's Privacy Policy and applicable transfer safeguards.",
    changesToPolicy:
      "We may update this Privacy Policy when the App or legal requirements change. The 'Last Updated' date above will show the latest version. Continued use of the App after an update means you accept the updated policy.",
  },
  terms: {
    introduction:
      "These Terms of Service ('Terms') are an agreement between you and Karan Saini ('Developer', 'we', 'us') for the PyBoss: Learn Python Game mobile application (package name: com.pyboss.game). PyBoss is a free, ad-supported educational game.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By installing or using PyBoss you agree to these Terms and our Privacy Policy. If you do not agree, please uninstall the App.",
          "PyBoss is intended for users aged 13 and older. Users under 18 should review these Terms with a parent or guardian.",
          "Google Play Trader status (EU Digital Services Act): the Developer offers this App on Google Play as a trader to users worldwide, including the EEA and the UK.",
          "Right of withdrawal: PyBoss is free with no in-app purchases. You can end this agreement at any time by uninstalling the App.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App",
        content: [
          "Learning content: 14 worlds covering print and basics, variables, operators, strings, conditions, loops, lists, tuples and sets, dictionaries, functions, errors and exceptions, object-oriented programming, Pythonic idioms, and common interview gotchas. Each world has 15 levels (210 in total) and 3 boss levels (42 bosses), with 1,344 questions in all.",
          "Question types: predict the output, identify the error, tap the line that crashes, fill in the blank, arrange the lines in order, true or false, and concept multiple-choice questions. Every answer was verified by running the code in Python, and every question shows a short explanation. Explanations are simplified for learning and are not a substitute for the official Python documentation.",
          "Game modes: the level map in each world; boss battles with a 30-second timer per question; a Daily Challenge of 7 questions; and Blitz, a 60-second true/false speed round.",
          "Progression: stars (1 to 3) per level based on mistakes; new worlds unlock by collecting stars or by spending in-game coins; XP raises your player level and earns titles and avatars; streaks count days played; 30 achievements reward milestones.",
          "Hearts: level play uses up to 5 hearts. A wrong answer or a timed-out boss question costs 1 heart. Hearts refill by 1 every 15 minutes, or immediately by spending in-game coins or watching an optional rewarded ad.",
          "Rewards: coins and XP for correct answers, combos (double coins from 5 correct in a row), Golden Questions (triple coins), a Mystery Chest after every 3 newly cleared levels and after each Daily Challenge, and one free Lucky Spin per day. Rewards from chests and spins are random.",
          "Virtual items (coins, hints, hearts, XP, avatars) are earned only by playing or by watching optional ads. They cannot be bought with real money, have no real-world value, cannot be exchanged or transferred, and may be rebalanced in updates.",
          "Offline use: the App works offline except for ads. Progress is stored only on your device and is not synced between devices (Android's own backup may restore it if you have backup enabled).",
          "Language and availability: the App is in English and is offered free of charge on Google Play.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. Acceptable Use",
        content: [
          "Use the App for personal, non-commercial learning and entertainment.",
          "Do not use bots, scripts or other automated means to generate ad impressions, ad clicks or rewarded-ad completions.",
          "Do not tamper with the App's stored data to manipulate progress.",
          "Do not decompile, reverse engineer or redistribute the App, its question bank, artwork or sound effects.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property",
        content: [
          "The App's code, question bank, explanations, visual design, icon and original sound effects belong to the Developer.",
          "You receive a limited, personal, revocable, non-exclusive, non-transferable licence to use the App for non-commercial purposes.",
          "Python is a trademark of the Python Software Foundation. PyBoss is an independent educational app and is not affiliated with or endorsed by the Python Software Foundation.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements",
        content: [
          "PyBoss is free because it shows ads from Google AdMob: banner ads on the Home and results screens only, and never during a question.",
          "Interstitial ads may appear only when you leave a results screen after a level, never before you have cleared 3 levels, never in the first 2 minutes of a session, and no more than once every 3 minutes.",
          "Rewarded ads are always your choice and are shown only after you tap a button labelled 'Watch ad'. They can refill hearts, give a hint, double the coins from a level or give one extra daily spin. Declining them never stops you from playing, because hearts refill over time and everything can be earned through play.",
          "If an ad fails to load, its reward button is simply unavailable until one loads; you are never charged or penalised.",
          "Where required by law, a Google consent form is shown before ads are requested. You can change your choices in Settings > Ad privacy choices.",
          "You can manage personalised advertising in Android Settings > Google > Ads or at https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "The App uses the Google Mobile Ads SDK (AdMob) and the Google User Messaging Platform (UMP), which operate under Google's own terms and privacy policy (https://policies.google.com/privacy).",
          "We are not responsible for the content of third-party advertisements or the availability of third-party services.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "The App is provided 'as is' and 'as available' without warranties of any kind, to the extent permitted by law.",
          "We do not guarantee that the App will be error-free, uninterrupted or compatible with every device.",
          "Nothing in these Terms limits statutory consumer rights that cannot be excluded under applicable law, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, the Developer is not liable for indirect, incidental, special or consequential damages arising from use of the App.",
          "Because progress is stored only on your device, we are not responsible for progress lost through clearing data, resetting your device or uninstalling the App.",
          "Our total liability for any claim is limited to the amount you paid for the App (INR 0) or USD 10, whichever is greater.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to These Terms",
        content: [
          "We may update these Terms when the App or legal requirements change. Updates take effect when published on this page, as shown by the 'Last Updated' date.",
          "Continuing to use the App after an update means you accept the revised Terms.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact and Trader Information",
        content: [
          "Trader status (EU Digital Services Act, Article 30): the Developer distributes this App on Google Play as a trader.",
          "Developer / Trader name: Karan Saini (individual developer)",
          "App: PyBoss: Learn Python Game",
          "Package name: com.pyboss.game",
          "Distribution platform: Google Play",
          "Price: free. No in-app purchases, subscriptions or other payments.",
          "Contact email: officialworldwithtechnology@gmail.com",
          "Support email: officialworldwithtechnology@gmail.com",
          "Website: https://pythonwithkaran.vercel.app/pyboss",
          "Privacy Policy: https://pythonwithkaran.vercel.app/pyboss/privacy",
          "Data deletion: https://pythonwithkaran.vercel.app/pyboss/delete-account",
          "Country of establishment and governing jurisdiction: India",
          "The trader's verified postal address and phone number are shown on the App's Google Play store listing, as provided to Google Play.",
          "The Developer self-certifies that it offers only products that comply with applicable EU law, Indian law and Google Play Developer Program Policies.",
          "Complaints and support: for questions, bug reports, wrong answers in a question, or legal notices, email officialworldwithtechnology@gmail.com. We aim to reply within 72 hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "PyBoss has no accounts. All progress is stored on your device. To delete it: open PyBoss > Settings (gear icon) > Reset all progress, or go to Android Settings > Apps > PyBoss > Storage > Clear storage, or uninstall the App.",
    deletedDataTypes: [
      "Level stars, coins, hints, hearts, XP and player level",
      "Streaks, achievements, unlocked avatars and statistics",
      "Coder name and chosen avatar",
      "Sound and vibration settings",
    ],
    retainedDataTypes: [],
    retentionReason: "PyBoss stores no data on any server, so nothing is retained after deletion.",
    processingTime: "Instant (on-device action)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
