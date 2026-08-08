"use client";

import React, { useState } from "react";
import { AppConfig } from "@/types/app-config";
import { Trash2, AlertTriangle, CheckCircle2, ShieldAlert, Loader2, Mail } from "lucide-react";

interface AccountDeletionFormProps {
  app: AppConfig;
}

export function AccountDeletionForm({ app }: AccountDeletionFormProps) {
  const [email, setEmail] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [reason, setReason] = useState<string>("");
  const [honeypot, setHoneypot] = useState<string>("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid registered email address.");
      setStatus("error");
      return;
    }

    if (!confirmed) {
      setErrorMessage("Please confirm that you understand account deletion is permanent.");
      setStatus("error");
      return;
    }

    // Anti-spam honeypot check
    if (honeypot.trim() !== "") {
      // Quietly reject bot
      setStatus("success");
      setRequestId("DEL-" + Math.random().toString(36).substring(2, 9).toUpperCase());
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(`/api/apps/${app.metadata.id}/delete-account`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reason,
          confirmed,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setRequestId(data.requestId || "DEL-" + Math.random().toString(36).substring(2, 9).toUpperCase());
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit request. Please try again or contact support directly.");
      }
    } catch (err: any) {
      console.error("Deletion submission error:", err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your internet connection or email support directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-900/60 rounded-xl">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-200">
              Deletion Request Submitted Successfully
            </h3>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">
              Reference ID: {requestId}
            </p>
          </div>
        </div>

        <div className="text-sm text-emerald-900 dark:text-emerald-300 leading-relaxed space-y-2 pt-2 border-t border-emerald-200/60 dark:border-emerald-800/60">
          <p>
            Your account deletion request for <strong>{app.metadata.name}</strong> has been logged into our queue.
          </p>
          <p className="text-xs text-emerald-800 dark:text-emerald-400">
            <strong>What happens next?</strong> To prevent unauthorized account deletion, a verification message will be sent to <strong>{email}</strong>. Once identity is verified, your account credentials, profile data, and associated Cloud Firestore / Supabase stored records will be permanently removed within <strong>{app.accountDeletion.processingTime}</strong>.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={() => {
              setStatus("idle");
              setEmail("");
              setConfirmed(false);
              setReason("");
            }}
            className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 underline hover:text-emerald-900 dark:hover:text-emerald-200"
          >
            Submit another request
          </button>

          <a
            href={`mailto:${app.accountDeletion.supportEmail}?subject=Deletion Request Inquiry (${requestId})`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-3 py-1.5 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Support
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="p-2.5 bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 rounded-xl">
          <Trash2 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
            Request Account & Data Removal
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Official web deletion request form for {app.metadata.name}
          </p>
        </div>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-start gap-3 text-red-700 dark:text-red-400 text-xs">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>{errorMessage}</div>
        </div>
      )}

      {/* Hidden honeypot for spam bots */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="bot_field"
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Registered Email Field */}
      <div className="space-y-1.5">
        <label htmlFor="user-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          Registered Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="user-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:bg-white dark:focus:bg-slate-900 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
        />
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Enter the exact email address registered inside the {app.metadata.name} app.
        </p>
      </div>

      {/* Reason (Optional) */}
      <div className="space-y-1.5">
        <label htmlFor="user-reason" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          Reason for Deletion <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="user-reason"
          rows={3}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="e.g. No longer studying this subject / switched devices"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:bg-white dark:focus:bg-slate-900 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
        />
      </div>

      {/* Mandatory Confirmation Checkbox */}
      <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 space-y-3">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
            <strong>Permanent Action Warning:</strong> Account deletion will permanently erase your user profile, saved quiz progress, bookmarks, and stored media. This process cannot be reversed once verified.
          </div>
        </div>
        <label className="flex items-start gap-2.5 cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs font-medium text-slate-800 dark:text-slate-200 select-none">
            I understand that account deletion is permanent and agree to proceed.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white font-semibold text-sm shadow-md shadow-red-500/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <>
            <Trash2 className="w-4 h-4" />
            <span>Request Account Deletion</span>
          </>
        )}
      </button>

      {/* Transparent Processing Note */}
      <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Stage 1 Processing Notice: Your request will be queued for manual identity verification. You will receive confirmation at your registered email within {app.accountDeletion.processingTime}.
      </p>
    </form>
  );
}
