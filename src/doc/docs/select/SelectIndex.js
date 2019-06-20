import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {A} from "./Selects";

export default class SelectIndex extends DocComponent {
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
        <h2 id="badge_title">{intl.get('content.select.title')}</h2>
        <p>
          {intl.get('content.select.simple.desc')}
        </p>

        <section>
          <h3 id="selectA">{intl.get('content.select.sample.A')}</h3>
          <A/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}