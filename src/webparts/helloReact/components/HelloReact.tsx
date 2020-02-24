import * as React from 'react';
import styles from './HelloReact.module.scss';
import { IHelloReactProps } from './IHelloReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import Tabs from './tabs';

export default class HelloReact extends React.Component<IHelloReactProps, {}> {
  public render(): React.ReactElement<IHelloReactProps> {
    return (
      <div className={ styles.helloReact }>
        <div className={ styles.container }>
          <Tabs spHttpClient={this.props.spHttpClient} currentSiteUrl={this.props.currentSiteUrl}>

          </Tabs>
        </div>
      </div>
    );
  }
}
