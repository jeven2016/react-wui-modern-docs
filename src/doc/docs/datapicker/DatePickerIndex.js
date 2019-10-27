import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {DatePickerA} from './DatePickers';

export default class DatePickerIndex extends DocComponent {
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
        <h2 id="checkbox_title">{intl.get('content.datepicker.title')}</h2>
        <p>
          {intl.get('content.datepicker.simple.desc')}
        </p>

        <section>
          <h3 id="checkboxA">{intl.get(
              'content.datepicker.sample.A')}</h3>
          <DatePickerA/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}