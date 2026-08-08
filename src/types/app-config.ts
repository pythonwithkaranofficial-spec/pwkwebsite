export interface DeveloperInfo {
  name: string;
  companyName?: string;
  email: string;
  supportEmail: string;
  website?: string;
  address?: string;
  jurisdiction: string;
}

export interface AppMetadata {
  id: string;
  name: string;
  packageName: string;
  category: string;
  description: string;
  logoUrl?: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  platform: "Android" | "Cross-platform" | "iOS & Android";
}

export interface DataCollectionItem {
  category: string;
  items: string[];
  purpose: string;
  isRequired: boolean;
  sharedWithThirdParties: boolean;
}

export interface ThirdPartyService {
  name: string;
  provider: string;
  purpose: string;
  privacyPolicyUrl: string;
}

export interface AccountDeletionInfo {
  supportsAccountCreation: boolean;
  inAppDeletionPath: string;
  deletedDataTypes: string[];
  retainedDataTypes: string[];
  retentionReason?: string;
  processingTime: string;
  supportEmail: string;
}

export interface PrivacyPolicyData {
  introduction: string;
  dataCollection: DataCollectionItem[];
  thirdPartyServices: ThirdPartyService[];
  dataUsePurposes: string[];
  dataRetentionPolicy: string;
  securityPractices: string[];
  childrensPrivacy: string;
  userRights: string[];
  internationalTransfers?: string;
  changesToPolicy: string;
}

export interface TermsSection {
  id: string;
  title: string;
  content: string | string[];
}

export interface TermsData {
  introduction: string;
  sections: TermsSection[];
}

export interface AppConfig {
  metadata: AppMetadata;
  developer: DeveloperInfo;
  privacy: PrivacyPolicyData;
  terms: TermsData;
  accountDeletion: AccountDeletionInfo;
}
