"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Moon, Sun, ChevronDown, Menu, X, Smartphone } from "lucide-react";
import { getAllApps } from "@/config/apps";

export function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [appDropdownOpen, setAppDropdownOpen] = useState<boolean>(false);

  const apps = getAllApps();
  // Extract current appId from route e.g. /pythonwithkaran/privacy -> pythonwithkaran
  const routeSegments = pathname.split("/").filter(Boolean);
  const currentAppId = routeSegments[0] === "apps" ? routeSegments[1] : routeSegments[0];
  const activeApp = apps.find((a) => a.metadata.id === currentAppId) || apps[0];

  useEffect(() => {
    // Check initial dark mode preference
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-base leading-tight">
                Privacy Portal
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Legal & Compliance Hub
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {/* App Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAppDropdownOpen(!appDropdownOpen)}
              onBlur={() => setTimeout(() => setAppDropdownOpen(false), 200)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 transition-colors"
              aria-expanded={appDropdownOpen}
              aria-label="Select Application"
            >
              <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold">{activeApp?.metadata.name || "Select App"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {appDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700/60 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Published Apps
                </div>
                {apps.map((app) => (
                  <Link
                    key={app.metadata.id}
                    href={`/${app.metadata.id}/privacy`}
                    onClick={() => setAppDropdownOpen(false)}
                    className={`flex flex-col px-3 py-2 text-xs hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                      app.metadata.id === currentAppId
                        ? "bg-blue-50/70 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                      {app.metadata.name}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {app.metadata.category} • v{app.metadata.version}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/apps"
            className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              pathname === "/apps" || pathname === "/"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            All Apps
          </Link>

          {activeApp && (
            <>
              <Link
                href={`/${activeApp.metadata.id}/privacy`}
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  pathname.endsWith("/privacy")
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                href={`/${activeApp.metadata.id}/terms`}
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  pathname.endsWith("/terms")
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                Terms & Conditions
              </Link>
              <Link
                href={`/${activeApp.metadata.id}/delete-account`}
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  pathname.endsWith("/delete-account")
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                Account Deletion
              </Link>
            </>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 pt-2">
            Select App
          </div>
          <div className="grid grid-cols-1 gap-1">
            {apps.map((app) => (
              <Link
                key={app.metadata.id}
                href={`/${app.metadata.id}/privacy`}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2.5 rounded-lg text-sm flex items-center justify-between ${
                  app.metadata.id === currentAppId
                    ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                <span>{app.metadata.name}</span>
                <span className="text-xs text-slate-400">{app.metadata.category}</span>
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2 text-sm font-medium">
            <Link
              href="/apps"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              All Published Apps
            </Link>
            {activeApp && (
              <>
                <Link
                  href={`/${activeApp.metadata.id}/privacy`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-1.5 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {activeApp.metadata.name} — Privacy Policy
                </Link>
                <Link
                  href={`/${activeApp.metadata.id}/terms`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-1.5 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {activeApp.metadata.name} — Terms & Conditions
                </Link>
                <Link
                  href={`/${activeApp.metadata.id}/delete-account`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-1.5 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {activeApp.metadata.name} — Account Deletion
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
