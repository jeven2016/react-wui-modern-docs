import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {NavBar, Affix, Button} from '../../../react-wui-modern';
import {AffixBtn} from './Affixs';

export default class AffixIndex extends DocComponent {
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
      <div className="doc center-col col-xs-12 col-md-8"
           style={{height: '1000px'}}>
        <h2 id="menu_title">{intl.get('content.alert.title')}</h2>
        <p>
          {intl.get('content.alert.simple.desc')}
        </p>
        <AffixBtn/>
      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}