import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getAppConfig, getAnyAppConfig, getAllApps, appSlugAliases } from "@/config/apps";
import { TableOfContents, TocItem } from "@/components/TableOfContents";
import {
  FileText,
  Mail,
  Calendar,
  ShieldCheck,
  Building,
  CheckCircle,
  Scale,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Smartphone,
} from "lucide-react";

export function generateStaticParams() {
  const published = getAllApps();
  const params: { appId: string }[] = [];

  // Generate canonical IDs
  published.forEach((app) => {
    params.push({ appId: app.metadata.id });
  });

  // Generate hyphenated aliases
  Object.keys(appSlugAliases).forEach((alias) => {
    params.push({ appId: alias });
  });

  // Also include smartpaper if registered
  if (getAnyAppConfig("smartpaper")) {
    params.push({ appId: "smartpaper" });
    params.push({ appId: "smart-paper" });
  }

  // De-duplicate
  const uniqueParams = Array.from(new Set(params.map((p) => p.appId))).map((id) => ({
    appId: id,
  }));

  return uniqueParams;
}

export async function generateMetadata({
  params,
}: {
  params: { appId: string };
}): Promise<Metadata> {
  const app = getAppConfig(params.appId) || getAnyAppConfig(params.appId);
  if (!app) {
    return { title: "Terms of Service Not Found" };
  }

  return {
    title: `${app.metadata.name} — Terms of Service | Google Play Trader Compliance`,
    description: `Official Terms of Service for ${app.metadata.name} (${app.metadata.packageName}) published by developer Karan Saini. Compliant with Google Play Console Trader rules and the EU Digital Services Act (DSA).`,
  };
}

export default function AppTermsOfServicesPage({
  params,
}: {
  params: { appId: string };
}) {
  const app = getAppConfig(params.appId) || getAnyAppConfig(params.appId);

  if (!app) {
    notFound();
  }

  const tocItems: TocItem[] = app.terms.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/termsofservices" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          Terms of Service Directory
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
          {app.metadata.name}
        </span>
      </nav>

      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-900/60 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                Terms of Service
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60 text-xs font-bold uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5" />
                Google Play Trader Verified
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              {app.metadata.name} Terms of Service
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Application ID / Package Name: {app.metadata.packageName}
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400 md:text-right bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
            <div>
              <strong className="text-slate-900 dark:text-slate-200">Category:</strong> {app.metadata.category}
            </div>
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
              <strong className="text-slate-900 dark:text-slate-200">Trader Jurisdiction:</strong> {app.developer.jurisdiction}
            </div>
          </div>
        </div>

        {/* Google Play Trader Status & EU DSA Notice */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-slate-50 to-blue-50 dark:from-purple-950/40 dark:via-slate-800/40 dark:to-blue-950/40 border border-purple-200/70 dark:border-purple-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <Scale className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Google Play Console Trader Declaration (EU Digital Services Act Compliance)</span>
          </div>
          <p className="leading-relaxed">
            This application is offered by registered trader <strong>{app.developer.name}</strong> ({app.developer.companyName || app.developer.name}), based in <strong>{app.developer.jurisdiction}</strong>. Dedicated consumer support contact: <a href={`mailto:${app.developer.supportEmail}`} className="text-blue-600 dark:text-blue-400 font-mono hover:underline">{app.developer.supportEmail}</a>. Offered as a free digital service without upfront charges. In compliance with EU consumer law, performance begins upon download, and you may terminate this contract at any time simply by uninstalling the application.
          </p>
        </div>

        {/* Quick Nav Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold pt-1">
          <Link
            href={`/${app.metadata.id}/privacy`}
            className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>View Privacy Policy</span>
          </Link>
          <Link
            href={`/${app.metadata.id}/delete-account`}
            className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950/50 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 transition-colors"
          >
            Account Deletion Web Page
          </Link>
          <Link
            href="/termsofservices"
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Terms of Service</span>
          </Link>
        </div>
      </div>

      {/* Main Grid: Sticky Sidebar ToC + Document Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <TableOfContents items={tocItems} />
        </div>

        {/* Terms Document Content */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 print-full-width">
          {/* Introduction Box */}
          <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
            {app.terms.introduction}
          </div>

          {/* 10 Numbered Terms Sections */}
          {app.terms.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
                {section.title}
              </h2>

              {Array.isArray(section.content) ? (
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {section.content}
                </p>
              )}
            </section>
          ))}

          {/* Bottom Help / Trader Verification Card */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 space-y-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Need Assistance or Have Questions About These Terms?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              If you have any questions, feedback, or legal inquiries concerning these Terms of Service or our Google Play Trader policies, please contact developer Karan Saini at{" "}
              <a
                href={`mailto:${app.developer.supportEmail}`}
                className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                {app.developer.supportEmail}
              </a>
              . Consumer inquiries are handled directly in accordance with statutory consumer protection timelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

