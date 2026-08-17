import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAppConfig, getAllApps } from "@/config/apps";
import { ShieldCheck, FileText, Trash2, ArrowRight, ExternalLink, Calendar, Code, Mail } from "lucide-react";
import { Metadata } from "next";

export function generateStaticParams() {
  return getAllApps().map((app) => ({
    appId: app.metadata.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { appId: string };
}): Promise<Metadata> {
  const app = getAppConfig(params.appId);
  if (!app) {
    return { title: "App Not Found" };
  }
  return {
    title: `${app.metadata.name} — Legal & Privacy Hub`,
    description: `Official Privacy Policy, Terms of Service, and Data Safety portal for ${app.metadata.name}.`,
  };
}

export default function AppHubPage({ params }: { params: { appId: string } }) {
  const app = getAppConfig(params.appId);

  if (!app) {
    notFound();
  }

  const supportsAccounts = app.accountDeletion.supportsAccountCreation;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* App Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60">
              {app.metadata.category} App Disclosures
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              {app.metadata.name}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Package Name: {app.metadata.packageName}
            </p>
          </div>

          <div className="flex flex-col text-xs text-slate-500 dark:text-slate-400 space-y-1 sm:text-right">
            <div className="flex items-center gap-1.5 sm:justify-end">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              <span>Effective: {app.metadata.effectiveDate}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:justify-end">
              <Code className="w-3.5 h-3.5 text-purple-500" />
              <span>Version: {app.metadata.version}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:justify-end">
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>{app.developer.supportEmail}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {app.metadata.description}
        </p>
      </div>

      {/* Main Legal Pages Navigation Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Official Documents & Compliance Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Privacy Policy Card */}
          <Link
            href={`/${app.metadata.id}/privacy`}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Privacy Policy
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Comprehensive breakdown of data collection, third-party services, local storage, security practices, and user rights.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 pt-2">
              <span>Read Full Policy</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Terms & Conditions Card */}
          <Link
            href={`/${app.metadata.id}/terms`}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-500 transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Terms & Conditions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  User agreement covering application usage, content accuracy, intellectual property, and terms of service.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 pt-2">
              <span>Read Terms</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Account / Data Deletion Card */}
          <Link
            href={`/${app.metadata.id}/delete-account`}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-500 transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center font-bold">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {supportsAccounts ? "Account Deletion Request" : "Data Safety & Deletion"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {supportsAccounts
                    ? "External account and data deletion request portal compliant with Google Play Console requirements."
                    : "Overview of local device storage practices, zero-account architecture, and data deletion instructions."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 pt-2">
              <span>{supportsAccounts ? "Request Deletion" : "View Disclosures"}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
