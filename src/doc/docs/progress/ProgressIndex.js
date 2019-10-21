import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {ProgressA, ProgressB, ProgressC} from './ProgressSamples';

export default class ProgressIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.progress.title')}</h2>
        <p>
          {intl.get('content.progress.simple.desc')}
        </p>

        <section>
          <h3 id="sampleA">{intl.get('content.progress.sample.A')} </h3>
          <ProgressA/>
        </section>

        <section>
          <h3 id="sampleB">{intl.get('content.progress.sample.B')} </h3>
          <ProgressB/>
        </section>

        <section>
          <h3 id="sampleB">{intl.get('content.progress.sample.C')} </h3>
          <ProgressC/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}