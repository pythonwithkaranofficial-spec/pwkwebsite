import { AppConfig } from "@/types/app-config";

export const ncertMathFormulasHubConfig: AppConfig = {
  metadata: {
    id: "ncertmathformulashub",
    name: "NCERT Math Formulas Hub",
    packageName: "com.pwk.ncert_math_formulas",
    category: "Education",
    description:
      "Comprehensive offline NCERT Mathematics formulas, theorems, and definitions reference for Class 9, Class 10, Class 11, and Class 12 students. Features chapter-wise formulas, interactive flashcards, bookmarks, daily study streaks, and practice quizzes — fully functional 100% offline.",
    logoUrl: "/apps/ncertmathformulashub/logo.png",
    version: "1.0.0",
    effectiveDate: "August 23, 2026",
    lastUpdated: "August 23, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "NCERT Math Formulas Hub",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "NCERT Math Formulas Hub ('we', 'our', or 'the App') is committed to protecting your privacy. This Privacy Policy explains how NCERT Math Formulas Hub handles information when you use our mobile application available on the Google Play Store (Package ID: com.pwk.ncert_math_formulas). We are committed to protecting your privacy. This App is designed as an offline-first educational tool for students from Class 9 to Class 12.",
    dataCollection: [
      {
        category: "Personal Information (Zero PII Collection)",
        items: [
          "First or last name",
          "Email address",
          "Phone number",
          "Physical address or postal code",
          "Contact list or address book",
          "Photos, camera access, audio recordings, or device files",
          "Financial, banking, or payment card details",
          "Biometric data or personal profiles",
          "GPS or precise location data",
        ],
        purpose:
          "We do NOT collect, store, or transmit any Personally Identifiable Information (PII). The App does not require user registration, sign-up, or account creation.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Offline & Local Device Data (On-Device Storage)",
        items: [
          "Bookmarked formulas and theorems",
          "Recently viewed formulas and chapters",
          "Daily study streak count and milestone achievement badges",
          "Quiz performance, accuracy score, and flashcard statistics",
          "App theme preferences (Dark Mode / Light Mode) and font scale settings",
        ],
        purpose:
          "All your learning progress, bookmarks, and preferences are stored locally on your device (using on-device storage) and are never sent to external servers or shared with third parties. You can erase this data at any time by clearing the App's data in Android settings or by uninstalling the application.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Services & Advertising (Google AdMob)",
        items: [
          "Device Identifiers: Android Advertising ID (AD_ID), general device model, and OS version",
          "IP address (used strictly for approximate / country-level ad serving and fraud detection)",
          "Ad Performance Metrics: Ad impressions, click data, and diagnostic/crash information",
        ],
        purpose:
          "To support the ongoing development and maintenance of this free educational app, we display third-party advertisements via Google AdMob in accordance with Google Play Developer Policies and Google's Privacy Policy.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "System Permissions Used by the App",
        items: [
          "android.permission.INTERNET: Required to load Google AdMob advertisements and verify network connectivity.",
          "android.permission.ACCESS_NETWORK_STATE: Used to verify internet connectivity before requesting ads.",
          "com.google.android.gms.permission.AD_ID: Used by the Google Mobile Ads SDK to serve relevant ads according to Google Play Developer Policies.",
        ],
        purpose:
          "The App requests minimal permissions solely for ad delivery and performance. All mathematical formulas, theorems, flashcards, and quizzes remain fully functional 100% offline.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK)",
        provider: "Google LLC",
        purpose:
          "Displays advertising formats (Banner, Interstitial, and App Open ads) to support free educational access for all students. Collects non-personally identifiable technical identifiers.",
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
          "Details how Google uses data when you use partner apps and advertising technologies.",
        privacyPolicyUrl: "https://policies.google.com/technologies/partner-sites",
      },
    ],
    dataUsePurposes: [
      "Deliver 100% offline access to NCERT Mathematics formulas, theorems, definitions, and flashcards for Classes 9, 10, 11, and 12.",
      "Save bookmarked formulas, study streak achievements, quiz performance statistics, and user interface preferences strictly on local device storage.",
      "Display family-safe advertisements via Google Mobile Ads (AdMob) to keep the educational application completely free for students and educators.",
      "Maintain app stability, diagnose crash reports, and ensure compatibility across various Android device specifications.",
    ],
    dataRetentionPolicy:
      "Because all user preferences and learning data remain on your local device, no personal data is stored on remote servers. All user-generated progress (bookmarked formulas, streaks, and quiz statistics) resides strictly in your device's local storage. This data is retained only as long as the application remains installed on your device. Clearing app storage or uninstalling the app permanently erases all local data immediately.",
    securityPractices: [
      "Zero Cloud Database Storage: No user personal information or account profiles are ever transmitted to or stored on external cloud servers.",
      "On-Device Protection: Learning bookmarks, streaks, and settings are secured by your Android operating system's sandbox and storage controls.",
      "Encrypted Ad Communications: All ad requests communicated by the Google AdMob SDK are encrypted in transit via standard HTTPS/TLS protocols.",
      "Minimal System Permissions: The application requests only minimal system permissions strictly required for ad loading (INTERNET, ACCESS_NETWORK_STATE, AD_ID).",
    ],
    childrensPrivacy:
      "Our App provides educational mathematical formulas for secondary and higher secondary school students (Classes 9–12). We do not knowingly collect any personally identifiable information from children under the age of 13 (or applicable age in your jurisdiction). Advertisements displayed within the app are configured to adhere to Google Play Families Policy and COPPA guidelines for family-safe, educational viewing. If a parent or guardian becomes aware that their child has provided us with personal information without consent, please contact us at officialworldwithtechnology@gmail.com so we can take immediate appropriate action.",
    userRights: [
      "Local Data Erasure: You can erase all local bookmarks, streak history, quiz performance data, and app preferences at any time by clearing the App's data/cache in your Android device settings or by uninstalling the application.",
      "Opt-Out of Personalized Advertising: You can opt out of personalized ads at any time via your Android device settings: Go to Settings > Google > Ads > Delete advertising ID or enable Opt out of Ads Personalization (or visit https://adssettings.google.com).",
      "Offline Access: Full access to all NCERT math formulas, theorems, and flashcards without requiring any internet connection or user login.",
      "Display & Theme Customization: Customize font scaling and toggle Dark / Light themes freely in the app settings.",
    ],
    internationalTransfers:
      "Because NCERT Math Formulas Hub does not operate cloud servers, no user personal data is transferred across borders. Third-party ad requests processed by Google AdMob are handled across Google's secure global infrastructure in accordance with Google's Privacy Policy.",
    changesToPolicy:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for regulatory compliance. Any updates will be posted on this page with an updated 'Last Updated' date.",
  },
  terms: {
    introduction:
      "Welcome to NCERT Math Formulas Hub. These Terms of Service ('Terms') constitute a legally binding agreement between you ('User', 'you', or 'your') and Karan Saini ('Developer', 'Trader', 'we', 'us', or 'our') governing your use of the NCERT Math Formulas Hub mobile application (Package Name: com.pwk.ncert_math_formulas). This application is provided as an ad-supported mathematics study tool and complies with applicable consumer protection laws and Google Play Console Trader requirements under the EU Digital Services Act (DSA).",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "Binding Agreement: By downloading, installing, accessing, or using NCERT Math Formulas Hub, you confirm that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must refrain from using the application and uninstall it immediately.",
          "Eligibility & Academic Audience: NCERT Math Formulas Hub is designed primarily for students in secondary and senior secondary education (CBSE/NCERT Classes 9, 10, 11, and 12), mathematics educators, and exam candidates. Users under 18 years of age confirm that they have reviewed these Terms with a parent or legal guardian.",
          "Google Play Trader Status Declaration: Pursuant to Article 30 of the EU Digital Services Act (DSA) (Regulation EU 2022/2065), the developer is registered as a 'Trader' on Google Play, providing ad-supported digital educational software to users globally, including the European Economic Area (EEA) and the United Kingdom.",
          "Right of Withdrawal (EU/EEA & UK Consumers): The application is provided 100% free of charge without upfront monetary payment. Under statutory consumer law, you acknowledge that performance begins immediately upon download. You may terminate this contract at any time with immediate effect simply by uninstalling the application.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App and Services",
        content: [
          "Offline Mathematics Reference Companion: NCERT Math Formulas Hub provides a comprehensive, chapter-by-chapter reference of formulas, identities, geometric theorems, definitions, and cheat sheets aligned with NCERT mathematics curricula for Classes 9 through 12.",
          "Interactive Learning Features: Includes interactive mathematical flashcards, quick formula lookups, chapter-wise practice quizzes, and daily study streak counters to encourage consistent study habits.",
          "100% Offline Core Availability: All mathematical formulas, theorems, definitions, and practice flashcards are stored locally within the application package and remain fully functional without internet access.",
          "Account-Free Architecture: The App does not require user registration, usernames, passwords, or cloud accounts. All study bookmarks, quiz records, daily streak counters, and theme preferences reside purely on your device's local storage.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. User Responsibilities & Acceptable Use",
        content: [
          "Lawful Educational Use: You agree to use NCERT Math Formulas Hub exclusively for legitimate personal educational study, revision, and academic preparation.",
          "Prohibition on Reverse Engineering: You agree not to decompile, reverse engineer, disassemble, unpack, or attempt to derive the source code or proprietary database tables of the application binary.",
          "Prohibition on Commercial Exploitation: You may not systematically scrape, bundle, sell, license, or commercially redistribute formula compendiums, flashcards, or graphics from the App without express written authorization.",
          "Prohibition on Advertising Fraud: You strictly agree not to use automated scripts, bots, emulators, auto-clickers, or click farms to generate fraudulent AdMob ad impressions or clicks.",
          "Device Integrity: You are responsible for maintaining the physical security of your Android device and ensuring operating system compatibility.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: [
          "Developer Ownership: All custom user interface layouts, interactive flashcard implementations, quiz algorithms, software code, icons, and graphic designs in NCERT Math Formulas Hub are the intellectual property of Karan Saini.",
          "Limited Educational License: Subject to these Terms, you are granted a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to use the App solely for non-commercial educational study.",
          "NCERT Reference Disclaimer: Mathematical formulas, algebraic identities, geometric theorems, and curriculum names (Classes 9, 10, 11, and 12) are derived from the publicly available standard NCERT curriculum and Indian educational frameworks. NCERT Math Formulas Hub is an independent study tool and is not officially affiliated with, authorized by, or endorsed by the National Council of Educational Research and Training (NCERT) or the Government of India.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements (AdMob and Third-Party Ads)",
        content: [
          "Ad-Supported Free Education: To make high-quality mathematics reference materials freely accessible to all students regardless of financial means, the App is supported by non-intrusive advertisements served via Google AdMob (Google Mobile Ads SDK).",
          "Ad Formats Deployed: Includes adaptive banner ads (displayed at the bottom of screens), occasional interstitial transitions between study chapters, and App Open ads.",
          "Family-Safe Ad Configuration: In accordance with Google Play Developer Policies and family content guidelines, advertisements are configured for family-safe, educational viewing.",
          "Consent Management (Google UMP): The App implements the Google User Messaging Platform (UMP) SDK to capture and manage explicit consent from users in the EEA and UK under GDPR and ePrivacy regulations.",
          "Opt-Out Options: Users may customize or opt out of personalized advertising at any time through Android device settings (Settings > Google > Ads) or via Google Ads Settings at https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "Third-Party SDK Integrations: The application integrates Google Mobile Ads (AdMob) for ad serving and Google Play Services for standard Android platform capabilities.",
          "No Third-Party Analytics Trackers: We do not integrate behavioral tracking SDKs or user monitoring platforms into NCERT Math Formulas Hub.",
          "Third-Party Terms & Disclaimers: Third-party services operate under their own independent terms and privacy policies (https://policies.google.com/privacy). We do not control and are not liable for third-party networks or service interruptions.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "Provided 'AS IS' & 'AS AVAILABLE': NCERT Math Formulas Hub and all included mathematical content, formulas, theorems, and quizzes are provided on an 'AS IS' and 'AS AVAILABLE' basis without warranty of any kind, whether express, statutory, or implied.",
          "No Academic Score Guarantees: While formulas and theorem statements have been meticulously verified against NCERT textbooks, we make no warranty that using the App guarantees specific test scores, board examination grades, or admission results.",
          "No Guarantee of Flawless Operation: We do not warrant that the application will be uninterrupted, entirely error-free, or compatible with all past or future Android operating system versions.",
          "Preservation of Consumer Guarantees: Nothing in these Terms shall limit or exclude any statutory legal warranties of conformity for digital content that cannot be excluded under applicable consumer protection legislation, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "Exclusion of Consequential Damages: To the maximum extent permitted by applicable law, Karan Saini and NCERT Math Formulas Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the application.",
          "Local Data Reset Disclaimer: Because all formula bookmarks, streak milestones, and quiz records are stored strictly in local device storage, the Developer bears no liability for data loss resulting from device resets, storage wipes, uninstallation, or hardware malfunction.",
          "Aggregate Liability Cap: In no event shall our total aggregate liability for all claims arising out of or related to the App exceed the total amount paid by you ($0.00 / INR 0) or USD $10.00, whichever is greater.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        content: [
          "Modifications & Revisions: We reserve the right to amend, update, or revise these Terms of Service at any time to comply with changes in legal requirements or Google Play Developer Policies.",
          "Publication of Updates: Changes become effective immediately upon publication on this legal portal, indicated by an updated 'Last Updated' date.",
          "Continued Acceptance: Your continued installation or use of NCERT Math Formulas Hub following any updates signifies your binding acceptance of the revised Terms.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact Information & Google Play Trader Disclosures",
        content: [
          "Trader Identification (EU Digital Services Act): In compliance with Article 30 of the EU Digital Services Act (DSA) and Google Play Trader disclosure requirements, the legal provider of this application is:",
          "Developer / Trader Name: Karan Saini",
          "Trading / App Name: NCERT Math Formulas Hub",
          "Official Developer Email: officialworldwithtechnology@gmail.com",
          "Support & Legal Inquiries: officialworldwithtechnology@gmail.com",
          "Country & Jurisdiction of Establishment: India",
          "Self-Certification Commitment: The Trader hereby self-certifies that it only offers products and services that comply with applicable rules of European Union law, Indian law, and Google Play Developer Program Policies.",
          "Consumer Inquiries & Redressal: For questions, feedback, or legal notices concerning these Terms, please contact officialworldwithtechnology@gmail.com. We endeavor to respond to consumer inquiries within 48 to 72 business hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Zero sign-up/login architecture). All study data, bookmarks, streaks, and quiz records are stored locally on your device. To erase all data immediately, go to Android Settings -> Apps -> NCERT Math Formulas Hub -> Storage -> Clear Data / Clear Storage, or uninstall the app from your device.",
    deletedDataTypes: [
      "Bookmarked & saved favorite mathematical formulas",
      "Daily study streak counts and milestone achievement badges",
      "Math quiz performance statistics, accuracy rates, and flashcard session history",
      "User preferences (Dark Mode / Light Mode, font scale adjustments)",
    ],
    retainedDataTypes: [],
    retentionReason:
      "NCERT Math Formulas Hub does not collect, transmit, or retain any personal data on cloud servers. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
