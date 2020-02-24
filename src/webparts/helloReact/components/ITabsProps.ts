import { SPHttpClient } from "@microsoft/sp-http";

export interface ITabsProps {
  spHttpClient: SPHttpClient;
  currentSiteUrl: string;
}
