import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {DpA} from './Dropdowns';

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



      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}