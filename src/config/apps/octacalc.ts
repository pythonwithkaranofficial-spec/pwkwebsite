import { AppConfig } from "@/types/app-config";

export const octaCalcConfig: AppConfig = {
  metadata: {
    id: "octacalc",
    name: "OctaCalc",
    packageName: "com.octacalc.octacalc",
    category: "Tools",
    description:
      "OctaCalc is a free, offline, all-in-one calculator and converter app with 47 tools in 8 groups: everyday and scientific calculators (GST, discount, EMI, percentage, profit and loss, age and date); unit converters (length, weight, area, temperature, speed, time, data storage, cooking measurements, number systems); business tools (GST inclusive/exclusive, margin, markup, business profit, advanced discount, quotation and invoice PDF); electricity tools (consumption, appliance running cost, monthly bill, solar savings, inverter backup); student tools (CGPA, percentage and marks, attendance, study timer, marks and grade); date and time tools (date difference, working days, countdown, add/subtract dates, time duration); cooking tools (volume, ingredient conversion, recipe portions, oven temperature, kitchen weight); and storage tools (drive capacity, media capacity, transfer time, RAID capacity). It keeps calculation history and favourites, creates PDF quotations and invoices, and schedules local study-timer and countdown reminders. It needs no login, has no in-app purchases and no servers of its own; everything stays on the device. The App is supported by Google AdMob ads.",
    version: "1.0.0",
    effectiveDate: "November 12, 2026",
    lastUpdated: "November 12, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "OctaCalc",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pythonwithkaran.vercel.app/octacalc",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to OctaCalc ('we', 'our', or 'the App'). OctaCalc is built to work offline: it has no accounts, no login and no servers of its own, so we do not collect your calculations, files or personal details. This Privacy Policy explains what the App stores on your device, how our advertising partner Google AdMob may interact with your device, and the rights and choices you have under applicable privacy laws, including the GDPR, the CCPA / CPRA, COPPA and India's Digital Personal Data Protection Act, 2023 (DPDP Act).",
    dataCollection: [
      {
        category: "Information We DO NOT Collect",
        items: [
          "No accounts or logins: OctaCalc has no sign-up, username or password, and no servers of our own.",
          "No calculations, history or documents are sent to us; we never see them.",
          "No location, camera, microphone, contacts or phone-state permissions are requested.",
          "No payments: the App has no in-app purchases and never handles payment information.",
        ],
        purpose: "All calculators and converters run on your device and work without an internet connection.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Data Stored Only on Your Device",
        items: [
          "Calculation history and favourite tools.",
          "Settings such as theme.",
          "Study-timer progress and countdown events you create.",
          "Business details you type into quotations and invoices (for example business name, customer details, items and amounts).",
          "PDF quotations and invoices you generate, saved on your device.",
        ],
        purpose:
          "This data is kept in the App's private storage (shared preferences) so the App can remember your work. Generated PDFs leave your device only if you choose to share or print them. You can clear history in the App, clear the App's storage in Android Settings, or uninstall the App to remove everything.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Photos You Choose (Invoice Logo)",
        items: [
          "If you add a logo to a quotation or invoice, you pick one image with Android's photo picker. The App reads only that image, resized to at most 512 × 512 pixels, and uses it on your document.",
        ],
        purpose: "The logo is not uploaded anywhere. The App does not request access to your photo library.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Notifications",
        items: [
          "Study-timer and countdown reminders are scheduled locally on your device using Android's notification system.",
          "No push-notification service is used, and nothing is sent from a server.",
        ],
        purpose:
          "On Android 13 and later the App asks for notification permission only so these reminders can appear. You can turn notifications off at any time in Android Settings.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Advertising Data Processed by Google AdMob and UMP",
        items: [
          "Device advertising identifier (Android Advertising ID / AD_ID), used for ad delivery, frequency capping, measurement and, where you consent, personalised ads.",
          "Approximate location derived from your IP address (country or city level), used to select appropriate ads.",
          "Ad interaction and diagnostic data, such as ad impressions, clicks and ad load performance, used for measurement, fraud prevention and analytics.",
          "Consent choices made in the Google consent form (UMP), stored on your device.",
        ],
        purpose:
          "OctaCalc is free and supported by ads from Google AdMob. An adaptive banner ad appears on tab screens and calculator screens. An interstitial (full-screen) ad may appear only when you leave a calculator, after at least 6 completed calculations, at most once every 4 minutes, and never in the first 2 minutes after the App opens. There are no rewarded ads. Where required (for example in the EEA and UK) you are asked for consent through Google's consent form and can change your choice later in Settings. Ads are the only part of the App that uses the internet; the calculators work the same without a connection. Your calculations and documents are never shared with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android Permissions",
        items: [
          "android.permission.INTERNET: to load ads and the consent form.",
          "android.permission.POST_NOTIFICATIONS: to show study-timer and countdown reminders (Android 13+, asked at runtime).",
          "com.google.android.gms.permission.AD_ID and Android Privacy Sandbox ad-services permissions: added by the Google Mobile Ads SDK for ad delivery and measurement.",
        ],
        purpose:
          "No location, contacts, storage, camera or microphone permissions are requested. Invoice logos use the system photo picker, which needs no permission.",
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
        name: "Google User Messaging Platform (UMP SDK)",
        provider: "Google LLC",
        purpose:
          "Shows the consent form where required and stores your choices. You can change them any time in the App's Settings ('Ad privacy choices').",
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
      "Perform calculations and unit conversions on your device.",
      "Remember your calculation history, favourites and settings.",
      "Create, save, share and print PDF quotations and invoices that you choose to make.",
      "Schedule local study-timer and countdown reminders.",
      "Show ads through Google AdMob so the App can stay free, and collect advertising consent where required by law.",
    ],
    dataRetentionPolicy:
      "History, favourites, settings, timer and countdown data, invoice details and generated PDFs remain on your device until you clear them in the App, clear the App's storage, or uninstall the App. We run no servers and keep no copy of your data. Advertising data processed by Google is retained according to Google's policies (https://policies.google.com/privacy).",
    securityPractices: [
      "No accounts: no passwords or credentials are created, stored or transmitted.",
      "Private app storage: your data is kept in Android's private, per-app storage that other apps cannot read.",
      "No photo-library access: invoice logos come only from the image you pick in the system photo picker.",
      "Encrypted connections: ad traffic uses HTTPS (TLS).",
      "Minimal permissions: no sensitive permissions are requested.",
    ],
    childrensPrivacy:
      "OctaCalc is a general-audience utility for users aged 13 and older and is not directed at children under 13. We do not knowingly collect personal information from children; the App has no accounts and collects no personal information itself. If a parent or guardian believes a child has provided personal information, please contact officialworldwithtechnology@gmail.com.",
    userRights: [
      "Delete your data: clear history in the App, clear the App's storage in Android Settings, or uninstall the App.",
      "Change ad consent (GDPR / UK GDPR): where the consent form applies, use Settings > Ad privacy choices at any time.",
      "Opt out of personalised ads (CCPA / CPRA and everyone): reset or delete your advertising ID in Android Settings > Google > Ads, or manage ad settings at https://adssettings.google.com.",
      "Turn off reminders: disable OctaCalc notifications in Android Settings at any time.",
      "DPDP Act (India): you may contact us for grievance redressal at officialworldwithtechnology@gmail.com.",
    ],
    internationalTransfers:
      "We do not operate servers and do not transfer your data. Ad requests and consent checks are processed by Google on its global infrastructure in line with Google's Privacy Policy and applicable transfer safeguards.",
    changesToPolicy:
      "If this policy changes, the updated version will appear here and in the App with a new 'Last Updated' date. Continued use of the App after an update means you accept the updated policy.",
  },
  terms: {
    introduction:
      "These Terms of Service ('Terms') are an agreement between you and Karan Saini ('Developer', 'we', 'us') for the OctaCalc mobile application (package name: com.octacalc.octacalc). OctaCalc is a free, ad-supported collection of calculators and converters provided for convenience.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By installing or using OctaCalc you agree to these Terms and our Privacy Policy. If you do not agree, please uninstall the App.",
          "OctaCalc is intended for users aged 13 and older.",
          "Google Play Trader status (EU Digital Services Act): the Developer offers this App on Google Play as a trader to users worldwide, including the EEA and the UK.",
          "Right of withdrawal: OctaCalc is free with no in-app purchases. You can end this agreement at any time by uninstalling the App.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App",
        content: [
          "Smart calculators: basic and scientific calculator, GST, discount, EMI, percentage, profit and loss, and age and date calculators.",
          "Unit converters: length, weight and mass, area, temperature, speed, time, data storage, cooking measurements and number systems.",
          "Business tools: GST inclusive/exclusive, margin, markup, business profit, advanced discount, and quotation and invoice PDF creation with an optional logo.",
          "Electricity tools: electricity consumption, appliance running cost, monthly bill estimator, solar savings and inverter backup.",
          "Student tools: CGPA, percentage and marks, attendance, study timer, and marks and grade calculators.",
          "Date and time tools: date difference, working days, countdown, add/subtract dates and time duration.",
          "Cooking tools: volume, ingredient conversion, recipe portions, oven temperature and kitchen weight.",
          "Storage tools: drive capacity, media capacity planner, transfer time and RAID capacity.",
          "Other features: calculation history, favourites, light and dark themes, PDF save/share/print, and local reminders. The App works offline except for ads and is offered free of charge on Google Play in English.",
        ],
      },
      {
        id: "estimates-not-advice",
        title: "3. Estimates, Not Advice",
        content: [
          "Results are mathematical estimates based on the values you enter. They are not financial, tax, legal, accounting, engineering or medical advice. Check important figures yourself or with a qualified professional before relying on them.",
          "Taxes and invoices: GST rates are chosen by you; the App does not determine which rate applies. Quotation and invoice templates are for convenience and do not guarantee compliance with any tax law or invoicing rule. You are responsible for the content and accuracy of documents you create.",
          "Energy, solar and storage estimates use simplified formulas and typical assumptions. Real-world results vary.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "4. Acceptable Use",
        content: [
          "Use the App lawfully. Only add logos and business details you have the right to use.",
          "Do not use bots, scripts or other automated means to generate ad impressions or ad clicks.",
          "Do not decompile, reverse engineer or redistribute the App.",
        ],
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property",
        content: [
          "The App's code, design and icon belong to the Developer. Documents you create are yours.",
          "You receive a limited, personal, revocable, non-exclusive, non-transferable licence to use the App.",
        ],
      },
      {
        id: "advertisements",
        title: "6. Advertisements",
        content: [
          "OctaCalc is free because it shows ads from Google AdMob: an adaptive banner on tab and calculator screens.",
          "An interstitial ad may appear only when you leave a calculator after at least 6 completed calculations, at most once every 4 minutes, and never in the first 2 minutes after the App opens. There are no rewarded ads.",
          "Where required by law, a Google consent form is shown before ads are requested. You can change your choices in Settings > Ad privacy choices, and manage personalised ads in Android Settings > Google > Ads or at https://adssettings.google.com.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "The App is provided 'as is' and 'as available' without warranties of any kind, to the extent permitted by law.",
          "Nothing in these Terms limits statutory consumer rights that cannot be excluded under applicable law, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, the Developer is not liable for losses arising from use of the App or reliance on its results, including financial, tax or business decisions.",
          "Your history and documents are stored only on your device; we are not responsible for data lost through clearing data, resetting your device or uninstalling the App.",
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
          "App: OctaCalc",
          "Package name: com.octacalc.octacalc",
          "Distribution platform: Google Play",
          "Price: free. No in-app purchases, subscriptions or other payments.",
          "Contact email: officialworldwithtechnology@gmail.com",
          "Support email: officialworldwithtechnology@gmail.com",
          "Website: https://pythonwithkaran.vercel.app/octacalc",
          "Privacy Policy: https://pythonwithkaran.vercel.app/octacalc/privacy",
          "Data deletion: https://pythonwithkaran.vercel.app/octacalc/delete-account",
          "Country of establishment and governing jurisdiction: India",
          "The trader's verified postal address and phone number are shown on the App's Google Play store listing, as provided to Google Play.",
          "The Developer self-certifies that it offers only products that comply with applicable EU law, Indian law and Google Play Developer Program Policies.",
          "Complaints and support: for questions, bug reports, calculation issues, or legal notices, email officialworldwithtechnology@gmail.com. We aim to reply within 72 hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "OctaCalc has no accounts. All data is stored on your device. To delete it: open OctaCalc > History > Clear all, or go to Android Settings > Apps > OctaCalc > Storage > Clear storage, or uninstall the App. PDFs you saved or shared outside the App are managed by you.",
    deletedDataTypes: [
      "Calculation history and favourites",
      "Settings (such as theme)",
      "Study-timer progress and countdown events",
      "Invoice and quotation details stored in the App",
    ],
    retainedDataTypes: [],
    retentionReason: "OctaCalc stores no data on any server, so nothing is retained after deletion.",
    processingTime: "Instant (on-device action)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
