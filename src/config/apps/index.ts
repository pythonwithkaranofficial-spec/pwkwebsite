import { AppConfig } from "@/types/app-config";
import { pythonWithKaranConfig } from "./pythonwithkaran";
import { smartPaperConfig } from "./smartpaper";

// Registry of all published applications
export const appsRegistry: Record<string, AppConfig> = {
  pythonwithkaran: pythonWithKaranConfig,
  smartpaper: smartPaperConfig,
};

export function getAllApps(): AppConfig[] {
  return Object.values(appsRegistry);
}

export function getAppConfig(appId: string): AppConfig | undefined {
  const normalizedId = appId.toLowerCase().trim();
  return appsRegistry[normalizedId];
}

export function isValidAppId(appId: string): boolean {
  const normalizedId = appId.toLowerCase().trim();
  return normalizedId in appsRegistry;
}
