import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAppConfig, getAllApps } from "@/config/apps";
import { AccountDeletionForm } from "@/components/AccountDeletionForm";
import { Trash2, ShieldCheck, Smartphone, CheckCircle2, AlertCircle, Info, Mail, Database, ShieldAlert } from "lucide-react";
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
  if (!app) return { title: "Account Deletion Resource Not Found" };

  return {
    title: app.accountDeletion.supportsAccountCreation
      ? `Delete Your ${app.metadata.name} Account`
      : `${app.metadata.name} — Data Management & Deletion Disclosures`,
    description: `Official compliance and data safety resource for ${app.metadata.name} (${app.metadata.packageName}).`,
  };
}

export default function AccountDeletionPage({
  params,
}: {
  params: { appId: string };
}) {
  const app = getAppConfig(params.appId);

  if (!app) {
    notFound();
  }

  const supportsAccounts = app.accountDeletion.supportsAccountCreation;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/60 text-xs font-bold uppercase tracking-wider">
              <Trash2 className="w-3.5 h-3.5" />
              Google Play Data Safety & Deletion Resource
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              {supportsAccounts ? `Delete Your ${app.metadata.name} Account` : `${app.metadata.name} Data Deletion Policy`}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Package: {app.metadata.packageName}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/${app.metadata.id}/privacy`}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </Link>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {supportsAccounts ? (
            <>
              In compliance with Google Play Store Developer Policies, users of <strong>{app.metadata.name}</strong> can request permanent account deletion and removal of associated personal data directly within the mobile application or through this external web portal.
            </>
          ) : (
            <>
              <strong>{app.metadata.name}</strong> is built with a privacy-first, account-free architecture. The application does not require user registration or logins, does not maintain remote user databases, and stores all user data strictly locally on your device.
            </>
          )}
        </p>
      </div>

      {/* Account-Free App Notice */}
      {!supportsAccounts && (
        <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 rounded-2xl p-6 space-y-3">
          <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-200 flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Zero-Account Architecture (No Online Account Required)
          </h3>
          <p className="text-xs text-emerald-900 dark:text-emerald-300 leading-relaxed">
            Because <strong>{app.metadata.name}</strong> does not require sign-up or profile creation, there is no online user account or cloud-stored personal profile to delete. All bookmarks, quiz streaks, and application preferences reside solely inside your device&apos;s local storage.
          </p>
        </div>
      )}

      {/* In-App / Device Deletion Path Callout */}
      <div className="bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 rounded-2xl p-6 space-y-3">
        <h3 className="font-bold text-sm text-blue-950 dark:text-blue-200 flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          {supportsAccounts ? "Option 1: In-App Account Deletion (Recommended)" : "How to Delete All Local Data"}
        </h3>
        <p className="text-xs text-blue-900 dark:text-blue-300 leading-relaxed">
          {supportsAccounts
            ? "If you currently have the app installed on your device, you can trigger immediate account deletion from inside the app:"
            : "You can permanently erase all locally stored data, quiz progress, and preferences at any time by performing either of the following steps:"}
        </p>
        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl font-mono text-xs text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          {app.accountDeletion.inAppDeletionPath}
        </div>
      </div>

      {/* Breakdown Grid: What is Deleted vs What is Retained */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
          Data Deletion Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deleted Data */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              What Is Permanently Deleted
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {app.accountDeletion.deletedDataTypes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Retained Data */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Data Retained on Servers
            </h4>
            {app.accountDeletion.retainedDataTypes.length > 0 ? (
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {app.accountDeletion.retainedDataTypes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                No personal data or account records are retained following local storage deletion or uninstallation.
              </p>
            )}
            {app.accountDeletion.retentionReason && (
              <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                {app.accountDeletion.retentionReason}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Option 2: External Web Deletion Request Form (for Account-Based Apps) or Support Box */}
      {supportsAccounts ? (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
            Option 2: Submit External Account Deletion Request
          </h2>
          <AccountDeletionForm app={app} />
        </div>
      ) : (
        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Have Questions Regarding Data Safety?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            If you have questions about how data is processed or need assistance clearing app preferences for <strong>{app.metadata.name}</strong>, please contact our support team:
          </p>
          <div className="pt-1">
            <a
              href={`mailto:${app.accountDeletion.supportEmail}?subject=${encodeURIComponent(app.metadata.name + " Data Inquiry")}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Support ({app.accountDeletion.supportEmail})</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
