import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {AlertA, AlertB, AlertC} from "./Alerts";

export default class AlertIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.alert.title')}</h2>
        <p>
          {intl.get('content.alert.simple.desc')}
        </p>

        <section>
          <h3 id="alertA">{intl.get('content.alert.sample.alertA')}</h3>
          <AlertA/>
        </section>
        <section>
          <h3 id="alertB">{intl.get('content.alert.sample.alertB')}</h3>
          <AlertB/>
        </section>
        <section>
          <h3 id="alertC">{intl.get('content.alert.sample.alertC')}</h3>
          <AlertC/>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}