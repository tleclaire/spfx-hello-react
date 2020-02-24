import * as React from 'react';
import styles from './tabs.module.scss';
import Tab from './tab';
import {ITabsState} from './ITabsState';


export default class Tabs extends React.Component<{},ITabsState>
{
  constructor(props)
  {
    super(props);
    this.state = {activeTab:"tab-1"};
    this.handler.bind(this);
  }

  private handler(value) {
    this.setState({activeTab:value});
    console.log(this.state);
  }
  public render():React.ReactElement
    {
      return <div className={styles.tabs}>
          <Tab id="tab-1" label="Label Eins" activeTab={this.state.activeTab} clickHandler={this.handler.bind(this)}>
              <table>
                <tr>
                  <td>First Tabs content</td>
                  <td>Hallo React</td>
                </tr>
              </table>
          </Tab>
          <Tab id="tab-2" label="Label Zwei" activeTab={this.state.activeTab} clickHandler={this.handler.bind(this)}>
          <table>
                <tr>
                  <td>Second Tabs content</td>
                  <td>Hallo React</td>
                </tr>
              </table>
          </Tab>
          <Tab id="tab-3" label="Label Drei" activeTab={this.state.activeTab} clickHandler={this.handler.bind(this)}>
          <table>
                <tr>
                  <td>Third Tabs content</td>
                  <td>Hallo React</td>
                </tr>
              </table>
          </Tab>
      </div>;
    }
}
