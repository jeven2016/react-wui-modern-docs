import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {AlertA, CheckboxA} from "./Checkboxs";

export default class CheckboxIndex extends DocComponent {
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
        <h2 id="checkbox_title">{intl.get('content.checkbox.title')}</h2>
        <p>
          {intl.get('content.checkbox.simple.desc')}
        </p>

        <section>
          <h3 id="checkboxA">{intl.get(
              'content.checkbox.sample.checkboxA')}</h3>
          <CheckboxA/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}