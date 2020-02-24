import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HelloReactWebPartStrings';
import HelloReact from './components/HelloReact';
import { IHelloReactProps } from './components/IHelloReactProps';

export interface IHelloReactWebPartProps {
  description: string;
}

export default class HelloReactWebPart extends BaseClientSideWebPart <IHelloReactWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloReactProps> = React.createElement(
      HelloReact,
      {
        description: this.properties.description,
        spHttpClient:this.context.spHttpClient,
        currentSiteUrl: this.context.pageContext.web.absoluteUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
