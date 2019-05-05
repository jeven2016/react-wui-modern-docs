import React from 'react';
import intl from "react-intl-universal";
import {Button, Dropdown, Menu} from "../../../react-wui";
import DocComponent from "../DocComponent";
import {MenuA, MenuB, MenuC, MenuD, MenuE, MenuFloat} from './Menus';

export default class MenuIndex extends DocComponent {
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
        <h2 id="menu_title">{intl.get('content.menu.title')}</h2>
        <p>
          {intl.get('content.menu.simple.desc')}
        </p>
        <section>
          <h3 id="simple_menu"> {intl.get('content.menu.sample.menu')}</h3>
          <MenuA/>
        </section>

        <section>
          <h3 id="menuB"> {intl.get('content.menu.sample.menuB')}</h3>
          <MenuB/>
        </section>

        <section>
          <h3 id="menuC"> {intl.get('content.menu.sample.menuC')}</h3>
          <MenuC/>
        </section>

        <section>
          <h3 id="menuD"> {intl.get('content.menu.sample.menuD')}</h3>
          <MenuD/>
        </section>

        <section>
          <h3 id="menuE"> {intl.get('content.menu.sample.menuE')}</h3>
          <MenuE/>
        </section>

        <section>
          <h3 id="menuFloat"> {intl.get('content.menu.sample.menuF')}</h3>
          <MenuFloat/>
        </section>

        <section>
          <h3 id="menuFloatItems"> {intl.get('content.menu.sample.float.items')}</h3>
        </section>

        <section>
          <h3 id="menuFloatRight"> {intl.get('content.menu.sample.float.right')}</h3>
        </section>

        <section>
          <h3 id="menuFloatLeft"> {intl.get('content.menu.sample.float.left')}</h3>
        </section>

        <section>
          <h3 id="menuFloatColors"> {intl.get('content.menu.sample.float.colors')}</h3>
        </section>

      </div>

      <div className="doc right-col col-md-2">
        <Menu onClickItem={this.clickLink} hasBorder={false}
              style={{position: "fixed"}}>
          <Menu.List>
            <Menu.Item id="#menu_title">
              {intl.get('content.menu.title')}
            </Menu.Item>
            <Menu.Item id="#simple_menu">
              {intl.get('content.menu.sample.menu')}
            </Menu.Item>
            <Menu.Item id="#menuB">
              {intl.get('content.menu.sample.menuB')}
            </Menu.Item>
            <Menu.Item id="#menuC">
              {intl.get('content.menu.sample.menuC')}
            </Menu.Item>
            <Menu.Item id="#menuD">
              {intl.get('content.menu.sample.menuD')}
            </Menu.Item>
            <Menu.Item id="#menuE">
              {intl.get('content.menu.sample.menuE')}
            </Menu.Item>
          </Menu.List>
        </Menu>
      </div>
    </>;

    return content;
  }
}