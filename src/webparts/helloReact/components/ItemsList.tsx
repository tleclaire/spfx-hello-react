import * as React from 'react';
import { IItem } from './IItem';
import { List } from 'office-ui-fabric-react/lib/List';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export type EditItemCallback = (item: IItem) => void;

export interface IItemsListProps {
  items: IItem[];
  onEditItem : EditItemCallback;
}


export class ItemsList extends React.Component<IItemsListProps, {}> {
  public render(): React.ReactElement<IItemsListProps> {
      return (
          <div>
              <List items={this.props.items} onRenderCell={this._onRenderListCell} />
          </div>
      );
  }

  private _onRenderListCell = (item: IItem, index: number | undefined): JSX.Element => {
    return (
        <div>
            {item.title}<br />
            <DefaultButton text="Edit"
                data={item.id}
                onClick={() => this._onButtonClick(item)}
            />
        </div>
    );
}

private _onButtonClick(item: IItem): void {
  this.props.onEditItem(item);
}

}
