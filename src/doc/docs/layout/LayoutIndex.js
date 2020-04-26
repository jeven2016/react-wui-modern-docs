import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {LayoutA, LayoutB, LayoutC, LayoutD, LayoutE, LayoutF} from './LayoutA';

export default class LayoutIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.layout.title')}</h2>
        <p>
          {intl.get('content.layout.simple.desc')}
        </p>

        <span className="grid-sample-col">
        <section>
          <h3 id="layoutA">{intl.get('content.layout.sample.A')}</h3>
          <LayoutA/>
        </section>

          <section>
          <h3 id="layoutB">{intl.get('content.layout.sample.B')}</h3>
          <LayoutB/>
        </section>

          <section>
          <h3 id="layoutC">{intl.get('content.layout.sample.C')}</h3>
          <LayoutC/>
        </section>
          <section>
          <h3 id="layoutD">{intl.get('content.layout.sample.D')}</h3>
          <LayoutD/>
        </section>

         <section>
          <h3 id="layoutE">{intl.get('content.layout.sample.E')}</h3>
          <LayoutE/>
        </section>

          <section>
          <h3 id="layoutF">{intl.get('content.layout.sample.F')}</h3>
          <LayoutF/>
        </section>


        </span>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}