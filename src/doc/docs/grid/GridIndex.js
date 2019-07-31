import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {GridA, GridB, GridC, GridD, GridE, GridF} from './Grids';

export default class GridIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.grid.title')}</h2>
        <p>
          {intl.get('content.grid.simple.desc')}
        </p>

        <span className="grid-sample-col">
        <section>
          <h3 id="gridA">{intl.get('content.grid.sample.gridA')}</h3>
          <GridA/>
        </section>

        <section>
          <h3 id="gridB">{intl.get('content.grid.sample.gridB')}</h3>
          <GridB/>
        </section>

        <section>
          <h3 id="gridC">{intl.get('content.grid.sample.gridC')}</h3>
          <GridC/>
        </section>

        <section>
          <h3 id="gridD">{intl.get('content.grid.sample.gridD')}</h3>
          <GridD/>
        </section>

        <section>
          <h3 id="gridE">{intl.get('content.grid.sample.gridE')}</h3>
          <GridE/>
        </section>

        <section>
          <h3 id="gridF">{intl.get('content.grid.sample.gridF')}</h3>
          <GridF/>
        </section>
        </span>

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return content;
  }
}