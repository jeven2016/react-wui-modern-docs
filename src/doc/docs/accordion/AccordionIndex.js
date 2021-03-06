import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {AccordionA} from "./Accordions";

export default class AccordionIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.accordion.title')}</h2>
        <p>
          {intl.get('content.accordion.simple.desc')}
        </p>

        <section>
          <h3 id="accordionA">{intl.get('content.accordion.accordionA')}</h3>
          <AccordionA/>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}