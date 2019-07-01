import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {A, B, C, D, D2, E, F, G, H,I} from "./Buttons";

export default class ButtonIndex extends DocComponent {
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
        <h2 id="badge_title">{intl.get('content.button.title')}</h2>
        <p>
          {intl.get('content.button.simple.desc')}
        </p>

        <section>
          <h3 id="buttonA">{intl.get('content.button.sample.A')}</h3>
          <A/>
        </section>

        <section>
          <h3 id="buttonB">{intl.get('content.button.sample.B')}</h3>
          <B/>
        </section>

        <section>
          <h3 id="buttonC">{intl.get('content.button.sample.C')}</h3>
          <C/>
        </section>

        <section>
          <h3 id="buttonG">{intl.get('content.button.sample.G')}</h3>
          <G/>
        </section>

        <section>
          <h3 id="buttonD">{intl.get('content.button.sample.D')}</h3>
          <D/>
        </section>

        <section>
          <h3 id="buttonD2">{intl.get('content.button.sample.D2')}</h3>
          <D2/>
        </section>


        <section>
          <h3 id="buttonE">{intl.get('content.button.sample.E')}</h3>
          <E/>
        </section>
        <section>
          <h3 id="buttonF">{intl.get('content.button.sample.F')}</h3>
          <F/>
        </section>

        <section>
          <h3 id="buttonH">{intl.get('content.button.sample.H')}</h3>
          <H/>
        </section>
        <section>
          <h3 id="buttonI">{intl.get('content.button.sample.I')}</h3>
          <I/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}