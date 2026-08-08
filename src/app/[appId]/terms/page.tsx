import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAppConfig } from "@/config/apps";
import { TableOfContents, TocItem } from "@/components/TableOfContents";
import { FileText, Mail, Calendar } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { appId: string };
}): Promise<Metadata> {
  const app = getAppConfig(params.appId);
  if (!app) return { title: "Terms & Conditions Not Found" };

  return {
    title: `${app.metadata.name} Terms & Conditions`,
    description: `Official Terms and Conditions of service for ${app.metadata.name} (${app.metadata.packageName}).`,
  };
}

export default function TermsPage({
  params,
}: {
  params: { appId: string };
}) {
  const app = getAppConfig(params.appId);

  if (!app) {
    notFound();
  }

  const tocItems: TocItem[] = app.terms.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-900/60 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              Terms of Service
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              {app.metadata.name} Terms & Conditions
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
          </div>
        </div>

        {/* Quick Nav Badges */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <Link
            href={`/${app.metadata.id}/privacy`}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            View Privacy Policy
          </Link>
          <Link
            href={`/${app.metadata.id}/delete-account`}
            className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950/50 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 transition-colors"
          >
            Account Deletion Web Page
          </Link>
        </div>
      </div>

      {/* Main Grid Layout: Sticky Sidebar ToC + Terms Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <TableOfContents items={tocItems} />
        </div>

        {/* Terms Document Content */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 print-full-width">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
            {app.terms.introduction}
          </p>

          {app.terms.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
                {section.title}
              </h2>

              {Array.isArray(section.content) ? (
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside pl-2 leading-relaxed">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
