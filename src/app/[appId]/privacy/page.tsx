import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAppConfig } from "@/config/apps";
import { TableOfContents, TocItem } from "@/components/TableOfContents";
import { ShieldCheck, Mail, Globe, ExternalLink, Calendar, CheckCircle2, Lock, Smartphone } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { appId: string };
}): Promise<Metadata> {
  const app = getAppConfig(params.appId);
  if (!app) return { title: "Privacy Policy Not Found" };

  return {
    title: `${app.metadata.name} Privacy Policy`,
    description: `Official Privacy Policy for ${app.metadata.name} (${app.metadata.packageName}). Details data collection, Firebase, Supabase, YouTube APIs, and user data rights.`,
  };
}

export default function PrivacyPolicyPage({
  params,
}: {
  params: { appId: string };
}) {
  const app = getAppConfig(params.appId);

  if (!app) {
    notFound();
  }

  const tocItems: TocItem[] = [
    { id: "introduction", title: "1. Introduction" },
    { id: "data-collection", title: "2. Information We Collect" },
    { id: "data-use", title: "3. How We Use Information" },
    { id: "third-parties", title: "4. Third-Party Services" },
    { id: "data-security", title: "5. Data Security Practices" },
    { id: "data-retention", title: "6. Data Retention Policy" },
    { id: "account-deletion", title: "7. Account & Data Deletion" },
    { id: "childrens-privacy", title: "8. Children's Privacy" },
    { id: "user-rights", title: "9. User Rights" },
    { id: "international-transfers", title: "10. Data Transfers" },
    { id: "policy-changes", title: "11. Changes to Policy" },
    { id: "contact-us", title: "12. Contact Us" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Official Compliance Document
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              {app.metadata.name} Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Application ID / Package: {app.metadata.packageName}
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400 md:text-right bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
            <div>
              <strong className="text-slate-900 dark:text-slate-200">Version:</strong> {app.metadata.version}
            </div>
            <div>
              <strong className="text-slate-900 dark:text-slate-200">Effective Date:</strong> {app.metadata.effectiveDate}
            </div>
            <div>
              <strong className="text-slate-900 dark:text-slate-200">Last Updated:</strong> {app.metadata.lastUpdated}
            </div>
            <div>
              <strong className="text-slate-900 dark:text-slate-200">Developer:</strong> {app.developer.companyName || app.developer.name}
            </div>
          </div>
        </div>

        {/* Quick Nav Badges */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <Link
            href={`/${app.metadata.id}/terms`}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            View Terms & Conditions
          </Link>
          <Link
            href={`/${app.metadata.id}/delete-account`}
            className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950/50 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 transition-colors"
          >
            Account Deletion Web Page
          </Link>
        </div>
      </div>

      {/* Main Grid Layout: Sticky Sidebar ToC + Policy Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <TableOfContents items={tocItems} />
        </div>

        {/* Policy Document Content */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 print-full-width">
          {/* 1. Introduction */}
          <section id="introduction" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              1. Introduction & Overview
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {app.privacy.introduction}
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section id="data-collection" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              2. Information We Collect
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              We collect information to provide, personalize, and synchronize educational features across your devices. The table below specifies the exact data types collected by <strong>{app.metadata.name}</strong>:
            </p>

            <div className="space-y-4">
              {app.privacy.dataCollection.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/60 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                      {group.isRequired ? "Required for Auth" : "Optional Sync"}
                    </span>
                  </div>

                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>

                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                    <strong className="text-slate-700 dark:text-slate-300">Purpose:</strong> {group.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. How We Use Information */}
          <section id="data-use" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              3. How We Use Information
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {app.privacy.dataUsePurposes.map((purpose, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{purpose}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Third-Party Services */}
          <section id="third-parties" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              4. Third-Party SDKs & Service Providers
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>{app.metadata.name}</strong> integrates official third-party SDKs and cloud services to enable authentication, content delivery, and app performance. We do not sell your personal information.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {app.privacy.thirdPartyServices.map((service, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span>{service.name}</span>
                      <span className="text-[10px] font-normal text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                        {service.provider}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {service.purpose}
                    </p>
                  </div>
                  <a
                    href={service.privacyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                  >
                    <span>Privacy Policy</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Data Security Practices */}
          <section id="data-security" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              5. Data Security Practices
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {app.privacy.securityPractices.map((practice, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Data Retention Policy */}
          <section id="data-retention" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              6. Data Retention Policy
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {app.privacy.dataRetentionPolicy}
            </p>
          </section>

          {/* 7. Account & Data Deletion */}
          <section id="account-deletion" className="space-y-3 scroll-mt-24 bg-red-50/50 dark:bg-red-950/20 p-5 rounded-2xl border border-red-200/60 dark:border-red-900/50">
            <h2 className="text-xl font-bold text-red-950 dark:text-red-200 pb-2 border-b border-red-200 dark:border-red-900/60 flex items-center gap-2">
              7. Account & Data Deletion Rights
            </h2>
            <p className="text-sm text-red-900 dark:text-red-300 leading-relaxed">
              Users have the right to request deletion of their account and associated data. You can request deletion directly inside the app menu or through our dedicated external account deletion web resource:
            </p>
            <div className="pt-2">
              <Link
                href={`/${app.metadata.id}/delete-account`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <span>Go to Account Deletion Request Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* 8. Children's Privacy */}
          <section id="childrens-privacy" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              8. Children&apos;s Privacy Notice
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {app.privacy.childrensPrivacy}
            </p>
          </section>

          {/* 9. User Rights */}
          <section id="user-rights" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              9. Your Data Rights & Choices
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {app.privacy.userRights.map((right, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 10. International Transfers */}
          <section id="international-transfers" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              10. International Data Transfers
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {app.privacy.internationalTransfers || "Your information may be stored on secure cloud servers operated by Google Firebase and Supabase in international datacenters."}
            </p>
          </section>

          {/* 11. Changes to Policy */}
          <section id="policy-changes" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {app.privacy.changesToPolicy}
            </p>
          </section>

          {/* 12. Contact Information */}
          <section id="contact-us" className="space-y-3 scroll-mt-24 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2">
              12. Privacy Contact & Inquiries
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy or data handling practices for <strong>{app.metadata.name}</strong>, please reach out to our privacy team:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 space-y-1 font-mono">
              <div><strong>Application:</strong> {app.metadata.name}</div>
              <div><strong>Developer / Company:</strong> {app.developer.companyName || app.developer.name}</div>
              <div><strong>Privacy Email:</strong> {app.developer.email}</div>
              <div><strong>Support Email:</strong> {app.developer.supportEmail}</div>
              <div><strong>Jurisdiction:</strong> {app.developer.jurisdiction}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
