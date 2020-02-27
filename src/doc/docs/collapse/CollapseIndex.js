import React from 'react';
import DocComponent from '../DocComponent';
import {
  SimpleCollapse,
  CollapseCard,
  CollapseCard2,
  CollapseCard3, CollapseCard4, CollapseCard5,
} from './Collapses';

export default class CollapseIndex extends DocComponent {
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
          <h2 id="menu_title">最简单的Collapse</h2>
          <p>可以折叠或显示的Collapse Panel</p>
          <SimpleCollapse/>
        </section>

        <section>
          <h2 id="menu_title">Collapse</h2>
          <p>可以折叠或显示的Card</p>
          <CollapseCard/>
        </section>

        <section>
          <h2 id="menu_title">Accordion</h2>
          <p></p>
          <CollapseCard2/>
        </section>

        <section>
          <h2 id="menu_title">自定义Icon</h2>
          <CollapseCard3/>
        </section>

        <section>
          <h2 id="menu_title">Add more items</h2>
          <CollapseCard4/>
        </section>

        <section>
          <h2 id="menu_title">自己控制显示</h2>
          <CollapseCard5/>
        </section>
      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}