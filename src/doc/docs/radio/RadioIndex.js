import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {AlertA, RadioA, RadioB} from "./Radios";

export default class RadioIndex extends DocComponent {
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
    let cnt = <>
      <div className="doc center-col col-xs-12 col-md-8">
        <h2 id="menu_title">{intl.get('content.radio.title')}</h2>
        <p>
          {intl.get('content.radio.simple.desc')}
        </p>

        <section>
          <h3 id="radioA">{intl.get('content.radio.sample.radioA')}</h3>
          <RadioA/>
        </section>

        <section>
          <h3 id="radioB">{intl.get('content.radio.sample.radioB')}</h3>
          <RadioB/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}