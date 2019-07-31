import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {ModalA, ModalB, ModalC, ModalD, ModalE} from './Modals';

export default class ModalIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.modal.title')}</h2>
        <p>
          {intl.get('content.modal.simple.desc')}
        </p>

        <section>
          <h3 id="modalA">{intl.get('content.modal.sample.modalA')}</h3>
          <ModalA/>
        </section>

        <section>
          <h3 id="modalB">{intl.get('content.modal.simple.modalB')}</h3>
          <ModalB/>
        </section>

        <section>
          <h3 id="modalC">{intl.get('content.modal.simple.modalC')}</h3>
          <ModalC/>
        </section>

        <section>
          <h3 id="modalD">{intl.get('content.modal.simple.modalD')}</h3>
          <ModalD/>
        </section>

        <section>
          <h3 id="modalE">{intl.get('content.modal.simple.modalE')}</h3>
          <ModalE/>
        </section>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}