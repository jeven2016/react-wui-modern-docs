import React from 'react';
import DocComponent from '../DocComponent';
import {TreeA, TreeB, TreeC} from './Trees';

export default class TreeIndex extends DocComponent {
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
        <h2 id="menu_title">
          Tree
        </h2>
        <p>Tree sample</p>

        <section>
          <h3> Simple Tree</h3>
          {/*<TreeA/>*/}
        </section>

        <section>
          <h3>JSON data</h3>
          {/*<TreeB/>*/}
        </section>

        <section>
          <h3>Asynchronous loading</h3>
          <TreeC/>
        </section>
      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}