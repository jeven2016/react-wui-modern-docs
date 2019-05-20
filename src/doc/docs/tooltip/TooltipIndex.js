import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {PopoverA} from '../popover/Popovers';
import {TooltipA} from './Tooltips';

export default class TooltipIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.tooltip.title')}</h2>
        <p>
          {intl.get('content.tooltip.simple.desc')}
        </p>

        <section>
          <h3 id="tooltipA">{intl.get('content.popover.sample.popoverA')} </h3>
          <TooltipA/>
        </section>
      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}