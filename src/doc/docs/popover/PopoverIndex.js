import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {PopoverA, PopoverB, PopoverC} from "./Popovers";

export default class PopoverIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.popover.title')}</h2>
        <p>
          {intl.get('content.popover.simple.desc')}
        </p>

        <section>
          <h3 id="popoverA">{intl.get('content.popover.sample.popoverA')} </h3>
          <PopoverA/>
        </section>

        <section>
          <h3 id="popoverB">{intl.get('content.popover.sample.popoverB')} </h3>
          <PopoverB/>
        </section>

        <section>
          <h3 id="popoverC">{intl.get('content.popover.sample.popoverC')} </h3>
          <PopoverC/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}