import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import Frame from 'react-frame-component';
import LayoutA from './LayoutA';
import DocFrame from './DocFrame';


export default class LayoutIndex extends DocComponent {
  constructor(args) {
    super(args);
    this.clickLink = this.clickLink.bind(this);
  }

  render() {
    return this.content();
  }

  clickLink(id) {
    this.scrollTo(id);
  }

  content() {

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

    let content = <>
      <div className="doc center-col col-xs-12 col-md-8">
        <h2 id="menu_title">{intl.get('content.layout.title')}</h2>
        <p>
          {intl.get('content.layout.simple.desc')}
        </p>

        <span className="grid-sample-col">
        <section>
          <h3 id="layoutA">{intl.get('content.layout.sample.A')}</h3>
          <Frame initialContent={template} mountTarget='#docRoot'
                 style={{overflow: 'visible'}}
                 scrolling="no"
                 frameBorder="0"
                 width="100%" height="500px"
                 >
            <LayoutA/>
          </Frame>;

          {/* <iframe
               style={{width:'100%', height:"500px", overflow:'visible'}}
               src="/#/main/components/layoutA"
               width="100%"
               height="500px"
               scrolling="no"
               frameBorder="0"
           />*/}
        </section>

        </span>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}