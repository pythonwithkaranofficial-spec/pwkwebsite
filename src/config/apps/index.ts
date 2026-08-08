import { AppConfig } from "@/types/app-config";
import { pythonWithKaranConfig } from "./pythonwithkaran";
import { smartPaperConfig } from "./smartpaper";

// Registry of all registered applications
export const appsRegistry: Record<string, AppConfig> = {
  pythonwithkaran: pythonWithKaranConfig,
  smartpaper: smartPaperConfig,
};

// Returns only currently published apps (used in public app directory, header, and footer)
export function getAllApps(): AppConfig[] {
  return Object.values(appsRegistry).filter((app) => app.metadata.published);
}

export function getAllPublishedApps(): AppConfig[] {
  return getAllApps();
}

// Returns config only if the app exists and is published (returns undefined -> 404 for unpublished apps)
export function getAppConfig(appId: string): AppConfig | undefined {
  const normalizedId = appId.toLowerCase().trim();
  const app = appsRegistry[normalizedId];
  if (app && app.metadata.published) {
    return app;
  }
  return undefined;
}

export function isValidAppId(appId: string): boolean {
  const app = getAppConfig(appId);
  return app !== undefined;
}
