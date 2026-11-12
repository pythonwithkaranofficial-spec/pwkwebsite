import { AppConfig } from "@/types/app-config";

export const periodicTableExplorerConfig: AppConfig = {
  metadata: {
    id: "periodictableexplorer",
    name: "Periodic Table Explorer",
    packageName: "com.pwk.periodictableexplorer",
    category: "Education",
    description:
      "Interactive Periodic Table & Chemistry Reference. Explore all 118 elements, electron configurations, Bohr models, chemical properties, interactive element comparisons, and quiz games — fully functional 100% offline.",
    logoUrl: "/apps/periodictableexplorer/logo.png",
    version: "1.1.0",
    effectiveDate: "August 17, 2026",
    lastUpdated: "August 17, 2026",
    platform: "iOS & Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Periodic Table Explorer",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Periodic Table Explorer ('we', 'our', or 'the App') is committed to protecting the privacy of our users, including students, teachers, and chemistry enthusiasts. This Privacy Policy explains how our application handles information and data when you use the mobile application (Package ID: com.pwk.periodictableexplorer). Periodic Table Explorer operates on a strict privacy-first architecture: zero personal data collected, no account required, and 100% offline core functionality.",
    dataCollection: [
      {
        category: "Information We Do NOT Collect (Zero Personal Data)",
        items: [
          "First or last name",
          "Email address or physical address",
          "Phone numbers or contacts list",
          "GPS or precise location data",
          "Photos, camera access, audio recordings, or device files",
          "Financial, banking, or payment card details",
          "Biometric data or personal profiles",
        ],
        purpose:
          "The App does not collect, transmit, store, or sell any Personally Identifiable Information (PII). You do not need to create an account or log in to use any feature in the App.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Local Data Storage on Your Device (SharedPreferences)",
        items: [
          "Favorites / Bookmarks: Elements starred for quick review and study",
          "Quiz Statistics: Current score, streak count, accuracy rate, and session counter",
          "User Preferences: Theme choice (Dark Mode / Light Mode), Haptic Feedback (vibrations), Sound Effects toggle, and display settings (Atomic Mass & Electron Config toggles)",
        ],
        purpose:
          "The App stores non-personal app preferences and study progress locally on your device via standard SharedPreferences. This data never leaves your device and is never uploaded to external servers. You can erase this data at any time by clearing the App's data in Android settings or by uninstalling the application.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Advertising Data (Google AdMob SDK)",
        items: [
          "Device identifiers (e.g., Google Advertising ID / AAID / IDFA)",
          "IP address (used strictly for approximate / country-level ad serving and fraud detection)",
          "Ad interaction and performance metrics (views, clicks, impressions)",
          "Crash logs and app performance diagnostics",
        ],
        purpose:
          "To support ongoing maintenance and provide the app free to learners worldwide, the App integrates Google AdMob (Google Mobile Ads SDK) to display App Open, Anchored Banner, Interstitial, and optional Rewarded Ads (which provide 50:50 lifelines in the chemistry quiz). AdMob App ID: ca-app-pub-1063071230306366~4799205538.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Analytics & Tracking SDKs (Zero Analytics)",
        items: [
          "No Google Analytics or Firebase Analytics integrated",
          "No Facebook SDK or social tracker integration",
          "No cross-app user tracking or behavioral profiling",
        ],
        purpose:
          "We do not use any third-party behavioral analytics or telemetry SDKs to monitor your learning activities inside the application.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google AdMob (Google Mobile Ads SDK)",
        provider: "Google LLC",
        purpose:
          "Displays advertising formats (Banner, Interstitial, App Open, and Rewarded video ads for quiz 50:50 lifelines). AdMob App ID: ca-app-pub-1063071230306366~4799205538.",
        privacyPolicyUrl: "https://support.google.com/admob/answer/6128543",
      },
      {
        name: "Google Privacy & Advertising Terms",
        provider: "Google LLC",
        purpose:
          "Governs how Google handles advertising data and technology across mobile applications.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ads Settings (Opt-Out Resource)",
        provider: "Google LLC",
        purpose:
          "Allows users to manage ad personalization preferences or opt out of personalized ads.",
        privacyPolicyUrl: "https://adssettings.google.com",
      },
      {
        name: "Google Fonts",
        provider: "Google LLC",
        purpose:
          "Provides clean typography rendering (Poppins & Inter fonts) for chemistry tables and UI cards.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataUsePurposes: [
      "Deliver 100% offline access to all 118 chemical elements, Bohr atomic models, electron configurations, comparisons, and periodic trends.",
      "Save study bookmarks, quiz statistics (scores, streaks, accuracy rate), and user preferences strictly on local device storage.",
      "Display family-safe advertisements via Google Mobile Ads (AdMob) to keep the educational application completely free for students and teachers.",
      "Provide optional Rewarded Video Ads allowing users to unlock 50:50 hints during chemistry quiz sessions.",
    ],
    dataRetentionPolicy:
      "We do not maintain any cloud databases or external user records for Periodic Table Explorer. All user-generated data (bookmarked elements, quiz statistics, and settings) resides strictly in your device's local SharedPreferences. This data is retained only as long as the application remains installed on your device. Clearing app storage or uninstalling the app permanently erases all local data immediately.",
    securityPractices: [
      "Zero Cloud Databases: No user personal information is ever transmitted to or stored on external cloud servers.",
      "Local Isolation: Bookmarked elements and quiz preferences are securely stored within the Android application sandbox via SharedPreferences.",
      "Encrypted Ad Communications: All ad requests communicated by the Google AdMob SDK are encrypted in transit via standard HTTPS/TLS.",
      "Minimal System Permissions: The application requests only the minimal system permissions strictly required for ad loading (INTERNET) and tactile feedback (VIBRATE).",
    ],
    childrensPrivacy:
      "Periodic Table Explorer is designed for general audiences and educational use by students of all ages. We do not knowingly collect any personally identifiable information from children under the age of 13. Advertisements displayed within the app are configured to adhere to Google Play Families Policy and COPPA guidelines for family-safe, educational viewing. If a parent or guardian believes that non-compliant data has been collected, please contact us immediately at officialworldwithtechnology@gmail.com and we will take appropriate measures.",
    userRights: [
      "Local Data Erasure: You can erase all local bookmarks, quiz statistics, and preferences at any time by clearing the App's data/cache in your Android device settings or by uninstalling the application.",
      "Ads Personalization Opt-Out: You can opt out of personalized ads at any time via your device's Google Settings > Ads > Opt out of Ads Personalization or by visiting https://adssettings.google.com.",
      "Haptic Feedback (Vibration) Control: You can toggle tactile haptic vibration on or off at any time in the app Settings.",
      "Sound Effects Control: You can mute or enable quiz audio sound effects in Settings.",
      "Display Customization: You can enable or disable Atomic Mass and Electron Configuration values on the periodic table grid.",
    ],
    internationalTransfers:
      "Because Periodic Table Explorer does not operate cloud servers, no user account data is transferred across borders. Third-party ad requests processed by Google AdMob are handled across Google's secure global infrastructure in accordance with Google's Privacy Policy.",
    changesToPolicy:
      "We may update our Privacy Policy periodically to reflect changes in legal requirements, features, or third-party service policies. Any changes will be posted on this page with an updated 'Last Updated' date.",
  },
  terms: {
    introduction:
      "Welcome to Periodic Table Explorer. These Terms of Service ('Terms') constitute a legally binding agreement between you ('User', 'you', or 'your') and Karan Saini ('Developer', 'Trader', 'we', 'us', or 'our') governing your use of the Periodic Table Explorer mobile application (Package Name: com.pwk.periodictableexplorer). This application is provided as an ad-supported chemistry reference tool and complies with applicable consumer protection laws and Google Play Console Trader requirements under the EU Digital Services Act (DSA).",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "Legally Binding Contract: By downloading, installing, accessing, or using Periodic Table Explorer, you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must refrain from using the application and uninstall it immediately.",
          "Eligibility & General Audience: Periodic Table Explorer is intended for students, chemistry educators, researchers, and science enthusiasts of all ages. Users under the age of 18 represent that they have reviewed these Terms with a parent or legal guardian.",
          "Google Play Trader Status Declaration: In accordance with Article 30 of the European Union Digital Services Act (DSA) (Regulation EU 2022/2065), the developer is declared as a registered 'Trader' on Google Play, providing ad-supported digital educational software to consumers worldwide, including the European Economic Area (EEA) and the United Kingdom.",
          "Right of Withdrawal (EU/EEA & UK Consumers): The application is provided 100% free of charge without upfront monetary payment. Under applicable statutory consumer regulations, performance begins immediately upon download. You retain the right to terminate this agreement at any time by ceasing use and uninstalling the application from your device.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App and Services",
        content: [
          "Interactive Scientific Reference: Periodic Table Explorer is an interactive digital chemistry reference application providing detailed physical and chemical data for all 118 chemical elements (atomic weight, electron configuration, Bohr atomic models, oxidation states, ionization energy, electronegativity, crystal structure, and periodic trend charts).",
          "100% Offline Core Functionality: All scientific tables, element descriptions, interactive Bohr visualizations, and chemistry quizzes operate locally on your device without requiring active network connectivity.",
          "Account-Free & Private Architecture: The App requires zero user registration, login credentials, or cloud profile creation. You can use all reference features instantly upon launch.",
          "Local-Only Data Storage: Element bookmarks, chemistry quiz performance statistics (scores, streak counters, accuracy rates), and user interface preferences (theme, audio, haptic feedback) are stored strictly on-device via Android SharedPreferences.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. User Responsibilities & Acceptable Use",
        content: [
          "Personal & Educational Use: You agree to use the App solely for lawful educational, academic, and non-commercial scientific reference purposes.",
          "Prohibition on Reverse Engineering: You agree not to decompile, reverse engineer, disassemble, unpack, or attempt to derive the underlying source code of the application binary or its compiled scientific database assets.",
          "Prohibition on Commercial Database Scraping: You may not systematically extract, bundle, scrape, or redistribute the proprietary element illustrations, Bohr visual models, or curated quiz databases for commercial sale or distribution.",
          "Prohibition on Advertising Manipulation: You strictly agree not to use bots, automated scripts, click farms, or emulators to generate fraudulent ad impressions, clicks, or illegitimate rewarded ad lifelines.",
          "Device Compatibility: You are responsible for ensuring that your mobile device meets the hardware and operating system requirements necessary to run the application.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: [
          "Developer Ownership: All custom user interface layouts, Bohr atomic model illustrations, visual diagrams, chemistry quiz questions and algorithms, software code, icons, and graphic presentations in Periodic Table Explorer are the exclusive intellectual property of Karan Saini.",
          "Limited License: Subject to your compliance with these Terms, you are granted a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to use the App for personal and educational study.",
          "Scientific Reference Attribution: Chemical nomenclature, standard atomic weights, and elemental discovery data are compiled from public international scientific standards, including the International Union of Pure and Applied Chemistry (IUPAC). Such public domain scientific factual information remains the common heritage of science.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements (AdMob and Third-Party Ads)",
        content: [
          "Ad-Supported Monetization: To maintain free, unhindered access to all 118 elements and study features for students globally, Periodic Table Explorer is monetized via third-party advertisements delivered by Google Mobile Ads (AdMob) (AdMob App ID: ca-app-pub-1063071230306366~4799205538).",
          "Ad Formats Deployed: The App incorporates non-intrusive ad formats including App Open ads, anchored banner ads, interstitial transitions between reference sections, and optional rewarded video ads.",
          "Voluntary Rewarded Ads: Rewarded video ads are strictly optional and player-initiated. Watching a brief rewarded ad provides in-quiz lifelines (such as a 50:50 hint). Declining rewarded ads has no negative effect on your ability to use the periodic table or complete standard quizzes.",
          "EU/EEA & UK Consent Management (Google UMP): The App implements Google's User Messaging Platform (UMP) SDK to capture and manage explicit advertising consent for EEA, UK, and Swiss users in full compliance with GDPR and ePrivacy requirements.",
          "Opt-Out Mechanisms: You can manage your ad personalization choices or reset your Advertising ID at any time via Android Settings (Settings > Google > Ads) or via Google Ads Settings at https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "Third-Party SDKs: Periodic Table Explorer integrates Google AdMob for advertisement delivery, Google User Messaging Platform (UMP) for consent compliance, and Google Fonts (Poppins & Inter) cached locally for typography.",
          "No Behavioral Analytics SDKs: The application contains zero third-party behavioral analytics, telemetry tracking SDKs, or social media trackers.",
          "Independent Policies: Third-party SDKs operate under their own independent terms of service and privacy policies (accessible at https://policies.google.com/privacy). We do not control and are not responsible for the data practices of third-party service providers.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "Provided 'AS IS' & 'AS AVAILABLE': Periodic Table Explorer is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties or representations of any kind, whether express, statutory, or implied.",
          "Educational Reference Only — Not for Critical Chemical Synthesis: While scientific data has been compiled with extreme diligence from IUPAC and peer-reviewed sources, this software is intended solely as an educational study companion. It is NOT certified for mission-critical laboratory chemistry, pharmaceutical formulation, hazardous materials handling, or industrial engineering calculations.",
          "No Uptime Warranty: We do not warrant that the application will function uninterrupted, completely free from software defects, or compatible with all device hardware configurations.",
          "Statutory Consumer Rights: Nothing in these Terms affects your non-excludable statutory rights as a consumer under EU Directive (EU) 2019/770 or applicable mandatory local laws.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "Exclusion of Consequential Damages: To the maximum extent permitted by applicable law, Karan Saini and Periodic Table Explorer shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, the application or reliance upon any data contained therein.",
          "Local Data Reset Disclaimer: Because element bookmarks and quiz records are stored strictly in local device SharedPreferences, the Developer is not liable for data loss caused by device resets, storage wipes, uninstallation, or operating system updates.",
          "Liability Cap: To the extent liability cannot be excluded by law, our total aggregate liability for any and all claims shall be limited to the amount paid by you to use the App ($0.00 / INR 0) or USD $10.00, whichever is greater.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        content: [
          "Modifications & Revisions: We reserve the right to revise, update, or amend these Terms of Service at any time to reflect software updates, regulatory mandates, or Google Play Developer Policy revisions.",
          "Publication of Updates: Changes become effective upon publication on this website, marked with an updated 'Last Updated' date.",
          "Continued Acceptance: Your continued installation or use of Periodic Table Explorer following the posting of revised Terms constitutes your unconditional acceptance of the revised Terms.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact Information & Google Play Trader Disclosures",
        content: [
          "Trader Identification (EU Digital Services Act): In compliance with Article 30 of the EU Digital Services Act (DSA) and Google Play Trader disclosure requirements, the legal provider of this application is:",
          "Developer / Trader Name: Karan Saini",
          "Trading / App Name: Periodic Table Explorer",
          "Official Contact Email: officialworldwithtechnology@gmail.com",
          "Support & Legal Contact: officialworldwithtechnology@gmail.com",
          "Country & Jurisdiction of Establishment: India",
          "Self-Certification Commitment: The Trader hereby self-certifies that it only offers products and services that comply with applicable rules of European Union law, Indian law, and Google Play Developer Program Policies.",
          "Consumer Dispute Inquiries: For questions, feedback, or legal notices concerning these Terms, please contact officialworldwithtechnology@gmail.com. We respond to verified user queries within 48 to 72 business hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Zero sign-up/login architecture). All study data is stored locally. To erase all data immediately, go to Android Settings -> Apps -> Periodic Table Explorer -> Storage -> Clear Data / Clear Storage, or uninstall the app from your device.",
    deletedDataTypes: [
      "Bookmarked & saved favorite chemical elements",
      "Chemistry quiz statistics (scores, streaks, accuracy rate, and session counter)",
      "User preferences (Dark Mode / Light Mode, sound effects, haptic feedback, atomic mass, electron configuration toggles)",
    ],
    retainedDataTypes: [],
    retentionReason:
      "Periodic Table Explorer does not collect, transmit, or retain any personal data on cloud servers. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
