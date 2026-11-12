import { AppConfig } from "@/types/app-config";

export const pyKakshaConfig: AppConfig = {
  metadata: {
    id: "pykaksha",
    name: "PyKaksha – Python for Class 11 & 12",
    packageName: "com.pykaksha.app",
    category: "Education",
    description:
      "PyKaksha ('kaksha' means classroom) is a free, offline Python IDE for Android, built for CBSE Class 11–12 Computer Science (083) and Informatics Practices (065) students. It runs real CPython 3.13 on the device with NumPy, pandas and Matplotlib preinstalled, an interactive console where input() works, inline charts, a working turtle module, and a MySQL-compatible layer (mysql.connector, pymysql and SQLAlchemy mysql:// URLs backed by on-device SQLite) so board practical programs run without a server. It includes a code editor with syntax highlighting, a Files manager for .py, .txt, .csv, .dat and .db files, and 189 built-in syllabus example programs. It needs no login, has no in-app purchases and no servers of its own; all programs and files stay on the device. The App is supported by Google AdMob ads.",
    version: "1.0.0",
    effectiveDate: "November 12, 2026",
    lastUpdated: "November 12, 2026",
    platform: "Android",
    published: true,
  },
  developer: {
    name: "Karan Saini",
    companyName: "PyKaksha",
    email: "officialworldwithtechnology@gmail.com",
    supportEmail: "officialworldwithtechnology@gmail.com",
    website: "https://pythonwithkaran.vercel.app/pykaksha",
    jurisdiction: "India",
  },
  privacy: {
    introduction:
      "Welcome to PyKaksha ('we', 'our', or 'the App'). We respect your privacy. This Privacy Policy explains what information the App processes, how our advertising partner Google AdMob may interact with your device, and the rights and choices you have under applicable privacy laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA / CPRA), the Children's Online Privacy Protection Act (COPPA) and India's Digital Personal Data Protection Act, 2023 (DPDP Act). By installing and using PyKaksha you agree to the practices described here.",
    dataCollection: [
      {
        category: "Information We DO NOT Collect",
        items: [
          "No accounts or logins: PyKaksha has no sign-up, username or password, and no servers of our own.",
          "No personal identifiers: we do not collect your name, email address, phone number, contacts or photos.",
          "No location permission: the App does not request GPS or network location permissions.",
          "No camera, microphone, contacts or phone-state access.",
          "No storage permission: files are imported and exported only through Android's system file picker (Storage Access Framework), and only the files you choose.",
          "No payments: the App has no in-app purchases and never handles payment information.",
        ],
        purpose:
          "PyKaksha is designed to work offline. The Python runtime, libraries and example programs are inside the App.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Your Programs and Files (Stored Only on Your Device)",
        items: [
          "Python programs you write, and text, CSV, binary (.dat) and database (.db) files your programs create, stored in the App's private workspace folder.",
          "SQLite databases created through the MySQL-compatible layer (mysql.connector, pymysql, SQLAlchemy), stored in the workspace's databases folder.",
          "Charts and turtle drawings your programs produce.",
          "Settings: theme, editor font size and the time an ad-free hour ends.",
        ],
        purpose:
          "We never upload, collect or see your programs or files. They stay in the App's private storage until you delete them in the Files screen, clear the App's storage, or uninstall the App. If Android backup is enabled on your device, your workspace and settings may be included in your own Google account backup, which is controlled by you and Google; ad and consent data are excluded from backup.",
        isRequired: false,
        sharedWithThirdParties: false,
      },
      {
        category: "Network Use and Other Features",
        items: [
          "Internet is used by the App only to load ads and the Google consent form. Writing and running programs works offline.",
          "If a program you write yourself uses the network (for example sockets), that connection is made by your program, to the address you choose.",
          "No analytics or crash-reporting SDKs of our own, no push notifications, no cloud sync, no social features and no user-generated content shared with others.",
          "Runtime installation of packages from the internet (pip) is not supported; only the preinstalled libraries are available.",
        ],
        purpose: "Apart from Google's advertising services, the App does not talk to any server.",
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
          "PyKaksha is free and supported by ads from Google AdMob. Banner ads appear at the bottom of the Editor, Files and Examples screens, never on the Console screen and never over your code or keyboard. An interstitial (full-screen) ad may appear only when you leave the Console after a program has finished: at most once every 4 minutes, never in the first 3 minutes of a session, never after a stopped or crashed run, and never while a program waits for input(). A rewarded ad plays only if you choose Settings > '1 hour ad-free' (watch an optional ad), which removes banner and interstitial ads for 60 minutes. Ads are limited to content rated suitable for teens (maximum content rating T), and no ads are requested until the Google consent flow allows it. Your programs and files are never shared with AdMob.",
        isRequired: true,
        sharedWithThirdParties: true,
      },
      {
        category: "Android Permissions",
        items: [
          "android.permission.INTERNET: to load ads and the consent form.",
          "android.permission.ACCESS_NETWORK_STATE: to check for an internet connection before requesting ads.",
          "com.google.android.gms.permission.AD_ID and Android Privacy Sandbox ad-services permissions: added by the Google Mobile Ads SDK for ad delivery and measurement.",
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
          "Serves banner, interstitial and optional rewarded ads. Processes the advertising ID, IP-based approximate location and ad interaction data as described above.",
        privacyPolicyUrl: "https://policies.google.com/technologies/ads",
      },
      {
        name: "Google User Messaging Platform (UMP SDK)",
        provider: "Google LLC",
        purpose:
          "Shows the consent form where required (for example in the EEA, UK, Switzerland and some US states) and stores your choices. You can change them any time in Settings > Ad privacy choices.",
        privacyPolicyUrl: "https://policies.google.com/technologies/partner-sites",
      },
      {
        name: "Chaquopy (Python runtime for Android)",
        provider: "Chaquo Ltd",
        purpose:
          "Embeds CPython inside the App so programs run on your device. It runs entirely offline and sends no data anywhere.",
        privacyPolicyUrl: "https://chaquo.com/chaquopy/",
      },
      {
        name: "Google Privacy Policy",
        provider: "Google LLC",
        purpose: "Governs how Google processes data collected through its advertising services.",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    dataUsePurposes: [
      "Let you write, run, save, import and export Python programs and data files offline.",
      "Run syllabus programs that use files, pickle, csv, NumPy, pandas, Matplotlib, turtle and MySQL-style database connectivity on your device.",
      "Remember your theme, editor font size and ad-free period.",
      "Show ads through Google AdMob so the App can stay free.",
      "Collect and respect advertising consent choices through Google UMP where required by law.",
      "Allow ad frequency capping, measurement and fraud prevention by Google.",
    ],
    dataRetentionPolicy:
      "Your programs, files, databases and settings remain on your device until you delete them, clear the App's storage, or uninstall the App. We run no servers and keep no copy of your data. If Android backup is enabled, a copy of your workspace may exist in your own Google account backup under Google's control. Advertising data processed by Google is retained according to Google's policies (https://policies.google.com/privacy).",
    securityPractices: [
      "No accounts: no passwords or credentials are created, stored or transmitted.",
      "Private app storage: your workspace is kept in Android's private, per-app storage that other apps cannot read.",
      "No broad storage access: imports and exports go through the system file picker, and only the files you pick are touched.",
      "Encrypted connections: ad traffic uses HTTPS (TLS), and the App disallows unencrypted (cleartext) traffic.",
      "Minimal permissions: no sensitive permissions are requested.",
    ],
    childrensPrivacy:
      "PyKaksha is meant for students aged 13 and older and is not directed at children under 13. In Google Play Console the target audience is set to 13–15, 16–17 and 18+, and the App is not enrolled in the Families program. We do not knowingly collect personal information from children under 13 (or under 16 where local law requires); the App has no accounts and collects no personal information itself. Ads are limited to content rated suitable for teens. If a parent or guardian believes a child has provided personal information, please contact officialworldwithtechnology@gmail.com.",
    userRights: [
      "Delete your data: delete files in the App's Files screen, clear the App's storage in Android Settings, or uninstall the App.",
      "Export your data: export any program or file through the Files screen to a location you choose.",
      "Change ad consent (GDPR / UK GDPR and applicable US state laws): where the consent form applies, use Settings > Ad privacy choices at any time.",
      "Opt out of personalised ads (CCPA / CPRA and everyone): reset or delete your advertising ID in Android Settings > Google > Ads, or manage ad settings at https://adssettings.google.com.",
      "DPDP Act (India): you may contact us for grievance redressal at officialworldwithtechnology@gmail.com.",
      "Non-discrimination: changing consent or deleting data never limits the App's features.",
    ],
    internationalTransfers:
      "We do not operate servers and do not transfer your data. Ad requests and consent checks are processed by Google on its global infrastructure in line with Google's Privacy Policy and applicable transfer safeguards.",
    changesToPolicy:
      "We may update this Privacy Policy when the App or legal requirements change. The 'Last Updated' date above will show the latest version. Continued use of the App after an update means you accept the updated policy.",
  },
  terms: {
    introduction:
      "These Terms of Service ('Terms') are an agreement between you and Karan Saini ('Developer', 'we', 'us') for the PyKaksha mobile application (package name: com.pykaksha.app). PyKaksha is a free, ad-supported Python learning and practice app.",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: [
          "By installing or using PyKaksha you agree to these Terms and our Privacy Policy. If you do not agree, please uninstall the App.",
          "PyKaksha is intended for users aged 13 and older. Users under 18 should review these Terms with a parent or guardian.",
          "Google Play Trader status (EU Digital Services Act): the Developer offers this App on Google Play as a trader to users worldwide, including the EEA and the UK.",
          "Right of withdrawal: PyKaksha is free with no in-app purchases. You can end this agreement at any time by uninstalling the App.",
        ],
      },
      {
        id: "description-of-app",
        title: "2. Description of the App",
        content: [
          "Editor: a code editor with line numbers, Python syntax highlighting, auto-indent, bracket and quote pairing, a symbol bar, undo/redo and autosave.",
          "Console: real-time program output (errors in red), interactive input() support, inline Matplotlib charts and turtle drawings, Stop, Clear and copy output.",
          "Python runtime: CPython 3.13 runs on your device with the standard library plus NumPy, pandas, Matplotlib, Pillow and SQLAlchemy preinstalled. tkinter is not available on Android, and packages cannot be installed from the internet.",
          "Database practicals: a MySQL-compatible layer translates mysql.connector, pymysql and SQLAlchemy mysql:// code to an on-device SQLite database. It is not a real MySQL server; known gaps (such as stored procedures, some ALTER TABLE forms and user/grant statements) are described in the App.",
          "Files: a private workspace for .py, .txt, .csv, .dat, .db and image files, with open, rename, delete, import and export.",
          "Examples: 189 built-in programs covering CBSE Class 11–12 Computer Science and Informatics Practices practicals and practice sets, which open as editable copies.",
          "Settings: light, dark or system theme, editor font size, Ad privacy choices, an optional '1 hour ad-free' reward, and open-source licences.",
          "The App works offline except for ads, and it is offered free of charge on Google Play in English.",
        ],
      },
      {
        id: "independence",
        title: "3. Independence and Accuracy",
        content: [
          "PyKaksha is an independent app. It is not affiliated with, endorsed by, or sponsored by CBSE, NCERT or the Python Software Foundation. 'Python' is a trademark of the Python Software Foundation and 'CBSE' is used only to describe the syllabus covered.",
          "Example programs are provided for learning and practice. Always follow your teacher's and board's current instructions for practical files and exams.",
          "Program behaviour can differ from desktop Python where Android does not support a feature (for example tkinter) or where the MySQL-compatible layer differs from a real MySQL server.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "4. Acceptable Use",
        content: [
          "Use the App for lawful learning, practice and personal projects.",
          "You are responsible for the programs you write and run, including any network connections your own programs make.",
          "Do not use bots, scripts or other automated means to generate ad impressions, ad clicks or rewarded-ad completions.",
          "Do not decompile, reverse engineer or redistribute the App or its example library.",
        ],
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property and Open Source",
        content: [
          "The App's code, design, icon and example library belong to the Developer, except for open-source components.",
          "Open-source components and their licences include CPython (PSF License), Chaquopy (MIT), NumPy, pandas, Matplotlib, Pillow and SQLAlchemy (BSD/MIT/PSF-style). They are listed in Settings > Open-source licences.",
          "Programs you write are yours.",
          "You receive a limited, personal, revocable, non-exclusive, non-transferable licence to use the App.",
        ],
      },
      {
        id: "advertisements",
        title: "6. Advertisements",
        content: [
          "PyKaksha is free because it shows ads from Google AdMob: banner ads at the bottom of the Editor, Files and Examples screens only (never on the Console).",
          "An interstitial ad may appear only when you leave the Console after a finished program, at most once every 4 minutes, never in the first 3 minutes of a session, never after a stopped or crashed run, and never while a program is waiting for input.",
          "The rewarded ad is optional: Settings > '1 hour ad-free' (watch an optional ad) removes banner and interstitial ads for 60 minutes. Declining it never limits any feature.",
          "Where required by law, a Google consent form is shown before ads are requested. You can change your choices in Settings > Ad privacy choices, and manage personalised ads in Android Settings > Google > Ads or at https://adssettings.google.com.",
        ],
      },
      {
        id: "disclaimer-of-warranties",
        title: "7. Disclaimer of Warranties",
        content: [
          "The App is provided 'as is' and 'as available' without warranties of any kind, to the extent permitted by law.",
          "We do not guarantee that every program will run identically to desktop Python, or that the App will be error-free or compatible with every device.",
          "Nothing in these Terms limits statutory consumer rights that cannot be excluded under applicable law, including Directive (EU) 2019/770.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "8. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, the Developer is not liable for indirect, incidental, special or consequential damages arising from use of the App.",
          "Your files are stored only on your device. Export copies of important work; we are not responsible for files lost through deleting them, clearing data, resetting your device or uninstalling the App.",
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
          "App: PyKaksha – Python for Class 11 & 12",
          "Package name: com.pykaksha.app",
          "Distribution platform: Google Play",
          "Price: free. No in-app purchases, subscriptions or other payments.",
          "Contact email: officialworldwithtechnology@gmail.com",
          "Support email: officialworldwithtechnology@gmail.com",
          "Website: https://pythonwithkaran.vercel.app/pykaksha",
          "Privacy Policy: https://pythonwithkaran.vercel.app/pykaksha/privacy",
          "Data deletion: https://pythonwithkaran.vercel.app/pykaksha/delete-account",
          "Country of establishment and governing jurisdiction: India",
          "The trader's verified postal address and phone number are shown on the App's Google Play store listing, as provided to Google Play.",
          "The Developer self-certifies that it offers only products that comply with applicable EU law, Indian law and Google Play Developer Program Policies.",
          "Complaints and support: for questions, bug reports, programs that do not run as expected, or legal notices, email officialworldwithtechnology@gmail.com. We aim to reply within 72 hours.",
        ],
      },
    ],
  },
  accountDeletion: {
    supportsAccountCreation: false,
    inAppDeletionPath:
      "PyKaksha has no accounts. All programs and files are stored on your device. To delete them: open PyKaksha > Files and delete individual files, or go to Android Settings > Apps > PyKaksha > Storage > Clear storage, or uninstall the App.",
    deletedDataTypes: [
      "Python programs and data files (.py, .txt, .csv, .dat, images) in the workspace",
      "SQLite databases created by the MySQL-compatible layer",
      "Settings (theme, editor font size, ad-free period)",
    ],
    retainedDataTypes: [],
    retentionReason: "PyKaksha stores no data on any server, so nothing is retained after deletion.",
    processingTime: "Instant (on-device action)",
    supportEmail: "officialworldwithtechnology@gmail.com",
  },
};
