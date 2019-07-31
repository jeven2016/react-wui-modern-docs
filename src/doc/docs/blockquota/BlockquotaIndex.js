import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {
  BlockquotaA,
  BlockquotaB,
  BlockquotaC,
  BlockquotaD, BlockquotaE
} from "./Blockquotas";

export default class BlockquotaIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.blockquota.title')}</h2>
        <p>
          {intl.get('content.blockquota.simple.desc')}
        </p>

        <section>
          <h3 id="bqA">{intl.get('content.blockquota.sample.blockquotaA')}</h3>
          <BlockquotaA/>
        </section>

        <section>
          <h3 id="bqB">{intl.get('content.blockquota.sample.blockquotaB')}</h3>
          <BlockquotaB/>
        </section>

        <section>
          <h3 id="bqC">{intl.get('content.blockquota.sample.blockquotaC')}</h3>
          <BlockquotaC/>
        </section>

        <section>
          <h3 id="bqD">{intl.get('content.blockquota.sample.blockquotaD')}</h3>
          <BlockquotaD/>
        </section>

        <section>
          <h3 id="bqE">{intl.get('content.blockquota.sample.blockquotaE')}</h3>
          <BlockquotaE/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}