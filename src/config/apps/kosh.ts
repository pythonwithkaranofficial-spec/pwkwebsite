import { AppConfig } from "@/types/app-config";

export const koshConfig: AppConfig = {
  metadata: {
    id: "kosh",
    name: "Kosh: EMI, SIP & FD Calculator",
    packageName: "com.koshcalc.app",
    category: "Finance",
    description:
      "Kosh is a free, offline set of 20 money calculators: EMI, home loan with prepayments, loan comparison, flat vs reducing rate and loan affordability; SIP, step-up SIP, lumpsum, SWP and goal planner; FD, RD and PPF; salary in-hand (CTC to take-home) and income tax (old vs new regime, FY 2026-27); gold jewellery price and GST; simple and compound interest, CAGR and inflation. Results update live with charts and year-by-year tables, and calculations can be saved, shared or copied. Kosh does the maths only: it is not investment, tax, legal or loan advice and it does not offer loans or any financial product. It needs no login, has no in-app purchases and no servers of its own; everything stays on the device. The App is supported by Google AdMob ads.",
    version: "1.0.0",
    effectiveDate: "November 22, 2026",
    lastUpdated: "November 22, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Kosh",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pythonwithkaran.vercel.app/kosh",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to Kosh ('we', 'our', or 'the App'). Kosh is a set of financial calculators built to work offline: it has no accounts, no login and no servers of its own, so we never receive the amounts, rates, salaries or other figures you enter. This Privacy Policy explains what the App stores on your device, how our advertising partner Google AdMob may interact with your device, and the rights and choices you have under applicable privacy laws, including the GDPR, the CCPA / CPRA, COPPA and India's Digital Personal Data Protection Act, 2023 (DPDP Act).",
    dataCollection: [
      {
        category: "Information We DO NOT Collect",
        items: [
          "No accounts or logins: Kosh has no sign-up, username or password, and no servers of our own.",
          "No financial figures: loan amounts, salaries, income, deductions, investments and results are never sent to us; we never see them.",
          "No bank, card, PAN, Aadhaar or other identity or account details are ever requested.",
          "No location, camera, microphone, contacts, SMS, call-log, storage or phone-state permissions are requested.",
          "No payments: the App has no in-app purchases and never handles payment information.",
        ],
        purpose: "Every calculation runs on your device and works without an internet connection.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Data Stored Only on Your Device",
        items: [
          "The inputs you last used in each calculator, so they are there when you return.",
          "Calculations you choose to save, with an optional note you type.",
          "Favourite and recently used calculators.",
          "Settings such as theme, number format (Indian or international) and haptic feedback.",
        ],
        purpose:
          "This data is kept in the App's private storage so the App can remember your work. It is not backed up by the App to any server. Results leave your device only if you choose to share or copy them. You can delete everything in Settings > Delete all saved data, clear the App's storage in Android Settings, or uninstall the App.",
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
          "Kosh is free and supported by ads from Google AdMob. Banner ads appear on calculator, table and list screens, below or between content and labelled as ads. An interstitial (full-screen) ad may appear only when you leave a calculator you used, after at least 3 calculators, at most once every 3 minutes, and never in the first 60 seconds after the App opens. There are no rewarded or app-open ads. Where required (for example in the EEA, UK and Switzerland) you are asked for consent through Google's consent form before ads are requested, and you can change your choice later in Settings. Ads are the only part of the App that uses the internet. Your figures and results are never shared with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android Permissions",
        items: [
          "android.permission.INTERNET and ACCESS_NETWORK_STATE: to load ads and the consent form.",
          "com.google.android.gms.permission.AD_ID and Android Privacy Sandbox ad-services permissions: added by the Google Mobile Ads SDK for ad delivery and measurement.",
          "WAKE_LOCK and FOREGROUND_SERVICE: added by Android WorkManager, which the Google Mobile Ads SDK uses for background ad tasks.",
        ],
        purpose: "No location, contacts, storage, camera, microphone, notification, SMS or call-log permissions are requested.",
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
      "Perform loan, investment, deposit, tax, salary, gold, GST and interest calculations on your device.",
      "Remember your last inputs, saved calculations, favourites and settings.",
      "Let you share or copy a result when you choose to.",
      "Show ads through Google AdMob so the App can stay free, and collect advertising consent where required by law.",
    ],
    dataRetentionPolicy:
      "Saved calculations, remembered inputs, favourites and settings remain on your device until you delete them in the App, clear the App's storage, or uninstall the App. We run no servers and keep no copy of your data. Advertising data processed by Google is retained according to Google's policies (https://policies.google.com/privacy).",
    securityPractices: [
      "No accounts: no passwords or credentials are created, stored or transmitted.",
      "Private app storage: your data is kept in Android's private, per-app storage that other apps cannot read, and the App opts out of Android cloud backup.",
      "No financial identifiers: the App never asks for bank, card, PAN or Aadhaar details.",
      "Encrypted connections: ad traffic uses HTTPS (TLS).",
      "Minimal permissions: no sensitive permissions are requested.",
    ],
    childrensPrivacy:
      "Kosh is a finance utility intended for adults and is not directed at children under 13. We do not knowingly collect personal information from children; the App has no accounts and collects no personal information itself. If a parent or guardian believes a child has provided personal information, please contact officialworldwithtechnology@gmail.com.",
    userRights: [
      "Delete your data: use Settings > Delete all saved data in the App, clear the App's storage in Android Settings, or uninstall the App.",
      "Change ad consent (GDPR / UK GDPR): where the consent form applies, use Settings > Ad privacy choices at any time.",
      "Opt out of personalised ads (CCPA / CPRA and everyone): reset or delete your advertising ID in Android Settings > Google > Ads, or manage ad settings at https://adssettings.google.com.",
      "DPDP Act (India): you may contact us for grievance redressal at officialworldwithtechnology@gmail.com.",
    ],
    internationalTransfers:
      "We do not operate servers and do not transfer your data. Ad requests and consent checks are processed by Google on its global infrastructure in line with Google's Privacy Policy and applicable transfer safeguards.",
    changesToPolicy:
      "If this policy changes, the updated version will appear here and in the App with a new 'Last Updated' date. Continued use of the App after an update means you accept the updated policy.",
  },
  terms: {
    introduction:
      "These Terms of Service ('Terms') are an agreement between you and Karan Saini ('Developer', 'we', 'us') for the Kosh mobile application (package name: com.koshcalc.app). Kosh is a free, ad-supported set of financial calculators provided for information and convenience.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By installing or using Kosh you agree to these Terms and our Privacy Policy. If you do not agree, please uninstall the App.",
          "Kosh is intended for adult users.",
          "Google Play Trader status (EU Digital Services Act): the Developer offers this App on Google Play as a trader to users worldwide, including the EEA and the UK.",
          "Right of withdrawal: Kosh is free with no in-app purchases. You can end this agreement at any time by uninstalling the App.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App",
        content: [
          "Loans: EMI calculator with repayment schedule, home loan with down payment, processing fee and prepayments, loan comparison, flat vs reducing rate, and loan affordability.",
          "Investments: SIP, step-up SIP, lumpsum, systematic withdrawal (SWP) and goal planner.",
          "Deposits and savings: fixed deposit (cumulative and payout), recurring deposit and PPF with extensions.",
          "Tax and salary: CTC to in-hand salary and income tax under the old and new regimes for FY 2026-27.",
          "Gold and GST: jewellery price from the 24K rate with purity, making charges and GST; GST add/remove with CGST/SGST or IGST split.",
          "Money maths: simple and compound interest, CAGR and inflation.",
          "Other features: charts, year-by-year tables, saved calculations, share and copy, favourites, light and dark themes, and Indian or international number formats. The App works offline except for ads and is offered free of charge on Google Play in English.",
        ],
      },
      {
        id: "estimates-not-advice",
        title: "3. Calculations Only, Not Advice",
        content: [
          "Kosh performs arithmetic on the values you enter. Results are estimates and are not investment, financial, tax, legal or loan advice, nor a recommendation to buy, sell or hold any product.",
          "Kosh does not offer, arrange, facilitate or advertise loans, deposits, investments or insurance, and is not connected to any bank, lender, broker, employer or government service.",
          "Rates of return are figures you choose; market-linked returns are not guaranteed. Interest rates, GST rates and income-tax rules change over time, and banks, employers, jewellers and tax authorities may use different conventions or roundings. Confirm figures with the provider or a qualified professional before making a decision.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "4. Acceptable Use",
        content: [
          "Use the App lawfully and for personal, non-commercial purposes.",
          "Do not use bots, scripts or other automated means to generate ad impressions or ad clicks.",
          "Do not decompile, reverse engineer or redistribute the App.",
        ],
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property",
        content: [
          "The App's code, design and icon belong to the Developer.",
          "You receive a limited, personal, revocable, non-exclusive, non-transferable licence to use the App.",
        ],
      },
      {
        id: "advertisements",
        title: "6. Advertisements",
        content: [
          "Kosh is free because it shows ads from Google AdMob: banner ads on calculator, table and list screens.",
          "An interstitial ad may appear only when you leave a calculator you used, after at least 3 calculators, at most once every 3 minutes, and never in the first 60 seconds after the App opens. There are no rewarded or app-open ads.",
          "We do not endorse advertised products. Ads for financial products are provided by Google, not by the Developer.",
          "Where required by law, a Google consent form is shown before ads are requested. You can change your choices in Settings > Ad privacy choices, and manage personalised ads in Android Settings > Google > Ads or at https://adssettings.google.com.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "The App is provided 'as is' and 'as available' without warranties of any kind, to the extent permitted by law, including any warranty that results are accurate for your situation.",
          "Nothing in these Terms limits statutory consumer rights that cannot be excluded under applicable law, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, the Developer is not liable for losses arising from use of the App or reliance on its results, including loan, investment, tax, salary or purchase decisions.",
          "Your saved calculations are stored only on your device; we are not responsible for data lost through clearing data, resetting your device or uninstalling the App.",
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
          "App: Kosh: EMI, SIP & FD Calculator",
          "Package name: com.koshcalc.app",
          "Distribution platform: Google Play",
          "Price: free. No in-app purchases, subscriptions or other payments.",
          "Contact email: officialworldwithtechnology@gmail.com",
          "Support email: officialworldwithtechnology@gmail.com",
          "Website: https://pythonwithkaran.vercel.app/kosh",
          "Privacy Policy: https://pythonwithkaran.vercel.app/kosh/privacy",
          "Data deletion: https://pythonwithkaran.vercel.app/kosh/delete-account",
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
      "Kosh has no accounts. All data is stored on your device. To delete it: open Kosh > Settings > Delete all saved data, or go to Android Settings > Apps > Kosh > Storage > Clear storage, or uninstall the App. Results you shared or copied outside the App are managed by you.",
    deletedDataTypes: [
      "Saved calculations and their notes",
      "Remembered calculator inputs",
      "Favourite and recently used calculators",
      "Settings (theme, number format, haptics)",
    ],
    retainedDataTypes: [],
    retentionReason: "Kosh stores no data on any server, so nothing is retained after deletion.",
    processingTime: "Instant (on-device action)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
