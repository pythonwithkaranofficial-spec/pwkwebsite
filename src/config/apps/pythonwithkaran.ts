import { AppConfig } from "@/types/app-config";

export const pythonWithKaranConfig: AppConfig = {
  metadata: {
    id: "pythonwithkaran",
    name: "PythonWithKaran",
    packageName: "com.pwk.pythonwithkaran",
    category: "Educational",
    description:
      "Learn. Code. Excel. A Flutter educational app delivering computer science, IT, IP & AI study notes, video tutorials, MCQs, and previous year question papers for CBSE Classes 9–12 students.",
    logoUrl: "/apps/pythonwithkaran/logo.png",
    version: "1.0.0",
    effectiveDate: "August 13, 2026",
    lastUpdated: "August 31, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "Karan Saini",
    email: "pythonwithkaran.official@gmail.com",
    supportEmail: "pythonwithkaran.official@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "PythonWithKaran ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application 'PythonWithKaran' (Package Name: com.pwk.pythonwithkaran). PythonWithKaran is built with an instant-access, local-first architecture: no user registration required, zero cloud account profiles, and fast on-device storage for your learning journey.",
    dataCollection: [
      {
        category: "Local Device Preferences & Avatar (Optional / Local Only)",
        items: [
          "Display name / student nickname (stored locally on device)",
          "Profile avatar / icon choice (stored locally on device)",
        ],
        purpose:
          "PythonWithKaran does not require user accounts, email registration, or passwords. Any profile name or avatar icon set within the app is stored strictly on your local device (via Hive local storage) and is never transmitted to our servers or third parties.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Educational Progress & App Activity (Local Storage)",
        items: [
          "Quiz/MCQ scores and completion history",
          "Completed study chapters and topic bookmarks",
          "Video watch history and favorites list",
          "User preferences and study settings",
        ],
        purpose:
          "Quiz scores, completed chapters, bookmarks, and video watch history are saved directly on the user's local device storage (via Hive) for fast offline access. This data is never uploaded to remote cloud databases.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Third-Party Advertising & Technical Identifiers (Google AdMob)",
        items: [
          "Device identifiers (e.g., Google Advertising ID / AAID)",
          "User Messaging Platform (UMP) consent status",
          "IP address (used strictly for country-level ad serving and fraud prevention)",
          "Anonymous app performance and crash diagnostic logs",
          "Local Hive cache storage keys (to speed up offline PDF notes and syllabus access)",
        ],
        purpose:
          "To support ongoing maintenance and provide free educational content to CBSE students, the app serves advertisements via Google Mobile Ads (AdMob) and utilizes local caching for high performance.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
    ],
    thirdPartyServices: [
      {
        name: "Google Mobile Ads (AdMob)",
        provider: "Google LLC",
        purpose:
          "Serves banner, interstitial, and rewarded advertisements, and manages advertising identifiers (AAID) and user consent (UMP).",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Google Firebase",
        provider: "Google LLC",
        purpose:
          "Collects anonymous diagnostic logs, crash reports, and aggregate usage analytics to maintain app stability.",
        privacyPolicyUrl: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Supabase",
        provider: "Supabase Inc.",
        purpose:
          "Hosts public educational PDF notes, chapter materials, and syllabus files.",
        privacyPolicyUrl: "https://supabase.com/privacy",
      },
      {
        name: "YouTube API Services",
        provider: "Google LLC / YouTube",
        purpose:
          "Streams educational tutorial videos and Shorts directly in-app.",
        privacyPolicyUrl: "https://www.youtube.com/t/terms",
      },
    ],
    dataUsePurposes: [
      "Provide, maintain, and improve the PythonWithKaran educational platform.",
      "Deliver CBSE-aligned notes, MCQs, syllabus files, and video tutorials efficiently.",
      "Save quiz progress, bookmarks, and video history strictly on local device storage (Hive cache).",
      "Display family-safe advertisements via Google Mobile Ads (AdMob) to keep educational resources freely available to all students.",
      "Provide optional Rewarded Video Ads allowing users to unlock detailed quiz solutions and explanations.",
      "Respond to student support requests and technical inquiries.",
      "Detect, prevent, and address technical bugs or crash reports to ensure high app performance.",
    ],
    dataRetentionPolicy:
      "Because PythonWithKaran operates without remote server accounts, you have complete control over your data. All student progress, quiz history, and offline caches are stored locally on your device (via Hive) and are retained only as long as the application remains installed. Clearing app storage in your device Settings or uninstalling the app permanently erases all local data immediately.",
    securityPractices: [
      "Zero Cloud Account Databases: PythonWithKaran does not store user profiles, passwords, or personal credentials on cloud servers.",
      "Local Sandbox Storage: Study progress, avatar preferences, and quiz history are isolated within the device's secure local Hive storage.",
      "Encrypted Data in Transit: All network requests for educational notes (Supabase) and ads (Google AdMob) use secure HTTPS/TLS encryption.",
      "Minimal System Permissions: The app requests only network permissions strictly necessary for loading public educational materials and advertisements.",
    ],
    childrensPrivacy:
      "PythonWithKaran is designed for students studying CBSE Computer Science, IT, IP, and AI courses (typically ages 13 and above). We do not knowingly collect personal information from children under 13 without parental/guardian consent. If we learn that we have collected personal data from a child under 13 without verification, we will promptly delete that information.",
    userRights: [
      "Local Data Erasure: You can erase all local study progress, quiz history, and cached PDFs at any time simply by clearing the app's cache/storage in your device Settings or by uninstalling the app.",
      "Ad Personalization Opt-Out: You can manage or reset your advertising ID and opt out of personalized ads via your device's Google Settings > Ads or by visiting https://adssettings.google.com.",
      "Offline Study Access: Full access to cached chapter notes and offline quizzes without requiring any internet connection or user login.",
      "Support Inquiries: Contact us at pythonwithkaran.official@gmail.com for any privacy questions or assistance.",
    ],
    internationalTransfers:
      "Because PythonWithKaran does not operate remote user account servers, no personal profile data is transferred across borders. Content delivery and advertising requests (Supabase, YouTube, Google AdMob) are processed across their respective secure global networks in accordance with their privacy policies.",
    changesToPolicy:
      "We may update our Privacy Policy from time to time. We will notify you of any changes by updating the 'Last Updated' date at the top of this policy and posting the updated policy on our website.",
  },
  terms: {
    introduction:
      "Welcome to PythonWithKaran. These Terms of Service ('Terms') constitute a legally binding agreement between you ('User', 'you', or 'your') and Karan Saini ('Developer', 'Trader', 'we', 'us', or 'our') governing your access to and use of the PythonWithKaran mobile application (Package Name: com.pwk.pythonwithkaran). This application is provided as an ad-supported educational service and complies with applicable consumer protection laws and Google Play Console Trader requirements under the EU Digital Services Act (DSA).",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "Legally Binding Agreement: By downloading, installing, accessing, or using PythonWithKaran, you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree, you must immediately discontinue use and uninstall the application.",
          "Eligibility & Minors: PythonWithKaran is primarily designed for high school and senior secondary students (CBSE Classes 9–12), educators, and programming enthusiasts. If you are under 18 years of age (or the legal age of majority in your jurisdiction), you represent that you have reviewed these Terms with your parent or legal guardian and obtained their consent.",
          "Google Play Trader Status Declaration: Under the European Union Digital Services Act (DSA) (Regulation EU 2022/2065), the developer is registered as a 'Trader' on Google Play, providing ad-supported digital educational software to consumers globally, including the European Economic Area (EEA) and the United Kingdom.",
          "Right of Withdrawal (EU/EEA & UK Consumers): The application is provided free of charge without upfront monetary payment. Under statutory consumer law, you acknowledge that performance begins immediately upon installation. You may terminate this contract at any time with immediate effect simply by uninstalling the application.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App and Services",
        content: [
          "Core Educational Platform: PythonWithKaran is an educational companion mobile application delivering curriculum notes, chapter summaries, MCQs, practical code examples, video lectures, and previous year question papers (PYQs) for CBSE Computer Science (Code 083), Informatics Practices (Code 065), Information Technology (Code 402/802), and Artificial Intelligence (Code 417/843).",
          "Instant-Access & Zero-Account Architecture: The App operates with an instant-access, local-first architecture. You do not need to register an account, supply an email address, or maintain cloud login credentials to access learning materials.",
          "Local-Only Progress Persistence: All quiz scores, chapter completion history, bookmarks, and video watch records are stored strictly on your local device storage using Hive cache. No student profile data is transmitted to or held on remote cloud user databases.",
          "Free-to-Use Service: All syllabus chapters, notes, and interactive quizzes are provided 100% free of charge, supported solely by non-intrusive advertisements.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. User Responsibilities & Acceptable Use",
        content: [
          "Lawful Use Only: You agree to use PythonWithKaran exclusively for personal, non-commercial educational study and in full compliance with all applicable local, national, and international laws.",
          "Prohibition on Commercial Exploitation: You may not scrape, copy, extract, repackage, sell, license, or commercially redistribute study notes, PDF documents, MCQs, or solutions made available through the application.",
          "Prohibition on Reverse Engineering: You agree not to decompile, reverse engineer, disassemble, decrypt, or attempt to extract source code from the application binary or network streams.",
          "Prohibition on Advertising Fraud & Automated Tools: You strictly agree not to use automated bots, emulators, auto-clickers, macros, or scripts to generate fraudulent AdMob ad impressions, clicks, or artificially trigger rewarded ad unlock events.",
          "Device Security: You are solely responsible for maintaining the physical security of your Android device and ensuring that your device software and operating system meet the technical requirements of the App.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: [
          "Developer Ownership: All original study materials, notes, curated MCQs, code samples, graphics, user interface layouts, icons, branding, and proprietary software in PythonWithKaran are the exclusive intellectual property of Karan Saini and PythonWithKaran.",
          "Limited License Grant: Subject to these Terms, you are granted a personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to install and use the App solely for your personal, non-commercial educational study.",
          "Educational Citation & Nominative Reference: Any references to CBSE (Central Board of Secondary Education), NCERT, or curriculum subject codes are made strictly for nominative, educational reference and identification purposes. PythonWithKaran is an independent educational tool and is not officially affiliated with or endorsed by the CBSE or government education boards.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements (AdMob and Third-Party Ads)",
        content: [
          "Ad-Supported Monetization: To keep educational notes and quizzes completely free for all students, PythonWithKaran is monetized via third-party advertisements delivered by Google Mobile Ads (Google AdMob).",
          "Ad Formats Deployed: The App utilizes standard, family-safe ad formats including adaptive banner ads, occasional interstitial transitions between study sections, and optional rewarded video ads.",
          "Student-Safe Rewarded Ads: Rewarded video ads are strictly voluntary and user-initiated (e.g., opting to view a brief sponsor video to unlock detailed quiz explanations). Users are never penalized or blocked from core syllabus notes if they choose not to view a rewarded ad.",
          "Consent Management (Google UMP): In compliance with the EU GDPR, UK Data Protection Act, and ePrivacy Directive, the App integrates Google's User Messaging Platform (UMP) SDK. EEA and UK users are presented with a consent banner and can modify or revoke their ad consent preferences at any time.",
          "Opt-Out Choices: You may opt out of personalized interest-based advertising at any time via Android Settings (Settings > Google > Ads > Delete advertising ID) or by visiting Google's ad settings at https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "Integrated Service Providers: PythonWithKaran integrates standard third-party services including Google Mobile Ads (AdMob) for advertising, Google Firebase for anonymous crash diagnostics, Supabase for public educational PDF document storage, and YouTube API Services for streaming video lessons.",
          "YouTube Terms of Service: By accessing tutorial videos streamed via the integrated YouTube player, you agree to be bound by the YouTube Terms of Service (https://www.youtube.com/t/terms) and Google Privacy Policy (https://policies.google.com/privacy).",
          "Independent Policies: Third-party services operate under their own independent terms of service and privacy policies. The Developer does not control and is not liable for third-party practices, content, or network availability.",
          "External Links Disclaimer: The App may contain links to external educational resources. We do not endorse, guarantee, or assume responsibility for external websites or third-party content.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "Provided 'AS IS' & 'AS AVAILABLE': To the maximum extent permitted by applicable law, PythonWithKaran and all included educational materials, notes, code snippets, and quizzes are provided on an 'AS IS' and 'AS AVAILABLE' basis without warranty of any kind, whether express, statutory, or implied.",
          "No Academic or Examination Guarantees: While we make every reasonable effort to ensure the accuracy and currency of educational notes and quiz solutions, we make no representation, warranty, or guarantee that studying through the App will guarantee specific exam scores, test results, or academic grades.",
          "No Guarantee of Continuous Operation: We do not warrant that the application will operate uninterrupted, secure, or free from minor software bugs, network outages, or device compatibility anomalies.",
          "Preservation of Consumer Rights: Nothing in these Terms shall limit or exclude any statutory legal guarantees of conformity for digital content that cannot be excluded under applicable consumer protection legislation, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "Exclusion of Consequential Damages: To the fullest extent permitted by applicable law, Karan Saini and PythonWithKaran shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or related to your access to, use of, or inability to use the App.",
          "Local Data Reset Liability: Because all student bookmarks, quiz records, and study progress are stored exclusively on your device's local Hive cache, the Developer bears no liability for data loss resulting from device resets, operating system upgrades, storage clearing, or device loss.",
          "Monetary Cap: In no event shall our total aggregate liability for all claims arising out of or relating to these Terms or the App exceed the total amount paid by you to use the App (which is $0.00 / INR 0, as the App is free) or USD $10.00, whichever is greater.",
          "Mandatory Statutory Exceptions: Some jurisdictions do not allow certain liability exclusions; in such jurisdictions, our liability shall be limited to the minimum extent permitted by mandatory law.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        content: [
          "Right to Modify: We reserve the right, at our sole discretion, to modify, update, or replace these Terms of Service at any time to reflect updates to the App, new Google Play policies, or changing legal and regulatory requirements.",
          "Notice of Updates: Any material modifications will be reflected by updating the 'Last Updated' date at the top of these Terms and publishing the revised terms on our official legal portal.",
          "Continued Acceptance: Your continued use of PythonWithKaran following the posting of updated Terms constitutes your binding agreement to and acceptance of the revised Terms. If you do not accept the changes, your sole remedy is to discontinue using and uninstall the App.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact Information & Google Play Trader Disclosures",
        content: [
          "Trader Identification (EU Digital Services Act): In compliance with Article 30 of the EU Digital Services Act (DSA) and Google Play Trader disclosure requirements, the legal provider of this application is:",
          "Developer / Trader Name: Karan Saini",
          "Trading / App Name: PythonWithKaran",
          "Official Developer Email: pythonwithkaran.official@gmail.com",
          "Support & Legal Contact: pythonwithkaran.official@gmail.com",
          "Country & Jurisdiction of Establishment: India",
          "Self-Certification Commitment: The Trader hereby self-certifies that it only offers products and services that comply with applicable rules of European Union law, Indian law, and Google Play Developer Program Policies.",
          "Consumer Dispute Resolution: For inquiries, bug reports, or legal notices regarding these Terms, please contact us at pythonwithkaran.official@gmail.com. We aim to respond to consumer inquiries within 48 to 72 business hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "No account required (Instant access / Zero sign-up architecture). All study progress, bookmarks, and cached files are stored locally on your device. To erase all data immediately, go to Android Settings -> Apps -> PythonWithKaran -> Storage -> Clear Data / Clear Storage, or uninstall the app from your device.",
    deletedDataTypes: [
      "Local Hive cache records (display name and avatar choice)",
      "Quiz completion history, MCQ scores, and chapter progress",
      "Bookmarked notes and saved video favorites list",
      "Locally cached PDF study materials and syllabus documents",
    ],
    retainedDataTypes: [],
    retentionReason:
      "PythonWithKaran does not collect, transmit, or retain any personal data on cloud servers. No remote data is retained.",
    processingTime: "Instant (Local device action / Uninstallation)",
    supportEmail: "pythonwithkaran.official@gmail.com",
  },
};
