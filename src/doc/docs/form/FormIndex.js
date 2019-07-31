import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {FormA, FormB, FormC, FormD, FormE} from "./Forms";

export default class FormIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.form.title')}</h2>
        <p>
          {intl.get('content.form.simple.desc')}
        </p>
        <section>
          <h3 id="formA">{intl.get('content.form.sample.formA')}</h3>
          <FormA/>
        </section>

        <section>
          <h3 id="formB">{intl.get('content.form.sample.formB')}</h3>
          <FormB/>
        </section>

        <section>
          <h3 id="formC">{intl.get('content.form.sample.formC')}</h3>
          <FormC/>
        </section>

        <section>
          <h3 id="formD">{intl.get('content.form.sample.formD')}</h3>
          <FormD/>
        </section>

        <section>
          <h3 id="formE">{intl.get('content.form.sample.formE')}</h3>
          <FormE/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}