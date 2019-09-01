import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {DpA, DpB, DpC, DpD, DpE} from './Dropdowns';

export default class DropdownIndex extends DocComponent {
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
    let content = <>
      <div className="doc center-col col-xs-12 col-md-8">
        <h2 id="menu_title">{intl.get('content.dropdown.title')}</h2>
        <p>
          {intl.get('content.menu.simple.desc')}
        </p>
        <section>
          <h3 id="basic_dp">Basic Dropdown </h3>
          <DpA/>
        </section>
{/*
        <section>
          <h3 id="click_dp">{intl.get("content.dropdown.type.click")}</h3>
          <DpB/>
        </section>

        <section>
          <h3 id="dp_position">{intl.get("content.dropdown.position")}</h3>
          <DpC/>
        </section>

        <section>
          <h3 id="dp_btn_group">{intl.get("content.dropdown.button.group")}</h3>
          <DpD/>
        </section>

        <section>
          <h3 id="dp_btn_circle">{intl.get(
              "content.dropdown.button.circle")}</h3>
          <DpE/>
        </section>*/}


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}