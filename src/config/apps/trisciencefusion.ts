import { AppConfig } from "@/types/app-config";

export const triScienceFusionConfig: AppConfig = {
  metadata: {
    id: "trisciencefusion",
    name: "TriScienceFusion – NCERT Physics, Chemistry & Biology",
    packageName: "com.pwk.TriScienceFusion",
    category: "Education",
    description:
      "TriScienceFusion is a free, offline NCERT science reference for CBSE Class 9–12 students that brings Physics, Chemistry and Biology together in one app. It covers 222 physics formulas, 136 chemistry formulas and 151 balanced reactions, and 321 biology topics with 267 labelled diagrams, organised chapter by chapter with CBSE, JEE and NEET tags and exam tips. It also includes calculators for 351 formulas, practice quizzes and flashcards, chapter revision sheets with PDF export, a periodic table, a name-reaction index, SI units and significant figures, physical constants, a unit converter, bookmarks with folders, an optional daily 'Formula of the day' reminder and home-screen widget, and an English / हिन्दी interface. It needs no login and works offline; it is supported by Google AdMob ads.",
    version: "1.0.0",
    effectiveDate: "November 15, 2026",
    lastUpdated: "November 15, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "TriScienceFusion",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pythonwithkaran.vercel.app/trisciencefusion",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to TriScienceFusion ('we', 'our', or 'the App'). We respect your privacy. This Privacy Policy explains what information the App processes, how our advertising partner Google AdMob may interact with your device, and the rights and choices you have under applicable privacy laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA / CPRA), the Children's Online Privacy Protection Act (COPPA) and India's Digital Personal Data Protection Act, 2023 (DPDP Act). By installing and using TriScienceFusion you agree to the practices described here.",
    dataCollection: [
      {
        category: "Information We DO NOT Collect",
        items: [
          "No accounts or logins: TriScienceFusion has no sign-up, username or password, and no servers of our own.",
          "No personal identifiers: we do not collect your name, email address, phone number, contacts or photos.",
          "No location permission: the App does not request GPS or network location permissions.",
          "No camera, microphone, contacts, phone-state or storage permissions.",
          "No payments: the App has no in-app purchases and never handles payment information.",
          "No analytics or crash-reporting SDKs of our own, no cloud sync and no social or user-generated-content features.",
        ],
        purpose:
          "TriScienceFusion is designed to work offline. All formulas, reactions, diagrams, calculators and study tools are bundled inside the App.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Study Data Stored Only on Your Device",
        items: [
          "Bookmarks, bookmark folders and recently viewed items.",
          "Quiz scores and flashcard progress.",
          "Settings: theme (light / dark / system), text size and language (English / हिन्दी).",
          "Daily reminder on/off and the reminder time you choose.",
          "The language used by the home-screen widget.",
        ],
        purpose:
          "We never upload, collect or see this data. It stays in the App's private storage until you clear the App's storage or uninstall the App. If Android backup is enabled on your device, this data may be included in your own Google account backup, which is controlled by you and Google.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Optional Features That Stay on Your Device",
        items: [
          "Daily 'Formula of the day' reminder: off by default. If you turn it on, the App asks for notification permission and schedules reminders on your device only.",
          "Home-screen widget: shows the formula of the day from data bundled in the App; it sends nothing anywhere.",
          "Revision sheet PDF, Copy and Share: PDFs are generated on your device, and content is shared only when you choose a destination in Android's share sheet.",
          "Rate the App: opens Google Play's in-app review screen, handled by Google Play.",
        ],
        purpose: "Apart from Google's advertising and consent services, the App does not talk to any server.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Advertising Data Processed by Google AdMob and UMP",
        items: [
          "Device advertising identifier (Android Advertising ID / AD_ID), used for ad delivery, frequency capping and measurement.",
          "Approximate location derived from your IP address (country or city level), used to select appropriate ads.",
          "Ad interaction and diagnostic data, such as ad impressions, clicks and ad load performance, used for measurement, fraud prevention and analytics.",
          "Consent choices made in the Google consent form (UMP), stored on your device.",
        ],
        purpose:
          "TriScienceFusion is free and supported by ads from Google AdMob. A banner ad appears at the bottom of the home and content screens, and a full-screen (interstitial) ad may appear when you open a chapter, at most on every third chapter opened and never more often than once every 90 seconds. No ads are requested until the Google consent flow allows it. Because the App is made for school students, every ad request is marked for Google's teen treatment, which turns off personalised advertising, and ad content is limited to a teen-appropriate rating (maximum content rating T). Your study data is never shared with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android Permissions",
        items: [
          "android.permission.INTERNET: to load ads and the consent form.",
          "android.permission.ACCESS_NETWORK_STATE: to check for an internet connection before requesting ads.",
          "android.permission.POST_NOTIFICATIONS: requested only if you turn on the daily reminder (Android 13 and later).",
          "android.permission.RECEIVE_BOOT_COMPLETED and android.permission.VIBRATE: to restore your daily reminder after the phone restarts and to use the standard notification alert.",
          "com.google.android.gms.permission.AD_ID and Android Privacy Sandbox ad-services permissions: added by the Google Mobile Ads SDK for ad delivery and measurement.",
          "android.permission.WAKE_LOCK and android.permission.FOREGROUND_SERVICE: added by Google's libraries (Android WorkManager used by the ads SDK) for short background tasks; the App itself does not run foreground services.",
        ],
        purpose:
          "No sensitive permissions (location, camera, microphone, contacts, storage, exact alarms or all-files access) are requested.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK)",
        provider: "Google LLC",
        purpose:
          "Serves banner and interstitial ads with teen treatment and a maximum content rating of T. Processes the advertising ID, IP-based approximate location and ad interaction data as described above.",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Google User Messaging Platform (UMP SDK)",
        provider: "Google LLC",
        purpose:
          "Shows the consent form where required (for example in the EEA, UK and Switzerland) before any ad is requested, and stores your choices. You can change them any time in Settings > About & Legal > Privacy & ad choices.",
        privacyPolicyUrl: "https://policies.google.com/technologies/partner-sites",
      },
      {
        name: "Google Play In-App Review",
        provider: "Google LLC",
        purpose: "Shows Google Play's rating dialog when you choose 'Rate TriScienceFusion' in Settings.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Privacy Policy",
        provider: "Google LLC",
        purpose: "Governs how Google processes data collected through its advertising and Play services.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataUsePurposes: [
      "Give offline access to NCERT Physics, Chemistry and Biology formulas, reactions, diagrams, calculators, quizzes and revision tools for Classes 9–12.",
      "Remember your bookmarks, folders, recent items, quiz scores, flashcard progress and settings on your device.",
      "Send the optional daily 'Formula of the day' reminder at the time you choose, scheduled on your device.",
      "Show ads through Google AdMob so the App can stay free.",
      "Collect and respect advertising consent choices through Google UMP where required by law.",
      "Allow ad frequency capping, measurement and fraud prevention by Google.",
    ],
    dataRetentionPolicy:
      "Your study data and settings remain on your device until you clear the App's storage or uninstall the App. We run no servers and keep no copy of your data. If Android backup is enabled, a copy may exist in your own Google account backup under Google's control. Advertising data processed by Google is retained according to Google's policies (https://policies.google.com/privacy).",
    securityPractices: [
      "No accounts: no passwords or credentials are created, stored or transmitted.",
      "Private app storage: your study data is kept in Android's private, per-app storage that other apps cannot read.",
      "Encrypted connections: ad and consent traffic uses HTTPS (TLS).",
      "Minimal permissions: no sensitive permissions are requested, and notification permission is asked only if you turn on the reminder.",
      "Consent first: no ad request is made until the Google consent flow allows it.",
    ],
    childrensPrivacy:
      "TriScienceFusion is made for secondary and senior-secondary students (CBSE / NCERT Classes 9–12) and is not directed at children under 13. We do not knowingly collect personal information from anyone; the App has no accounts and collects no personal information itself. Every ad request is marked for Google's teen treatment and ad content is limited to a teen-appropriate rating (T). If a parent or guardian believes a child has provided personal information, please contact officialworldwithtechnology@gmail.com.",
    userRights: [
      "Delete your data: remove bookmarks and folders in the App, clear the App's storage in Android Settings, or uninstall the App.",
      "Turn off reminders: switch off the daily reminder in Settings > Study Reminder, or block notifications in Android settings.",
      "Change ad consent (GDPR / UK GDPR): where the consent form applies, use Settings > About & Legal > Privacy & ad choices at any time.",
      "Opt out of personalised ads (CCPA / CPRA and everyone): ads in the App are already non-personalised under teen treatment; you can also reset or delete your advertising ID in Android Settings > Google > Ads, or manage ad settings at https://adssettings.google.com.",
      "DPDP Act (India): you may contact us for grievance redressal at officialworldwithtechnology@gmail.com.",
      "Non-discrimination: changing consent or deleting data never limits the App's study features.",
    ],
    internationalTransfers:
      "We do not operate servers and do not transfer your data. Ad requests and consent checks are processed by Google on its global infrastructure in line with Google's Privacy Policy and applicable transfer safeguards.",
    changesToPolicy:
      "We may update this Privacy Policy when the App or legal requirements change. The 'Last Updated' date above will show the latest version. Continued use of the App after an update means you accept the updated policy.",
  },
  terms: {
    introduction:
      "These Terms of Service ('Terms') are an agreement between you and Karan Saini ('Developer', 'we', 'us') for the TriScienceFusion mobile application (package name: com.pwk.TriScienceFusion). TriScienceFusion is a free, ad-supported NCERT science study and reference app.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By installing or using TriScienceFusion you agree to these Terms and our Privacy Policy. If you do not agree, please uninstall the App.",
          "TriScienceFusion is intended for students aged 13 and older. Users under 18 should review these Terms with a parent or guardian.",
          "Google Play Trader status (EU Digital Services Act): the Developer offers this App on Google Play as a trader to users worldwide, including the EEA and the UK.",
          "Right of withdrawal: TriScienceFusion is free with no in-app purchases. You can end this agreement at any time by uninstalling the App.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App",
        content: [
          "Subject hubs: Physics (222 formulas), Chemistry (136 formulas and 151 balanced reactions) and Biology (321 topics with 267 labelled diagrams) for CBSE / NCERT Classes 9–12, arranged class by class and chapter by chapter.",
          "Exam focus: chapter tags for CBSE, JEE and NEET, exam tips and common mistakes for each chapter.",
          "Study tools: formula calculators (351 formulas), practice quizzes, flashcards, chapter revision sheets with PDF export, universal search, bookmarks with folders and recently viewed items.",
          "Reference: periodic table (118 elements), name-reaction index, SI units and significant figures, physical constants, a unit converter and a symbols guide.",
          "Formula of the day: a home-screen card, an optional daily reminder notification and an Android home-screen widget.",
          "Interface in English and हिन्दी (Hindi); formulas and scientific content are in English.",
          "The App works offline except for ads and the consent form, and it is offered free of charge on Google Play.",
        ],
      },
      {
        id: "independence",
        title: "3. Independence and Accuracy",
        content: [
          "TriScienceFusion is an independent study app. It is not affiliated with, endorsed by, or sponsored by NCERT, CBSE, NTA or the Government of India. These names are used only to describe the syllabus covered.",
          "Content has been checked carefully against NCERT textbooks, but errors can occur. Always follow your textbooks, teachers and the current official syllabus for examinations. Calculators use NCERT's rounded constant values, which are shown with each result.",
          "If you find a mistake, please report it to officialworldwithtechnology@gmail.com so we can correct it.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "4. Acceptable Use",
        content: [
          "Use the App for lawful, personal learning and revision.",
          "Do not use bots, scripts, emulators or other automated means to generate ad impressions or ad clicks.",
          "Do not decompile, reverse engineer, scrape or redistribute the App, its database or its diagrams.",
        ],
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property",
        content: [
          "The App's code, design, icon, diagrams, explanations and data compilation belong to the Developer, except for open-source components and the Roboto font (Apache License 2.0) used in PDF export.",
          "Scientific formulas, laws and facts themselves are not owned by anyone; the App's selection, arrangement, explanations and illustrations are protected.",
          "You receive a limited, personal, revocable, non-exclusive, non-transferable licence to use the App for non-commercial study.",
        ],
      },
      {
        id: "advertisements",
        title: "6. Advertisements",
        content: [
          "TriScienceFusion is free because it shows ads from Google AdMob: a banner at the bottom of the home and content screens, and an occasional full-screen ad when opening chapters (at most every third chapter, and never more than once every 90 seconds).",
          "Every ad request is marked for Google's teen treatment and ad content is limited to a teen-appropriate rating (T).",
          "Where required by law, a Google consent form is shown before any ad is requested. You can change your choices in Settings > About & Legal > Privacy & ad choices, and manage ad settings in Android Settings > Google > Ads or at https://adssettings.google.com.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "The App is provided 'as is' and 'as available' without warranties of any kind, to the extent permitted by law.",
          "We do not guarantee particular examination results, or that the App will be error-free or compatible with every device.",
          "Nothing in these Terms limits statutory consumer rights that cannot be excluded under applicable law, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, the Developer is not liable for indirect, incidental, special or consequential damages arising from use of the App.",
          "Your bookmarks, quiz scores and settings are stored only on your device; we are not responsible for data lost through clearing data, resetting your device or uninstalling the App.",
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
          "App: TriScienceFusion – NCERT Physics, Chemistry & Biology",
          "Package name: com.pwk.TriScienceFusion",
          "Distribution platform: Google Play",
          "Price: free. No in-app purchases, subscriptions or other payments.",
          "Contact email: officialworldwithtechnology@gmail.com",
          "Support email: officialworldwithtechnology@gmail.com",
          "Website: https://pythonwithkaran.vercel.app/trisciencefusion",
          "Privacy Policy: https://pythonwithkaran.vercel.app/trisciencefusion/privacy",
          "Data deletion: https://pythonwithkaran.vercel.app/trisciencefusion/delete-account",
          "Country of establishment and governing jurisdiction: India",
          "The trader's verified postal address and phone number are shown on the App's Google Play store listing, as provided to Google Play.",
          "The Developer self-certifies that it offers only products that comply with applicable EU law, Indian law and Google Play Developer Program Policies.",
          "Complaints and support: for questions, content corrections, bug reports or legal notices, email officialworldwithtechnology@gmail.com. We aim to reply within 72 hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "TriScienceFusion has no accounts. All study data is stored on your device. To delete it: remove bookmarks and folders in the Bookmarks tab and clear history in the Recents tab, or go to Android Settings > Apps > TriScienceFusion > Storage > Clear storage, or uninstall the App.",
    deletedDataTypes: [
      "Bookmarks, bookmark folders and recently viewed items",
      "Quiz scores and flashcard progress",
      "Settings (theme, text size, language) and daily reminder preferences",
    ],
    retainedDataTypes: [],
    retentionReason: "TriScienceFusion stores no data on any server, so nothing is retained after deletion.",
    processingTime: "Instant (on-device action)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
