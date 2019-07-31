import React from "react";
import DocComponent from "../DocComponent";
import intl from "react-intl-universal";
import {LoaderA, LoaderB, LoaderC, LoaderD} from "./Loaders";

export default class LoaderIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.loader.title')}</h2>
        <p>
          {intl.get('content.loader.simple.desc')}
        </p>

        <section>
          <h3 id="loaderA">{intl.get('content.loader.sample.loaderA')}</h3>
          <LoaderA/>
        </section>

        <section>
          <h3 id="loaderB">{intl.get('content.loader.sample.loaderB')}</h3>
          <LoaderB/>
        </section>

        <section>
          <h3 id="loaderC">{intl.get('content.loader.sample.loaderC')}</h3>
          <LoaderC/>
        </section>

        <section>
          <h3 id="loaderD">{intl.get('content.loader.sample.loaderD')}</h3>
          <LoaderD/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}