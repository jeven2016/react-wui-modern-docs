import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {CardA, CardB, CardC, CardD, CardE} from './Cards';

export default class CardIndex extends DocComponent {
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
        <h2 id="toggle_title">{intl.get('content.card.title')}</h2>
        <p>
          {intl.get('content.card.simple.desc')}
        </p>

        <section>
          <h3 id="cardA">{intl.get('content.card.sample.cardA')} </h3>
          <CardA/>
        </section>

        <section>
          <h3 id="cardB">{intl.get('content.card.sample.cardB')} </h3>
          <CardB/>
        </section>

        <section>
          <h3 id="cardC">{intl.get('content.card.sample.cardC')} </h3>
          <CardC/>
        </section>

        <section>
          <h3 id="cardD">{intl.get('content.card.sample.cardD')} </h3>
          <CardD/>
        </section>


        <section>
          <h3 id="cardE">{intl.get('content.card.sample.cardE')} </h3>
          <CardE/>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}