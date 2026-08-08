"use client";

import React, { useEffect, useState } from "react";
import { List, ChevronRight } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm no-print">
      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center justify-between">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex items-center gap-2 font-semibold text-sm text-slate-800 dark:text-slate-200 w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <List className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Table of Contents</span>
          </div>
          <ChevronRight
            className={`w-4 h-4 transition-transform ${
              isOpenMobile ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {/* Content List */}
      <div className={`mt-3 lg:mt-0 ${isOpenMobile ? "block" : "hidden lg:block"}`}>
        <div className="hidden lg:flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <List className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Table of Contents
          </span>
        </div>
        <ul className="space-y-1.5 text-xs font-medium">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`block py-1.5 px-2.5 rounded-lg transition-colors leading-relaxed ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold border-l-2 border-blue-600"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
