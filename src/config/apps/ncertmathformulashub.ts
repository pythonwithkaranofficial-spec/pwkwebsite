import { AppConfig } from "@/types/app-config";

export const ncertMathFormulasHubConfig: AppConfig = {
  metadata: {
    id: "ncertmathformulashub",
    name: "NCERT Math Formulas Hub",
    packageName: "com.pwk.ncert_math_formulas",
    category: "Education",
    description:
      "NCERT Math Formulas Hub is a free, offline mathematics reference for Class 9, 10, 11 and 12 students. It contains 579 chapter-wise formulas, identities and theorems from the current NCERT textbooks, with Class 9 arranged to the CBSE 2026–27 syllabus. Each formula has a written explanation (overview, symbols, how to use it, conditions and common mistakes), and most have a 'Try with Real Values' step-by-step solver. It also includes flashcards, quick quizzes, a 60-second Blitz, bookmarks with folders, search, a Formula Wall, printable PDF cheat sheets, an optional daily 'Formula of the Day' reminder, study streaks and badges. Formulas that are not part of the current NCERT syllabus are kept for reference and labelled 'Not In Syllabus'. It needs no login, has no in-app purchases and no servers of its own; all study data stays on the device. The App is supported by Google AdMob ads.",
    version: "1.0.0",
    effectiveDate: "August 23, 2026",
    lastUpdated: "November 15, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "NCERT Math Formulas Hub",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pythonwithkaran.vercel.app/ncertmathformulashub",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to NCERT Math Formulas Hub ('we', 'our', or 'the App', package name com.pwk.ncert_math_formulas). We respect your privacy. This Privacy Policy explains what information the App processes, how our advertising partner Google AdMob may interact with your device, and the rights and choices you have under applicable privacy laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA / CPRA), the Children's Online Privacy Protection Act (COPPA) and India's Digital Personal Data Protection Act, 2023 (DPDP Act). By installing and using NCERT Math Formulas Hub you agree to the practices described here.",
    dataCollection: [
      {
        category: "Information We DO NOT Collect",
        items: [
          "No accounts or logins: the App has no sign-up, username or password, and no servers of our own.",
          "No personal identifiers: we do not collect your name, email address, phone number, contacts or photos.",
          "No location permission: the App does not request GPS or network location permissions.",
          "No camera, microphone, contacts, phone-state or storage access.",
          "No payments: the App has no in-app purchases and never handles payment information.",
          "No analytics or crash-reporting SDKs: we do not track how you use the App.",
        ],
        purpose:
          "NCERT Math Formulas Hub is designed to work offline. All formulas, explanations, solvers, quizzes and fonts are bundled inside the App.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Your Study Data (Stored Only on Your Device)",
        items: [
          "Bookmarked formulas and the bookmark folders you assign (for example 'Must Revise').",
          "Recently viewed formulas (the last 20) and the chapter you last opened.",
          "Study progress: which formulas you have viewed, daily streak and best streak, unlocked badges, quiz results (score, chapter, class and date) and 60-second Blitz high scores.",
          "Settings: dark or light theme, font size, Exam Mode, and whether the daily 'Formula of the Day' reminder is on.",
        ],
        purpose:
          "We never upload, collect or see your study data. It is stored in the App's private on-device storage and is used only to show your bookmarks, progress and preferences. It stays there until you clear it (see 'Your Rights'), clear the App's storage or uninstall the App. If Android backup is enabled on your device, this data may be included in your own Google account backup, which is controlled by you and Google.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Notifications, Sharing and Other Features",
        items: [
          "Daily 'Formula of the Day' reminder: a local notification scheduled on your device for 8:00 AM. It is created by the App itself; no data is sent to any server. You can turn it off in the App's Settings ('Daily Formula of the Day') or block notifications for the App in Android Settings.",
          "Share and print: when you share a formula, share the App, or share or print a PDF cheat sheet, the content is created on your device and passed to the app or printer you choose through Android's share sheet or print service. We do not receive a copy.",
          "Copy LaTeX: copies the formula's LaTeX text to your device clipboard.",
          "Rate Us: opens the App's page in the Google Play Store.",
          "Internet is used by the App only to load ads. Formulas, explanations, solvers, quizzes and cheat sheets work offline.",
        ],
        purpose: "Apart from Google's advertising services, the App does not talk to any server.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Advertising Data Processed by Google AdMob",
        items: [
          "Device advertising identifier (Android Advertising ID / AD_ID), used for ad delivery, frequency capping, measurement and, depending on your device settings, personalised ads.",
          "Approximate location derived from your IP address (country or city level), used to select appropriate ads.",
          "Ad interaction and diagnostic data, such as ad impressions, clicks and ad load performance, used for measurement, fraud prevention and analytics.",
          "Basic device information, such as device model and Android version, needed to display ads correctly.",
        ],
        purpose:
          "NCERT Math Formulas Hub is free and supported by ads from Google AdMob. A banner ad may appear at the bottom of the chapter list and formula detail screens. A full-screen (interstitial) ad may appear occasionally when you open a chapter (at most about once every three chapters opened, after the page has opened). An App Open ad may appear when the App starts, but not when you open the App from a 'Formula of the Day' notification. Your study data (bookmarks, progress, quiz results and settings) is never shared with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android Permissions",
        items: [
          "android.permission.INTERNET: to load ads.",
          "android.permission.ACCESS_NETWORK_STATE: to check for an internet connection before requesting ads.",
          "com.google.android.gms.permission.AD_ID: added by the Google Mobile Ads SDK for ad delivery and measurement.",
          "android.permission.POST_NOTIFICATIONS (Android 13 and later): to show the daily 'Formula of the Day' reminder. Android asks for your permission, and you can decline.",
          "android.permission.RECEIVE_BOOT_COMPLETED: to keep the daily reminder scheduled after your phone restarts.",
          "android.permission.VIBRATE: lets the reminder notification vibrate according to your device's notification settings.",
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
          "Serves banner, interstitial and App Open ads. Processes the advertising ID, IP-based approximate location, basic device information and ad interaction data as described above.",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "How Google uses information from apps that use its services",
        provider: "Google LLC",
        purpose: "Explains how Google uses data when you use apps that include Google's advertising services.",
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
      "Show NCERT mathematics formulas, explanations, step-by-step solvers, flashcards and quizzes offline.",
      "Remember your bookmarks, bookmark folders, recently viewed formulas and last opened chapter.",
      "Track your streak, badges, quiz results and Blitz high scores on your device.",
      "Remember your theme, font size, Exam Mode and reminder settings.",
      "Schedule the optional daily 'Formula of the Day' reminder on your device.",
      "Create PDF cheat sheets and share or print content only when you ask.",
      "Show ads through Google AdMob so the App can stay free, and allow Google's ad frequency capping, measurement and fraud prevention.",
    ],
    dataRetentionPolicy:
      "Your study data and settings remain on your device until you clear them, clear the App's storage, or uninstall the App. We run no servers and keep no copy of your data. If Android backup is enabled, a copy may exist in your own Google account backup under Google's control. Advertising data processed by Google is retained according to Google's policies (https://policies.google.com/privacy).",
    securityPractices: [
      "No accounts: no passwords or credentials are created, stored or transmitted.",
      "Private app storage: your study data is kept in Android's private, per-app storage that other apps cannot read.",
      "Encrypted connections: ad traffic uses HTTPS (TLS).",
      "Offline by design: formulas, explanations, solvers and fonts are bundled in the App, so nothing about your studying is sent over the network.",
      "Minimal permissions: no sensitive permissions are requested.",
    ],
    childrensPrivacy:
      "NCERT Math Formulas Hub is a study aid for Class 9–12 students and is intended for users aged 13 and older. It is not directed at children under 13. We do not knowingly collect personal information from children under 13 (or under 16 where local law requires); the App has no accounts and collects no personal information itself. Ads are provided by Google AdMob under Google's policies. If a parent or guardian believes a child has provided personal information, please contact officialworldwithtechnology@gmail.com.",
    userRights: [
      "Delete your data: in the App, Settings > Clear Recent History removes recently viewed formulas; to delete everything, go to Android Settings > Apps > NCERT Math Formulas Hub > Storage > Clear storage, or uninstall the App.",
      "Remove a bookmark: tap the bookmark icon on the formula again.",
      "Turn off the daily reminder: switch off 'Daily Formula of the Day' in the App's Settings, or block the App's notifications in Android Settings.",
      "Opt out of personalised ads (GDPR / UK GDPR, CCPA / CPRA and everyone): reset or delete your advertising ID or turn off ads personalisation in Android Settings > Google > Ads (on some devices: Settings > Security & privacy > Privacy > Ads), or manage ad settings at https://adssettings.google.com.",
      "DPDP Act (India): you may contact us for grievance redressal at officialworldwithtechnology@gmail.com.",
      "Non-discrimination: deleting data or opting out of personalised ads never limits the App's features.",
    ],
    internationalTransfers:
      "We do not operate servers and do not transfer your data. Ad requests are processed by Google on its global infrastructure in line with Google's Privacy Policy and applicable transfer safeguards.",
    changesToPolicy:
      "We may update this Privacy Policy when the App or legal requirements change. The 'Last Updated' date above will show the latest version. Continued use of the App after an update means you accept the updated policy.",
  },
  terms: {
    introduction:
      "These Terms of Service ('Terms') are an agreement between you and Karan Saini ('Developer', 'we', 'us') for the NCERT Math Formulas Hub mobile application (package name: com.pwk.ncert_math_formulas). NCERT Math Formulas Hub is a free, ad-supported mathematics reference and practice app for Class 9–12 students.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By installing or using NCERT Math Formulas Hub you agree to these Terms and our Privacy Policy. If you do not agree, please uninstall the App.",
          "The App is intended for users aged 13 and older. Users under 18 should review these Terms with a parent or guardian.",
          "Google Play Trader status (EU Digital Services Act): the Developer offers this App on Google Play as a trader to users worldwide, including the EEA and the UK.",
          "Right of withdrawal: the App is free with no in-app purchases. You can end this agreement at any time by uninstalling the App.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App",
        content: [
          "Formulas: 579 chapter-wise formulas, identities and theorems for Classes 9, 10, 11 and 12, taken from the current NCERT mathematics textbooks. Class 9 follows the chapter structure of the CBSE 2026–27 Class IX syllabus.",
          "Explanations: each formula has an overview, its symbols, how to use it in questions, its conditions, common mistakes and units, plus a symbol pronunciation guide.",
          "Try with Real Values: a step-by-step solver for most formulas, which evaluates the formula or checks an identity with numbers you enter. Formulas that are pure definitions or statements have no solver.",
          "Practice: flashcards, quick quizzes and a 60-second Blitz for each chapter, with a Formula Wall to browse formulas by topic.",
          "Study tools: bookmarks with folders, recently viewed formulas, search, 'Continue where you left off', study streaks, badges, Exam Mode and an optional daily 'Formula of the Day' reminder.",
          "Cheat sheets: printable PDF cheat sheets for each chapter, which you can print or share.",
          "Syllabus labels: formulas that are not part of the current NCERT syllabus for a class are kept for reference and labelled 'Not In Syllabus'.",
          "The App works offline except for ads, and it is offered free of charge on Google Play in English.",
        ],
      },
      {
        id: "independence",
        title: "3. Independence and Accuracy",
        content: [
          "NCERT Math Formulas Hub is an independent app. It is not affiliated with, endorsed by, or sponsored by NCERT (National Council of Educational Research and Training), CBSE or the Government of India. 'NCERT' and 'CBSE' are used only to describe the syllabus covered.",
          "Formulas and explanations have been checked carefully against the NCERT textbooks, but mistakes are possible. Always follow your textbook, your teacher and your board's current syllabus for exams.",
          "'Not In Syllabus' labels and the Class 9 chapter structure reflect our reading of the current NCERT textbooks and CBSE curriculum at the 'Last Updated' date. Syllabi can change; check your school's current syllabus.",
          "Solver results are calculated with decimal arithmetic and may be rounded. They are a learning aid, not a substitute for working out answers yourself.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "4. Acceptable Use",
        content: [
          "Use the App for lawful personal study and revision.",
          "Do not use bots, scripts or other automated means to generate ad impressions or ad clicks.",
          "Do not decompile, reverse engineer or redistribute the App, or copy its formula collection, explanations or solvers for commercial use.",
        ],
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property and Open Source",
        content: [
          "The App's code, design, icon, explanations, solvers and arrangement of content belong to the Developer, except for open-source components and fonts.",
          "Mathematical formulas and results themselves are common knowledge; curriculum and chapter names are used only to describe the syllabus.",
          "The App uses open-source software, including Flutter, and the fonts Poppins, Inter and Noto Sans Math under the SIL Open Font License.",
          "You receive a limited, personal, revocable, non-exclusive, non-transferable licence to use the App.",
        ],
      },
      {
        id: "advertisements",
        title: "6. Advertisements",
        content: [
          "The App is free because it shows ads from Google AdMob: a banner at the bottom of the chapter list and formula detail screens, an occasional full-screen ad when opening chapters (at most about once every three chapters), and an App Open ad when the App starts.",
          "Your study data is never shared with advertisers.",
          "You can manage personalised ads in Android Settings > Google > Ads or at https://adssettings.google.com.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "The App is provided 'as is' and 'as available' without warranties of any kind, to the extent permitted by law.",
          "We do not guarantee that the App is free of errors, that it covers every formula your exam may require, or that it is compatible with every device.",
          "Using the App does not guarantee any exam result.",
          "Nothing in these Terms limits statutory consumer rights that cannot be excluded under applicable law, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, the Developer is not liable for indirect, incidental, special or consequential damages arising from use of the App.",
          "Your study data is stored only on your device. We are not responsible for bookmarks or progress lost through clearing data, resetting your device or uninstalling the App.",
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
          "App: NCERT Math Formulas Hub",
          "Package name: com.pwk.ncert_math_formulas",
          "Distribution platform: Google Play",
          "Price: free. No in-app purchases, subscriptions or other payments.",
          "Contact email: officialworldwithtechnology@gmail.com",
          "Support email: officialworldwithtechnology@gmail.com",
          "Website: https://pythonwithkaran.vercel.app/ncertmathformulashub",
          "Privacy Policy: https://pythonwithkaran.vercel.app/ncertmathformulashub/privacy",
          "Data deletion: https://pythonwithkaran.vercel.app/ncertmathformulashub/delete-account",
          "Country of establishment and governing jurisdiction: India",
          "The trader's verified postal address and phone number are shown on the App's Google Play store listing, as provided to Google Play.",
          "The Developer self-certifies that it offers only products that comply with applicable EU law, Indian law and Google Play Developer Program Policies.",
          "Complaints and support: for questions, formula corrections, bug reports or legal notices, email officialworldwithtechnology@gmail.com. We aim to reply within 72 hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "NCERT Math Formulas Hub has no accounts. All study data is stored on your device. To delete it: open the App > Settings > Clear Recent History to remove recently viewed formulas, or go to Android Settings > Apps > NCERT Math Formulas Hub > Storage > Clear storage to delete everything, or uninstall the App.",
    deletedDataTypes: [
      "Bookmarked formulas and bookmark folders",
      "Recently viewed formulas and the last opened chapter",
      "Study progress: viewed formulas, streaks, badges, quiz results and Blitz high scores",
      "Settings (theme, font size, Exam Mode, daily reminder) and the scheduled reminder",
    ],
    retainedDataTypes: [],
    retentionReason:
      "NCERT Math Formulas Hub stores no data on any server, so nothing is retained after deletion. Advertising data processed by Google is handled under Google's policies.",
    processingTime: "Instant (on-device action)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
