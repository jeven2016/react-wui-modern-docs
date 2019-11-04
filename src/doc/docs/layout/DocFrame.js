import React, {Component} from 'react';
import {Frame} from 'react-frame-component';

export default class DocFrame extends Component {
  render() {
    const template = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="theme-color" content="#000000"/>
  </head>
  <body>
  <div id="docRoot"></div>
  </body>
  </html>`;

    return <Frame initialContent={template} mountTarget='#docRoot' {...this.props}/>;
  }
}