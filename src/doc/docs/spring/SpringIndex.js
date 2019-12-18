import React from 'react';
import DocComponent from '../DocComponent';
import {TestOpacity, TestNumber, TestUseTransition} from './Basic';

export default class SpringIndex extends DocComponent {
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
        <section>
          <h3 id="testOpacity">测试透明度</h3>
          <TestOpacity/>
        </section>

        <section>
          <h3 id="testOpacity">测试number</h3>
          <TestNumber/>
        </section>
        <section>
          <h3 id="testOpacity">useTransition</h3>
          <TestUseTransition/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}