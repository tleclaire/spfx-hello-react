import * as React from "react";
import { ISPList } from "./ISPList";
import { List } from "office-ui-fabric-react/lib/List";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";

export type EditItemCallback = (item: ISPList) => void;

export interface IISPListsListProps {
  lists: ISPList[];
  onEditItem: EditItemCallback;
}

export class SPListList extends React.Component<IISPListsListProps, {}> {
  public render(): React.ReactElement<IISPListsListProps> {
    return (
      <table>
        <List items={this.props.lists} onRenderCell={this._onRenderListCell} />
      </table>
    );
  }

  private _onRenderListCell = (
    list: ISPList,
    index: number | undefined
  ): JSX.Element => {
    return (
      <tr>
        <td>
          <a href={list.url}>{list.title}</a>
        </td>
      </tr>
    );
  }

  private _onButtonClick(item: ISPList): void {
    this.props.onEditItem(item);
  }
}
