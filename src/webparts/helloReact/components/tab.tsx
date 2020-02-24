import * as React from 'react';
import styles from './tabs.module.scss';
import { ITabProps } from './ITabProps';
import { ITabsState } from './ITabsState';


export default class Tab extends React.Component<ITabProps,ITabsState>
{
    public render():React.ReactElement<ITabProps>
    {
      return <div className={styles.tab}>
        <input type="radio" id={this.props.id} name="tab-group-1" onChange={this.handleChange} checked = {this.props.activeTab==this.props.id}></input>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <div className={styles.content}>
            {this.props.children}
        </div>
      </div>;
    }

    private handleChange = (event) =>
    {
      const target = event.target;
      this.props.clickHandler(target.id);
    }
}
