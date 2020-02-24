import * as React from "react";
import styles from "./tabs.module.scss";
import Tab from "./tab";
import { ITabsState } from "./ITabsState";
import { ITabsProps } from "./ITabsProps";
import { IItem } from "./IItem";
import {ItemsList} from './ItemsList';

import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

  require('sp-init');
  require('microsoft-ajax');
  require('sp-runtime');
  require('sharepoint');

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
  constructor(props: ITabsProps) {
    super(props);
    this.state = { activeTab: "tab-1", items: [] };
    this.handler.bind(this);
  }

  private handler(value) {
    this.setState({ activeTab: value });
    console.log(this.state);
  }
  public render(): React.ReactElement {
    return (
      <div className={styles.tabs}>
        <Tab
          id="tab-1"
          label="Label Eins"
          activeTab={this.state.activeTab}
          clickHandler={this.handler.bind(this)}
        >
          <ItemsList items={this.state.items} onEditItem={this._editItem}></ItemsList>
        </Tab>
        <Tab
          id="tab-2"
          label="Label Zwei"
          activeTab={this.state.activeTab}
          clickHandler={this.handler.bind(this)}
        >
          <table>
            <tr>
              <td>Second Tabs content</td>
              <td>Hallo React</td>
            </tr>
          </table>
        </Tab>
        <Tab
          id="tab-3"
          label="Label Drei"
          activeTab={this.state.activeTab}
          clickHandler={this.handler.bind(this)}
        >
          <table>
            <tr>
              <td>Third Tabs content</td>
              <td>Hallo React</td>
            </tr>
          </table>
        </Tab>
      </div>
    );
  }

  public componentDidMount(): void {
    this.readItems().then((itemsResult: IItem[]) => {
      this.setState({ items: itemsResult });
    });
  }

  private _editItem = (itemToEdit: IItem): void => {
      //alert(itemToEdit.title);
      this.ShowPopupDialog(`${this.props.currentSiteUrl}/Lists/Testliste/EditForm.aspx?ID=1`,400,400);
  }

  private  ShowPopupDialog(url:string, width:number, height:number) {
    var options = {
      url : url,
      width : width,
      height : height
    //options.dialogReturnValueCallback = RefreshOnDialogClose;
    };
    SP.UI.ModalDialog.showModalDialog(options);
}


  private readItems(): Promise<IItem[]> {
    return new Promise<IItem[]>((resolve, reject) => {
      const endpoint: string = `${this.props.currentSiteUrl}/_api/lists/getbytitle('Testliste')/items?$select=Id,Title`;
      this.props.spHttpClient
        .get(endpoint, SPHttpClient.configurations.v1, {
          headers: {
            Accept: "application/json;odata=nometadata",
            "odata-version": ""
          }
        })
        .then((response: SPHttpClientResponse) => {
          return response.json();
        })
        .then((jsonResponse: any) => {
          let spListItems: IItem[] = [];
          for (let index = 0; index < jsonResponse.value.length; index++) {
            spListItems.push({
              id: jsonResponse.value[index].Id,
              title: jsonResponse.value[index].Title,
              editUrl:`${this.props.currentSiteUrl}/Lists/Testliste/EditForm.aspx?ID=${jsonResponse.value[index].Id}&Source=${this.props.currentSiteUrl}/SitePages/WebpartTest.aspx`
            });

            resolve(spListItems);
          }
        });
    });
  }
}
