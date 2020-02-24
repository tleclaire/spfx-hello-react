import { IItem } from "./IItem";
import { ISPList } from "./ISPList";
export interface ITabsState
{
   activeTab:string;
   items : IItem[];
   lists : ISPList[];
}
