import { AppConfig } from "@/types/app-config";

export const rozgaarReadyConfig: AppConfig = {
  metadata: {
    id: "rozgaarready",
    name: "Rozgaar Ready – Interview Prep",
    packageName: "com.pwk.rozgaarready",
    category: "Education",
    description:
      "Rozgaar Ready is a free voice-based job-interview practice app for job seekers in India, in Hindi, Hinglish and English. Users hear real interview questions for roles such as Driver, Security Guard and BPO / Call Centre, answer by speaking (or typing), and see which important points they covered and missed, with a model answer personalised with their own name, city and experience. It includes a Mock Interview mode, a Real Interview mode with a time limit and follow-up questions, Bolna Seekho (listen, record yourself and compare), feedback on speaking pace and filler words, a PDF CV maker, an interview-day checklist with document guides, interview reminders and progress tracking. It needs no login and has no servers of its own; practice data, CVs and recordings stay on the device. The App is supported by Google AdMob ads.",
    version: "1.0.0",
    effectiveDate: "November 22, 2026",
    lastUpdated: "November 22, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Rozgaar Ready",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pythonwithkaran.vercel.app/rozgaarready",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to Rozgaar Ready ('we', 'our', or 'the App'). We respect your privacy. This Privacy Policy explains what information the App processes, what stays on your phone, how your phone's speech services and our advertising partner Google AdMob may process data, and the rights you have under applicable privacy laws, including India's Digital Personal Data Protection Act, 2023 (DPDP Act). By installing and using Rozgaar Ready you agree to the practices described here.",
    dataCollection: [
      {
        category: "Information We DO NOT Collect",
        items: [
          "No accounts or logins: Rozgaar Ready has no sign-up, username or password, and no servers of its own.",
          "We do not receive your name, phone number, email, CV, answers, scores or voice recordings. Anything you enter stays on your phone.",
          "No location permission: the App does not request GPS or network location permissions.",
          "No camera, contacts, photos, storage or phone-state access.",
          "No payments: version 1.0 has no in-app purchases and never handles payment information.",
        ],
        purpose:
          "Rozgaar Ready is designed to work offline for practice, the CV maker and the checklist. The interview questions, model answers and scoring run inside the App.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Information Stored Only on Your Device",
        items: [
          "Your profile, if you enter it: name, city, years of experience, fresher or experienced, driving licence type, gender form for answers ('karta / karti') and app language. Used only to personalise model answers on your phone.",
          "Practice history: answers you check, scores, missed points, daily practice counts, streak and Interview Ready progress.",
          "CV details you type in the CV maker, and the CV PDF you create (saved in the App's private storage until you share or delete it).",
          "Interview checklist ticks and the interview date you set for reminders.",
          "Bolna Seekho voice recordings: kept in the App's temporary folder only while you practise and deleted when you leave that practice session.",
        ],
        purpose:
          "We never upload, collect or see this information. It stays in the App's private storage until you clear the App's storage or uninstall the App. When you share a CV PDF or Interview Ready badge, it goes only to the app or person you choose in Android's share sheet.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Microphone and Speech Recognition",
        items: [
          "The microphone is used only while you tap the mic button (to turn your spoken answer into text) or the record button in Bolna Seekho.",
          "Speech-to-text uses your phone's own speech recognition service. The App first asks for on-device recognition. If your phone has no offline language pack for Hindi or English, your phone's speech service (usually Google) may process the audio online under its own privacy policy.",
          "Questions and model answers are read aloud by your phone's text-to-speech engine.",
          "Rozgaar Ready itself never uploads or stores your voice outside the temporary Bolna Seekho recordings described above.",
        ],
        purpose: "To let you practise answering interview questions by speaking, as you would in a real interview.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Notifications",
        items: [
          "If you set an interview date, the App schedules two reminder notifications on your phone: the evening before and two hours before the interview.",
          "Reminders are created on your device only and are cancelled if you remove the date. No notification data is sent anywhere.",
        ],
        purpose: "To remind you to prepare your documents and do a quick practice before the interview.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Advertising Data Processed by Google AdMob",
        items: [
          "Device advertising identifier (Android Advertising ID / AD_ID), used for ad delivery, frequency capping and measurement.",
          "Approximate location derived from your IP address (country or city level), used to select appropriate ads.",
          "Ad interaction and diagnostic data, such as ad impressions, clicks and ad load performance, used for measurement, fraud prevention and analytics.",
        ],
        purpose:
          "Rozgaar Ready is free and supported by ads from Google AdMob. Banner ads appear at the bottom of the Home and Progress screens only, never during practice, recording or the CV form. An interstitial (full-screen) ad may appear only when you leave a session summary: never after your first session, and at most once every 3 minutes. Ads are limited to content rated suitable for general audiences (maximum content rating G). Your answers, CV, recordings and profile are never shared with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android Permissions",
        items: [
          "android.permission.RECORD_AUDIO: for spoken answers and Bolna Seekho recordings, only while you tap the mic or record button. The App explains this before Android asks.",
          "android.permission.INTERNET and ACCESS_NETWORK_STATE: to load ads and, if your phone needs it, online speech recognition.",
          "android.permission.POST_NOTIFICATIONS and RECEIVE_BOOT_COMPLETED: for interview reminders you set, and to keep them after the phone restarts.",
          "com.google.android.gms.permission.AD_ID: added by the Google Mobile Ads SDK for ad delivery and measurement.",
        ],
        purpose:
          "No location, camera, contacts, storage, exact-alarm or all-files permissions are requested.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK)",
        provider: "Google LLC",
        purpose:
          "Serves banner and interstitial ads. Processes the advertising ID, IP-based approximate location and ad interaction data as described above.",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Your phone's speech recognition and text-to-speech services",
        provider: "Your device manufacturer or Google (for example Google Speech Services)",
        purpose:
          "Convert your spoken answer to text and read questions aloud. On-device recognition is used where available; otherwise the phone's service may process audio online under its own policy.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Privacy Policy",
        provider: "Google LLC",
        purpose: "Governs how Google processes data collected through its advertising and speech services.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataUsePurposes: [
      "Let you practise interview questions by voice or text and see which points you covered.",
      "Personalise model answers with the name, city, experience and licence type you enter.",
      "Show your progress, streak, weak points and Interview Ready badge.",
      "Create a CV PDF on your phone and let you share it where you choose.",
      "Remind you about an interview date you set.",
      "Show ads through Google AdMob so the App can stay free, with frequency capping, measurement and fraud prevention by Google.",
    ],
    dataRetentionPolicy:
      "Your profile, practice history, CV, checklist and reminder date remain on your device until you clear the App's storage or uninstall the App. Bolna Seekho recordings are deleted when you leave the practice session. We run no servers and keep no copy of your data. Advertising data processed by Google is retained according to Google's policies (https://policies.google.com/privacy).",
    securityPractices: [
      "No accounts: no passwords or credentials are created, stored or transmitted.",
      "Private app storage: your data is kept in Android's private, per-app storage that other apps cannot read.",
      "App backup is disabled, so your practice data and CV are not copied into cloud backups by the App.",
      "Encrypted connections: ad traffic uses HTTPS (TLS).",
      "Minimal permissions: the microphone is used only when you tap the mic or record button.",
    ],
    childrensPrivacy:
      "Rozgaar Ready is meant for adults preparing for jobs. In Google Play Console the target audience is 18+, and the App is not directed at children. We do not knowingly collect personal information from anyone; the App has no accounts and keeps what you enter on your phone. Ads are limited to content rated suitable for general audiences. If a parent or guardian has a concern, please contact officialworldwithtechnology@gmail.com.",
    userRights: [
      "Delete your data: go to Android Settings > Apps > Rozgaar Ready > Storage > Clear storage, or uninstall the App. You can also reset the checklist, remove the interview date and edit your profile inside the App.",
      "Control the microphone: deny or revoke the microphone permission at any time in Android Settings. You can still type your answers.",
      "Control notifications: turn off Rozgaar Ready notifications in Android Settings, or remove the interview date in the App.",
      "Personalised ads: reset or delete your advertising ID in Android Settings > Google > Ads, or manage ad settings at https://adssettings.google.com.",
      "DPDP Act (India): you may contact us for grievance redressal at officialworldwithtechnology@gmail.com.",
      "Non-discrimination: deleting data or denying permissions never limits the App's core practice features.",
    ],
    internationalTransfers:
      "We do not operate servers and do not transfer your data. Ad requests, and online speech recognition when your phone uses it, are processed by Google on its global infrastructure in line with Google's Privacy Policy and applicable transfer safeguards.",
    changesToPolicy:
      "We may update this Privacy Policy when the App or legal requirements change, for example if a paid unlock through Google Play Billing is added. The 'Last Updated' date above will show the latest version. Continued use of the App after an update means you accept the updated policy.",
  },
  terms: {
    introduction:
      "These Terms of Service ('Terms') are an agreement between you and Karan Saini ('Developer', 'we', 'us') for the Rozgaar Ready mobile application (package name: com.pwk.rozgaarready). Rozgaar Ready is a free, ad-supported job-interview practice app.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By installing or using Rozgaar Ready you agree to these Terms and our Privacy Policy. If you do not agree, please uninstall the App.",
          "Rozgaar Ready is intended for users aged 18 and older.",
          "Google Play Trader status (EU Digital Services Act): the Developer offers this App on Google Play as a trader. Version 1.0 is distributed in India.",
          "Right of withdrawal: Rozgaar Ready is free with no in-app purchases. You can end this agreement at any time by uninstalling the App.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App",
        content: [
          "Mock Interview: hear a question, answer by voice or text, and see the points you covered and missed, your score, speaking feedback and a model answer.",
          "Real Interview: a set of questions with a time limit per answer, one follow-up question on a weak answer, and feedback at the end.",
          "Bolna Seekho: listen to a model answer, record your own voice and compare.",
          "Model answers in Hindi, Hinglish and English, in the right form for men and women, with separate answers for freshers.",
          "CV maker (PDF), interview-day checklist with document guides, interview reminders, progress tracking and an Interview Ready badge you can share.",
          "Practice, the CV maker and the checklist work offline; ads and, on some phones, speech recognition need internet.",
        ],
      },
      {
        id: "independence",
        title: "3. Independence and Accuracy",
        content: [
          "Rozgaar Ready is an independent app. It is not affiliated with any employer, recruitment agency or government body, and it does not offer or guarantee jobs.",
          "Model answers and tips are practice guidance. Always answer truthfully in a real interview and adapt answers to your own experience.",
          "Scores are based on the important points detected in your answer; they are a practice aid, not a prediction of interview results.",
          "Document guides are general information. Rules can differ by state, bank or employer; confirm with the official website or office.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "4. Acceptable Use",
        content: [
          "Use the App for lawful, personal interview practice.",
          "You are responsible for the accuracy of the details you put in your CV.",
          "Do not use bots, scripts or other automated means to generate ad impressions or ad clicks.",
          "Do not decompile, reverse engineer or redistribute the App or its question content.",
        ],
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property",
        content: [
          "The App's code, design, icon, questions, model answers and guides belong to the Developer, except for open-source components (such as the Flutter framework and the Poppins and Plus Jakarta Sans fonts under the SIL Open Font License).",
          "Your CV, answers and recordings are yours.",
          "You receive a limited, personal, revocable, non-exclusive, non-transferable licence to use the App.",
        ],
      },
      {
        id: "advertisements",
        title: "6. Advertisements",
        content: [
          "Rozgaar Ready is free because it shows ads from Google AdMob: banner ads at the bottom of the Home and Progress screens only.",
          "An interstitial ad may appear only when you leave a session summary, never after your first session and at most once every 3 minutes. No ads appear during practice, recording or the CV form.",
          "You can manage personalised ads in Android Settings > Google > Ads or at https://adssettings.google.com.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "The App is provided 'as is' and 'as available' without warranties of any kind, to the extent permitted by law.",
          "Speech recognition quality depends on your phone, its language packs and your surroundings. We do not guarantee that every spoken answer will be recognised correctly; you can always edit or type your answer.",
          "Nothing in these Terms limits statutory consumer rights that cannot be excluded under applicable law.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, the Developer is not liable for indirect, incidental, special or consequential damages arising from use of the App, including the outcome of any job interview.",
          "Your data is stored only on your device. We are not responsible for data lost through clearing data, resetting your device or uninstalling the App.",
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
          "App: Rozgaar Ready – Interview Prep",
          "Package name: com.pwk.rozgaarready",
          "Distribution platform: Google Play",
          "Price: free. No in-app purchases, subscriptions or other payments in version 1.0.",
          "Contact email: officialworldwithtechnology@gmail.com",
          "Support email: officialworldwithtechnology@gmail.com",
          "Website: https://pythonwithkaran.vercel.app/rozgaarready",
          "Privacy Policy: https://pythonwithkaran.vercel.app/rozgaarready/privacy",
          "Data deletion: https://pythonwithkaran.vercel.app/rozgaarready/delete-account",
          "Country of establishment and governing jurisdiction: India",
          "The trader's verified postal address and phone number are shown on the App's Google Play store listing, as provided to Google Play.",
          "The Developer self-certifies that it offers only products that comply with applicable Indian law, EU law and Google Play Developer Program Policies.",
          "Complaints and support: for questions, bug reports or legal notices, email officialworldwithtechnology@gmail.com. We aim to reply within 72 hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "Rozgaar Ready has no accounts. All data is stored on your device. To delete it: go to Android Settings > Apps > Rozgaar Ready > Storage > Clear storage, or uninstall the App. Inside the App you can also edit your profile in Settings, reset the interview checklist and remove the interview date.",
    deletedDataTypes: [
      "Profile (name, city, experience, fresher status, licence type, language, answer form)",
      "Practice history, scores, streak and weak points",
      "CV details and created CV PDFs",
      "Checklist ticks and interview reminder date",
      "Any Bolna Seekho recording still in the temporary folder",
    ],
    retainedDataTypes: [],
    retentionReason: "Rozgaar Ready stores no data on any server, so nothing is retained after deletion.",
    processingTime: "Instant (on-device action)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
