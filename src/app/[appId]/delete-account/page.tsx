import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAppConfig } from "@/config/apps";
import { AccountDeletionForm } from "@/components/AccountDeletionForm";
import { Trash2, ShieldCheck, Smartphone, CheckCircle2, AlertCircle, Info, Mail } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { appId: string };
}): Promise<Metadata> {
  const app = getAppConfig(params.appId);
  if (!app) return { title: "Account Deletion Resource Not Found" };

  return {
    title: `Delete Your ${app.metadata.name} Account`,
    description: `Official external web page for requesting deletion of your ${app.metadata.name} account and associated data.`,
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/60 text-xs font-bold uppercase tracking-wider">
              <Trash2 className="w-3.5 h-3.5" />
              Google Play Account Deletion Resource
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Delete Your {app.metadata.name} Account
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
          In compliance with Google Play Store Developer Policies, users of <strong>{app.metadata.name}</strong> can request permanent account deletion and removal of associated personal data directly within the mobile application or through this external web portal.
        </p>
      </div>

      {/* In-App Deletion Path Callout */}
      <div className="bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 rounded-2xl p-6 space-y-3">
        <h3 className="font-bold text-sm text-blue-950 dark:text-blue-200 flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          Option 1: In-App Account Deletion (Recommended)
        </h3>
        <p className="text-xs text-blue-900 dark:text-blue-300 leading-relaxed">
          If you currently have the app installed on your device, you can trigger immediate account deletion from inside the app:
        </p>
        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl font-mono text-xs text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          {app.accountDeletion.inAppDeletionPath}
        </div>
      </div>

      {/* Option 2: External Web Deletion Request Form */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
          Option 2: Submit External Account Deletion Request
        </h2>

        {/* Breakdown Grid: What is Deleted vs What is Retained */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deleted Data */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              What Will Be Permanently Deleted
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
              Data Retained for Security / Legal Reasons
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
              <p className="text-xs text-slate-500">No personal data is retained following account deletion.</p>
            )}
            {app.accountDeletion.retentionReason && (
              <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                {app.accountDeletion.retentionReason}
              </p>
            )}
          </div>
        </div>

        {/* Deletion Form Component */}
        <AccountDeletionForm app={app} />
      </div>
    </div>
  );
}
