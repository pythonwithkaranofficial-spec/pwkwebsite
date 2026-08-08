import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Globe, Scale } from "lucide-react";
import { getAllApps } from "@/config/apps";

export function Footer() {
  const apps = getAllApps();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors mt-auto no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                App Compliance Portal
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Official central repository for Privacy Policies, Terms of Service, and Account Deletion resources across mobile applications.
            </p>
          </div>

          {/* Column 2: Applications & Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Applications
            </h4>
            <ul className="space-y-2 text-xs">
              {apps.map((app) => (
                <li key={app.metadata.id} className="space-y-1">
                  <div className="font-medium text-slate-800 dark:text-slate-300">
                    {app.metadata.name}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Link
                      href={`/${app.metadata.id}/privacy`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Privacy
                    </Link>
                    <span>•</span>
                    <Link
                      href={`/${app.metadata.id}/terms`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Terms
                    </Link>
                    <span>•</span>
                    <Link
                      href={`/${app.metadata.id}/delete-account`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Deletion
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Legal Jurisdiction */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Developer Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a
                  href="mailto:support@pythonwithkaran.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  support@pythonwithkaran.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>PythonWithKaran</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-slate-400" />
                <span>Jurisdiction: India</span>
              </div>
            </div>
          </div>

          {/* Column 4: Legal Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Legal Notice
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              These legal documents govern the mobile applications published by the developer. Policies are updated periodically to remain compliant with Google Play Console Developer Policies and applicable data protection regulations.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <div>
            © {currentYear} PythonWithKaran. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-600 dark:hover:text-slate-300">
              Portal Directory
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
