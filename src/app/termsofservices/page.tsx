import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getAllApps, appsRegistry } from "@/config/apps";
import {
  FileText,
  ShieldCheck,
  Scale,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Mail,
  Smartphone,
  Globe,
  Building,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Legal Compliance Hub | Google Play Trader Portal",
  description:
    "Official centralized Terms of Service and legal compliance directory for mobile applications published by developer Karan Saini. Fully compliant with Google Play Console Trader rules and the EU Digital Services Act (DSA).",
};

export default function TermsOfServicesHubPage() {
  const publishedApps = getAllApps();
  const allAppsList = Object.values(appsRegistry);

  // Specific canonical slug mappings for app-specific terms
  const slugLinkMap: Record<string, string> = {
    pythonwithkaran: "/termsofservices/pythonwithkaran",
    periodictableexplorer: "/termsofservices/periodic-table-explorer",
    ncertmathformulashub: "/termsofservices/ncert-math-formulas-hub",
    purplemonster: "/termsofservices/purple-monster",
    fontzyle: "/termsofservices/fontzyle",
    mithaimerge: "/termsofservices/mithai-merge",
    smartpaper: "/termsofservices/smartpaper",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="absolute -right-12 -top-12 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            Official Terms of Service & Legal Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-100">
            Terms of Service & Legal Center
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Central repository of official Terms of Service agreements for all mobile applications published by developer Karan Saini. This legal portal satisfies all developer disclosures under Google Play Developer Program Policies, the European Union Digital Services Act (DSA), and UK consumer protection regulations.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Google Play Trader Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>EU Digital Services Act (DSA) Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Dedicated App-Specific Terms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Play Trader Status & EU DSA Compliance Disclosure Card */}
      <div className="bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Google Play Trader Status & EU DSA Declarations
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mandatory legal disclosures pursuant to Article 30 of the EU Digital Services Act (Regulation EU 2022/2065)
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle className="w-3.5 h-3.5" />
            Verified Trader Declaration
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-1">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Developer / Trader</span>
            <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Karan Saini</p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px]">Individual Software Developer</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-1">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Official Contact Email</span>
            <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm font-mono truncate">
              pythonwithkaran.official@gmail.com
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px]">Direct Support & Grievances</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-1">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Jurisdiction & Location</span>
            <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">India</p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px]">Governing Law & Establishment</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 space-y-1">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Trader Self-Certification</span>
            <p className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm">Legally Certified</p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px]">Compliant with EU Consumer Law</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong>Statutory Consumer Rights Notice (EU/EEA & UK):</strong> All applications listed below are distributed as free digital services with zero mandatory subscription fees or upfront monetary charges. In accordance with EU Directive (EU) 2019/770 and national consumer legislation, performance begins immediately upon installation. Consumers retain the statutory right to terminate their contract at any time simply by ceasing use and uninstalling the application.
          </p>
        </div>
      </div>

      {/* App Directory - Dedicated App-Specific Terms of Service Pages */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              App-Specific Terms of Service Pages
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Select an application below to view its dedicated, Google Play-compliant Terms of Service page answering all 10 legal requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publishedApps.map((app) => {
            const termsUrl = slugLinkMap[app.metadata.id] || `/termsofservices/${app.metadata.id}`;
            return (
              <div
                key={app.metadata.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-900/60">
                        {app.metadata.category} • v{app.metadata.version}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {app.metadata.name}
                      </h3>
                    </div>
                    <div className="text-right text-[11px] text-slate-400">
                      <div>Updated: {app.metadata.lastUpdated}</div>
                      <div className="font-mono text-[10px] mt-0.5">{app.metadata.packageName}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {app.metadata.description}
                  </p>

                  {/* Summary of 10 Legal Clauses Answered */}
                  <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      Includes All 10 Required Terms Sections:
                    </div>
                    <p className="text-[10px] leading-normal text-slate-500 dark:text-slate-400">
                      1. Acceptance & DSA Trader • 2. App Description & Offline Tech • 3. User Responsibilities • 4. Intellectual Property • 5. AdMob Ads & UMP Consent • 6. Third-Party SDKs • 7. Warranty Disclaimer • 8. Liability Limits • 9. Term Changes • 10. Trader Contact.
                    </p>
                  </div>
                </div>

                {/* Direct Action Link to App-Specific Terms */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                  <Link
                    href={termsUrl}
                    className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all duration-150"
                  >
                    <span>View {app.metadata.name} Terms of Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1">
                    <Link
                      href={`/${app.metadata.id}/privacy`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <span>•</span>
                    <Link
                      href={`/${app.metadata.id}/delete-account`}
                      className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      Account Deletion
                    </Link>
                    <span>•</span>
                    <span className="font-mono text-[10px] text-slate-400">{termsUrl}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Common Legal Framework - What the Terms of Service Include */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Standard Legal Framework Across All Applications
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Every application published in our catalog includes a comprehensive, tailored Terms of Service document addressing the following 10 core legal sections required by Google Play Console policies and global consumer protection standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                1
              </span>
              Acceptance of Terms & Trader Acknowledgment
            </h3>
            <p>
              Establishes a legally binding agreement between the user and developer Karan Saini. Includes eligibility criteria for students and minors (parental/guardian guidance), formal declaration of Google Play Trader Status under Article 30 of the EU Digital Services Act (DSA), and consumer right of withdrawal information.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                2
              </span>
              Description of the App & Offline Architecture
            </h3>
            <p>
              Provides an accurate description of the app’s purpose, curriculum focus, or gameplay mechanics. Explains the account-free, privacy-first local sandbox architecture (where all study notes, bookmarks, high scores, and settings are stored locally on-device without cloud profiles).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                3
              </span>
              User Responsibilities & Acceptable Use
            </h3>
            <p>
              Outlines acceptable non-commercial educational or entertainment usage. Strictly prohibits decompiling, reverse engineering, scraping databases for commercial resale, memory cheating, and using automated bots, click farms, or emulators to generate fraudulent ad clicks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                4
              </span>
              Intellectual Property Rights & Limited License
            </h3>
            <p>
              Protects proprietary software code, custom illustrations, Bohr models, monster artwork, sound effects, quiz algorithms, and curricula. Grants users a personal, non-exclusive, non-transferable revocable license for personal study or entertainment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                5
              </span>
              Advertisements (AdMob and Third-Party Ads)
            </h3>
            <p>
              Discloses ad monetization via Google Mobile Ads (AdMob) to keep all apps 100% free. Details ad formats (banners, interstitials, App Open, and voluntary rewarded video ads), player/student safety rules, Google UMP consent for EEA/UK, and ad personalization opt-outs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                6
              </span>
              Third-Party Services & Integrations
            </h3>
            <p>
              Clarifies the use of third-party SDKs (Google Play Services, AdMob, Google Fonts, YouTube API Services, Supabase) and informs users that third-party services operate under their own independent terms and privacy policies.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                7
              </span>
              Disclaimer of Warranties
            </h3>
            <p>
              Delivered on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of uninterrupted uptime or specific academic grades or exam scores. Explicitly preserves statutory conformity guarantees under EU Directive (EU) 2019/770.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                8
              </span>
              Limitation of Liability
            </h3>
            <p>
              Limits developer liability to the maximum extent permitted by law, excluding consequential or indirect damages. Clarifies that the developer is not liable for local device data loss caused by clearing app cache, device resets, or hardware failure.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                9
              </span>
              Changes and Modifications to Terms
            </h3>
            <p>
              Reserves the right to update or modify these Terms to conform with new app features, regulatory mandates, or Google Play policies. Notifies users via updated &quot;Last Updated&quot; timestamps on our web portal.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                10
              </span>
              Contact Information & Dispute Redressal
            </h3>
            <p>
              Provides verified trader identity (Karan Saini), official support emails, physical jurisdiction (India), DSA self-certification commitment, and consumer dispute redressal timelines (48–72 hours).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

