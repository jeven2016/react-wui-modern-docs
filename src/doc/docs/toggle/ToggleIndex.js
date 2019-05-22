import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {ToggleA, ToggleB} from "./Toggles";

export default class ToggleIndex extends DocComponent {
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
        <h2 id="toggle_title">{intl.get('content.toggle.title')}</h2>
        <p>
          {intl.get('content.toggle.simple.desc')}
        </p>

        <section>
          <h3 id="toggleA">{intl.get('content.toggle.sample.toggleA')} </h3>
          <ToggleA/>
        </section>

        <section>
          <h3 id="toggleB">{intl.get('content.toggle.sample.toggleB')} </h3>
          <ToggleB/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}