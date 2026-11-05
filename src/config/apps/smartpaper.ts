import { AppConfig } from "@/types/app-config";

export const smartPaperConfig: AppConfig = {
  metadata: {
    id: "smartpaper",
    name: "SmartPaper",
    packageName: "com.pwk.smartpaper",
    category: "Productivity",
    description: "Smart paper scanner and document organization tool for mobile users.",
    logoUrl: "/apps/smartpaper/logo.png",
    version: "1.0.0",
    effectiveDate: "August 8, 2026",
    lastUpdated: "August 8, 2026",
    platform: "Android",
    published: false,
  },
  developer: {
    name: "Karan Saini",
    companyName: "SmartPaper App",
    email: "pythonwithkaran.official@gmail.com",
    supportEmail: "pythonwithkaran.official@gmail.com",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "SmartPaper ('we', 'our', or 'us') provides document scanning and organization tools. This Privacy Policy details how data is handled for SmartPaper.",
    dataCollection: [
      {
        category: "Device Camera & Media Access",
        items: ["Camera photo capture", "Local storage document export"],
        purpose: "Used locally on device to scan documents into digital PDFs.",
        isRequired: true,
        sharedWithThirdParties: false,
      },
    ],
    thirdPartyServices: [
      {
        name: "Firebase Analytics",
        provider: "Google LLC",
        purpose: "Collects anonymous crash statistics.",
        privacyPolicyUrl: "https://firebase.google.com/support/privacy",
      },
    ],
    dataUsePurposes: ["Process local document scans", "Improve app performance"],
    dataRetentionPolicy: "All document scans remain stored locally on your device unless exported by you.",
    securityPractices: ["Local encryption of document cache"],
    childrensPrivacy: "SmartPaper is general audience productivity software.",
    userRights: ["Control camera permissions in device settings", "Clear app storage"],
    changesToPolicy: "Updates posted on this portal.",
  },
  terms: {
    introduction:
      "Welcome to SmartPaper. These Terms of Service ('Terms') constitute a legally binding agreement between you ('User', 'you', or 'your') and Karan Saini ('Developer', 'Trader', 'we', 'us', or 'our') governing your use of the SmartPaper mobile application (Package Name: com.pwk.smartpaper). This application is provided as a mobile document scanning and productivity utility and complies with applicable consumer protection laws and Google Play Console Trader requirements under the EU Digital Services Act (DSA).",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "Binding Agreement: By downloading, installing, accessing, or using SmartPaper, you confirm that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must refrain from using the application and uninstall it immediately.",
          "Eligibility & General Audience: SmartPaper is intended for general audience productivity and document organization. Users under 18 years of age confirm that they have reviewed these Terms with a parent or legal guardian.",
          "Google Play Trader Status Declaration: In compliance with Article 30 of the EU Digital Services Act (DSA) (Regulation EU 2022/2065), the developer is registered as a 'Trader' on Google Play, providing digital productivity software to users globally, including the European Economic Area (EEA) and the United Kingdom.",
          "Right of Withdrawal (EU/EEA & UK Consumers): SmartPaper is provided 100% free of charge without upfront monetary payment. Under statutory consumer law, performance begins immediately upon download. You retain the right to terminate this agreement at any time simply by uninstalling the application.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App and Services",
        content: [
          "Document Scanning & Organization Utility: SmartPaper is a mobile productivity utility providing camera-based document scanning, border cropping, image filters, and local PDF document export.",
          "On-Device Processing: Document image transformations and PDF conversions are executed locally on your physical Android device. Scanned documents are never uploaded to remote cloud servers without your explicit manual export command.",
          "Account-Free Architecture: The application requires zero user registration or cloud accounts. You have instant access to scanner features upon launch.",
          "Local Document Storage: Scanned document drafts and user preferences reside strictly in local on-device application storage unless explicitly shared or exported by you.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "3. User Responsibilities & Acceptable Use",
        content: [
          "Lawful Document Processing: You agree to use SmartPaper exclusively for lawful document scanning and organization purposes in compliance with all applicable laws.",
          "Prohibition on Unlawful Material: You agree not to use the application to photograph, digitize, or store illegal, counterfeit, fraudulent, infringing, or abusive documents.",
          "Prohibition on Reverse Engineering: You agree not to decompile, reverse engineer, disassemble, or extract proprietary code or scanner image algorithms from the application binary.",
          "Device & Data Security: You are solely responsible for maintaining the physical security of your Android device and backing up any exported PDF documents.",
        ],
      },
      {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: [
          "Developer Ownership: All application software code, scanner filters, algorithms, UI design elements, icons, and branding in SmartPaper are the exclusive intellectual property of Karan Saini.",
          "User Content Ownership: You retain 100% full and exclusive ownership of all documents, images, and files scanned or generated using SmartPaper.",
          "Limited License Grant: You are granted a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to use the App for personal or business productivity.",
        ],
      },
      {
        id: "advertisements",
        title: "5. Advertisements (AdMob and Third-Party Ads)",
        content: [
          "Ad-Supported Model: To maintain free document scanning utilities for mobile users, SmartPaper may display non-intrusive advertisements served via Google AdMob in accordance with Google Play Developer Policies.",
          "Consent Management (Google UMP): In compliance with GDPR and ePrivacy regulations, the Google User Messaging Platform (UMP) captures and manages explicit consent for users in the EEA and UK.",
          "Opt-Out Options: Users may opt out of personalized advertising via Android Settings (Settings > Google > Ads) or via Google Ads Settings at https://adssettings.google.com.",
        ],
      },
      {
        id: "third-party-services",
        title: "6. Third-Party Services",
        content: [
          "Integrated Service Providers: Integrates Google Play Services and Google Firebase for anonymous diagnostic telemetry.",
          "Third-Party Policies: Third-party services operate under their own independent terms and privacy policies (https://policies.google.com/privacy). We do not control and are not liable for third-party network availability.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "Provided 'AS IS' & 'AS AVAILABLE': SmartPaper is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind, whether express, statutory, or implied.",
          "No Legal or Optical Accuracy Guarantee: While document enhancement algorithms strive for clarity, the Developer makes no warranty that digital scans will be legally acceptable for all official, judicial, or governmental notarization requirements.",
          "Preservation of Consumer Guarantees: Nothing in these Terms limits or excludes non-waivable statutory consumer guarantees of conformity under applicable consumer legislation, including EU Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "Exclusion of Consequential Damages: To the maximum extent permitted by applicable law, Karan Saini shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the application.",
          "Local Document Loss Disclaimer: Because scanned document drafts reside strictly in local on-device cache, the Developer bears no liability for document loss resulting from device resets, storage wipes, or uninstallation.",
          "Liability Cap: In no event shall our total aggregate liability for all claims related to SmartPaper exceed the amount paid by you ($0.00 / INR 0) or USD $10.00, whichever is greater.",
        ],
      },
      {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        content: [
          "Modifications & Revisions: We reserve the right to amend or update these Terms of Service at any time to reflect software updates or regulatory changes.",
          "Publication of Updates: Changes become effective upon publication on this portal, marked by the revised 'Last Updated' date.",
          "Continued Use: Continued installation or use of SmartPaper constitutes acceptance of the revised Terms.",
        ],
      },
      {
        id: "contact-information",
        title: "10. Contact Information & Google Play Trader Disclosures",
        content: [
          "Trader Identification (EU Digital Services Act): In compliance with Article 30 of the EU Digital Services Act (DSA) and Google Play Trader disclosure requirements, the legal provider of this application is:",
          "Developer / Trader Name: Karan Saini",
          "Trading / App Name: SmartPaper App",
          "Official Contact Email: pythonwithkaran.official@gmail.com",
          "Support & Legal Inquiries: pythonwithkaran.official@gmail.com",
          "Country & Jurisdiction of Establishment: India",
          "Self-Certification Commitment: The Trader hereby self-certifies that it only offers products and services that comply with applicable rules of European Union law, Indian law, and Google Play Developer Program Policies.",
          "Consumer Inquiries: For questions, feedback, or legal notices, please contact pythonwithkaran.official@gmail.com. We respond to verified user queries within 48 to 72 business hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath: "No account required. Uninstall app to remove local cache.",
    deletedDataTypes: ["Local document cache", "App preferences"],
    retainedDataTypes: [],
    processingTime: "Instant (local uninstall)",
    supportEmail: "pythonwithkaran.official@gmail.com",
  },
};
