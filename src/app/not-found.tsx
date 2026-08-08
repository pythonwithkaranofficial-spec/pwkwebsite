import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, Smartphone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto border border-amber-200 dark:border-amber-800">
        <ShieldAlert className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Application or Document Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          The requested application legal document or URL does not exist in our compliance directory.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
        >
          <Smartphone className="w-4 h-4" />
          <span>Browse All Published Apps</span>
        </Link>
        <Link
          href="/pythonwithkaran/privacy"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go to PythonWithKaran Privacy Policy</span>
        </Link>
      </div>
    </div>
  );
}
