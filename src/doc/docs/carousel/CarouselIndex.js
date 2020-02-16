import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import DemoWidth from './DemoWidth';
import DemoScroll from './DemoScroll';
import {AutoPlayCom} from './Carousel2';

export default class CarouselIndex extends DocComponent {
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
          <h3 id="demoWidth">Demo width </h3>
          <DemoWidth/>
        </section>
        <section>
          <h3>Demo scroll </h3>
          <DemoScroll/>
        </section>

        <section>
          <h3>simple carousel </h3>
          <AutoPlayCom/>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}