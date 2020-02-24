import * as React from "react";
import { IItem } from "./IItem";
import { List } from "office-ui-fabric-react/lib/List";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";

export type EditItemCallback = (item: IItem) => void;

export interface IItemsListProps {
  items: IItem[];
  onEditItem: EditItemCallback;
}

export class ItemsList extends React.Component<IItemsListProps, {}> {
  public render(): React.ReactElement<IItemsListProps> {
    return (
      <table>
        <List items={this.props.items} onRenderCell={this._onRenderListCell} />
      </table>
    );
  }

  private _onRenderListCell = (
    item: IItem,
    index: number | undefined
  ): JSX.Element => {
    return (
      <tr>
        <td>
          <a href={item.editUrl}>{item.title}</a>
        </td>
      </tr>
    );
  }

  private _onButtonClick(item: IItem): void {
    this.props.onEditItem(item);
  }
}
