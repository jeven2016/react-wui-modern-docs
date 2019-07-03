import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {A, A1, B, C, D, E, F} from "./Inputs";

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
          <h3 id="inputA1">{intl.get('content.input.sample.A1')}</h3>
          <A1/>
        </section>
        <section>
          <h3 id="inputB">{intl.get('content.input.sample.B')}</h3>
          <B/>
        </section>
        <section>
          <h3 id="inputC">{intl.get('content.input.sample.C')}</h3>
          <C/>
        </section>
        <section>
          <h3 id="inputD">{intl.get('content.input.sample.D')}</h3>
          <D/>
        </section>

        <section>
          <h3 id="inputE">{intl.get('content.input.sample.E')}</h3>
          <E/>
        </section>
        <section>
          <h3 id="inputF">{intl.get('content.input.sample.F')}</h3>
          <F/>
        </section>

        </span>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}