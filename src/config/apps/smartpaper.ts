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
  },
  developer: {
    name: "Karan",
    companyName: "SmartPaper App",
    email: "smartpaper@pythonwithkaran.com",
    supportEmail: "support@pythonwithkaran.com",
    website: "https://pythonwithkaran.com",
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
    introduction: "Terms of service for SmartPaper app usage.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: "By installing SmartPaper, you agree to these terms.",
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath: "No account required. Uninstall app to remove local cache.",
    deletedDataTypes: ["Local document cache", "App preferences"],
    retainedDataTypes: [],
    processingTime: "Instant (local uninstall)",
    supportEmail: "support@pythonwithkaran.com",
  },
};
