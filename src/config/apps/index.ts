import { AppConfig } from "@/types/app-config";
import { pythonWithKaranConfig } from "./pythonwithkaran";
import { smartPaperConfig } from "./smartpaper";
import { periodicTableExplorerConfig } from "./periodictableexplorer";
import { ncertMathFormulasHubConfig } from "./ncertmathformulashub";
import { purpleMonsterConfig } from "./purplemonster";
import { fontzyleConfig } from "./fontzyle";
import { mithaiMergeConfig } from "./mithaimerge";
import { pyBossConfig } from "./pyboss";
import { pyKakshaConfig } from "./pykaksha";
import { octaCalcConfig } from "./octacalc";

// Registry of all registered applications
export const appsRegistry: Record<string, AppConfig> = {
  pythonwithkaran: pythonWithKaranConfig,
  smartpaper: smartPaperConfig,
  periodictableexplorer: periodicTableExplorerConfig,
  ncertmathformulashub: ncertMathFormulasHubConfig,
  purplemonster: purpleMonsterConfig,
  fontzyle: fontzyleConfig,
  mithaimerge: mithaiMergeConfig,
  pyboss: pyBossConfig,
  pykaksha: pyKakshaConfig,
  octacalc: octaCalcConfig,
};

// Common slug aliases for URL flexibility (e.g. periodic-table-explorer -> periodictableexplorer)
export const appSlugAliases: Record<string, string> = {
  "periodic-table-explorer": "periodictableexplorer",
  "ncert-math-formulas-hub": "ncertmathformulashub",
  "ncert-math-formulas": "ncertmathformulashub",
  "purple-monster": "purplemonster",
  "purple-monster-snack-rain": "purplemonster",
  "font-zyle": "fontzyle",
  "mithai-merge": "mithaimerge",
  "mithai-merge-2048-puzzle": "mithaimerge",
  "smart-paper": "smartpaper",
  "python-with-karan": "pythonwithkaran",
  "py-boss": "pyboss",
  "py-kaksha": "pykaksha",
  "octa-calc": "octacalc",
};

export function normalizeAppSlug(slug: string): string {
  if (!slug) return "";
  const normalized = slug.toLowerCase().trim();
  if (appsRegistry[normalized]) return normalized;
  const stripped = normalized.replace(/[-_]/g, "");
  if (appsRegistry[stripped]) return stripped;
  if (appSlugAliases[normalized]) return appSlugAliases[normalized];
  return normalized;
}

// Returns only currently published apps (used in public app directory, header, and footer)
export function getAllApps(): AppConfig[] {
  return Object.values(appsRegistry).filter((app) => app.metadata.published);
}

export function getAllPublishedApps(): AppConfig[] {
  return getAllApps();
}

// Returns config only if the app exists and is published (returns undefined -> 404 for unpublished apps)
export function getAppConfig(appId: string): AppConfig | undefined {
  const canonicalId = normalizeAppSlug(appId);
  const app = appsRegistry[canonicalId];
  if (app && app.metadata.published) {
    return app;
  }
  return undefined;
}

// Returns config for any registered app, including unpublished ones
export function getAnyAppConfig(appId: string): AppConfig | undefined {
  const canonicalId = normalizeAppSlug(appId);
  return appsRegistry[canonicalId];
}

export function isValidAppId(appId: string): boolean {
  const app = getAppConfig(appId);
  return app !== undefined;
}
