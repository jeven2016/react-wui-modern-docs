import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {BreadA, BreadB, BreadC, BreadD} from "./Breadcrumbs";

export default class BreadcrumbIndex extends DocComponent {
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
        <h2 id="badge_title">{intl.get('content.breadcrumb.title')}</h2>
        <p>
          {intl.get('content.breadcrumb.simple.desc')}
        </p>

        <section>
          <h3 id="breadcrumbA">{intl.get('content.breadcrumb.sample.A')}</h3>
          <BreadA/>
        </section>
        <section>
          <h3 id="breadcrumbB">{intl.get('content.breadcrumb.sample.B')}</h3>
          <BreadB/>
        </section>
        <section>
          <h3 id="breadcrumbC">{intl.get('content.breadcrumb.sample.C')}</h3>
          <BreadC/>
        </section>
        <section>
          <h3 id="breadcrumbD">{intl.get('content.breadcrumb.sample.D')}</h3>
          <BreadD/>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}