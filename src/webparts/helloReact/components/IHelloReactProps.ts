
import { SPHttpClient } from "@microsoft/sp-http";

export interface IHelloReactProps {
  description: string;
  spHttpClient: SPHttpClient;
  currentSiteUrl: string;
}
