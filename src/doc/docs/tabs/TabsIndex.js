import React from 'react';
import DocComponent from '../DocComponent';
import {
  AutoPlayCom,
  SimpleTab,
  TestSw,
  SimpleBottomTab,
  LeftTab,
  RightTab, CardTab, SecondaryCardTab, NoBorderTab,
  RemovableTab
} from './Test';

export default class TabsIndex extends DocComponent {
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
      {/*  <section>
          <h3 id="testOpacity">Tabs</h3>
          <TestSw/>
        </section>*/}

        <section>
          <h3 id="autoPlay">Auto Play</h3>
          {/*<AutoPlayCom/>*/}
        </section>

        <section>
          <h3 id="SimpleTab">Normal</h3>
          <SimpleTab/>
        </section>

        <section>
          <h3 id="RemovableTab">Removable</h3>
          <RemovableTab/>
        </section>
{/*
        <section>
          <h3 id="SimpleTab">NoBorderTab</h3>
          <NoBorderTab/>
        </section>

        <section>
          <h3>Card</h3>
          <CardTab/>
        </section>


        <section>
          <h3>SecondaryCard</h3>
          <SecondaryCardTab/>
        </section>*/}

      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}