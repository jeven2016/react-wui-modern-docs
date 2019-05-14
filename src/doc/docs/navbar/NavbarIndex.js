import React from 'react';
import DocComponent from "../DocComponent";
import intl from "react-intl-universal";
import {NavbarA, NavbarB, NavbarC, NavbarD, NavbarE, NavbarF} from "./Navbars";

export default class NavbarIndex extends DocComponent {
  constructor(args) {
    super(args);
    this.clickLink = this.clickLink.bind(this);
  }

  render() {
    return this.content();
  }

  clickLink(itemInfo) {
    this.scrollTo(itemInfo.id);
  }

  content() {
    let content = <>
      <div className="doc center-col col-xs-12 col-md-8">
        <h2 id="navbar_title">{intl.get('content.menu.title')}</h2>
        <p>
          {intl.get('content.navbar.simple.desc')}
        </p>

        <section>
          <h3 id="navbar_a"> {intl.get('content.navbar.sample.navbar')}</h3>
          <NavbarA/>
        </section>

        <section>
          <h3 id="navbar_B"> {intl.get('content.navbar.sample.navbarB')}</h3>
          <NavbarB/>
        </section>

        <section>
          <h3 id="navbar_C"> {intl.get('content.navbar.sample.navbarC')}</h3>
          <NavbarC/>
        </section>

        <section>
          <h3 id="navbar_D"> {intl.get('content.navbar.sample.navbarD')}</h3>
          <NavbarD/>
        </section>

        <section>
          <h3 id="navbar_E"> {intl.get('content.navbar.sample.navbarE')}</h3>
          <NavbarE/>
        </section>

        <section>
          <h3 id="navbar_F"> {intl.get('content.navbar.sample.navbarF')}</h3>
          <NavbarF/>
        </section>

      </div>
      <div className="doc right-col col-md-2">>
      </div>
    </>;
    return content;
  }
}