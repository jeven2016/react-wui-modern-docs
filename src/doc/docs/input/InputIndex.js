import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {A, B} from "./Inputs";

export default class InputIndex extends DocComponent {
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
    let content = <>
      <div className="doc center-col col-xs-12 col-md-8">
        <h2 id="menu_title">{intl.get('content.input.title')}</h2>
        <p>
          {intl.get('content.input.simple.desc')}
        </p>

        <span className="grid-sample-col">
        <section>
          <h3 id="inputA">{intl.get('content.input.sample.A')}</h3>
          <A/>
        </section>
           <section>
          <h3 id="inputB">{intl.get('content.input.sample.B')}</h3>
          <B/>
        </section>

        </span>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}