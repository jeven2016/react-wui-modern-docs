import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {DrawerA, DrawerB, DrawerC, DrawerD} from "./Drawers";

export default class DrawerIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.drawer.title')}</h2>
        <p>
          {intl.get('content.drawer.simple.desc')}
        </p>

        <section>
          <h3 id="drawerA">{intl.get('content.modal.drawer.drawerA')}</h3>
          <DrawerA/>
        </section>

        <section>
          <h3 id="drawerB">{intl.get('content.modal.drawer.drawerB')}</h3>
          <DrawerB/>
        </section>

        <section>
          <h3 id="drawerC">{intl.get('content.modal.drawer.drawerC')}</h3>
          <DrawerC/>
        </section>

        <section>
          <h3 id="drawerD">{intl.get('content.modal.drawer.drawerD')}</h3>
          <DrawerD/>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}