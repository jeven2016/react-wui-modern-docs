import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {BadgeA, BadgeB, BadgeC, BadgeD} from "./Badges";

export default class BadgeIndex extends DocComponent {
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
        <h2 id="badge_title">{intl.get('content.badge.title')}</h2>
        <p>
          {intl.get('content.badge.simple.desc')}
        </p>

        <section>
          <h3 id="badgeA">{intl.get('content.badge.sample.badgeA')}</h3>
          <BadgeA/>
        </section>


        <section>
          <h3 id="badgeB">{intl.get('content.badge.sample.badgeB')}</h3>
          <BadgeB/>
        </section>

        <section>
          <h3 id="badgeC">{intl.get('content.badge.sample.badgeC')}</h3>
          <BadgeC/>
        </section>

        <section>
          <h3 id="badgeD">{intl.get('content.badge.sample.badgeD')}</h3>
          <BadgeD/>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}