import React from "react";
import Link from "next/link";
import { getAllApps } from "@/config/apps";
import { ShieldCheck, FileText, Trash2, ArrowRight, Lock, CheckCircle, Smartphone } from "lucide-react";

export default function HomePage() {
  const apps = getAllApps();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="absolute -right-12 -top-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official Compliance & Legal Portal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-100">
            Privacy Policies & Legal Compliance Center
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Centralized legal portal for our mobile applications. Access official Privacy Policies, Terms & Conditions, and Google Play-compliant Account Deletion resources.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Google Play Console Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-400" />
              <span>SSL/TLS Public Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span>Multi-App Architecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* App Directory Grid Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Published Applications ({apps.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Select an application to view its official legal disclosures and compliance documents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <div
              key={app.metadata.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60">
                      {app.metadata.category} • v{app.metadata.version}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {app.metadata.name}
                    </h3>
                  </div>
                  <div className="text-right text-[11px] text-slate-400">
                    <div>Effective: {app.metadata.effectiveDate}</div>
                    <div className="font-mono text-[10px] mt-0.5">{app.metadata.packageName}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {app.metadata.description}
                </p>
              </div>

              {/* Legal Document Quick Links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Legal & Compliance Resources
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Link
                    href={`/${app.metadata.id}/privacy`}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between text-xs font-semibold group"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Privacy</span>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <Link
                    href={`/${app.metadata.id}/terms`}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between text-xs font-semibold group"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Terms</span>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <Link
                    href={`/${app.metadata.id}/delete-account`}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-red-50 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center justify-between text-xs font-semibold group"
                  >
                    <div className="flex items-center gap-2">
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                      <span>Deletion</span>
                    </div>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Standards Notice */}
      <div className="bg-slate-100 dark:bg-slate-800/40 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          Google Play Developer Policy Standards
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <div className="space-y-1">
            <strong className="text-slate-800 dark:text-slate-200 font-semibold block">
              1. Direct Web Accessibility
            </strong>
            All policies are hosted as clean, fast HTML webpages accessible without login or app installation.
          </div>
          <div className="space-y-1">
            <strong className="text-slate-800 dark:text-slate-200 font-semibold block">
              2. App-Specific Data Practices
            </strong>
            Disclosures accurately reflect each app's genuine SDKs, Firebase services, and database usage.
          </div>
          <div className="space-y-1">
            <strong className="text-slate-800 dark:text-slate-200 font-semibold block">
              3. External Account Deletion URL
            </strong>
            Satisfies Google's requirement for a dedicated external web resource to request account and data removal.
          </div>
        </div>
      </div>
    </div>
  );
}
