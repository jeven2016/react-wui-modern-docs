import React from 'react';
import intl from 'react-intl-universal';
import {Menu} from '../../../react-wui';
import DocComponent from '../DocComponent';
import {
  MenuA,
  MenuB,
  MenuC,
  MenuD, MenuDisabled,
  MenuE,
  MenuFloat,
  MenuFloatComponents,
  MenuFloatItems,
  MenuFloatLeft,
  MenuFloatRight, MenuItemDisabled,
} from './Menus';

export default class MenuIndex extends DocComponent {
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
          <h3 id="menuFloatItems"> {intl.get(
              'content.menu.sample.float.items')}</h3>
          <MenuFloatItems/>
        </section>

        <section>
          <h3 id="menuFloatRight"> {intl.get(
              'content.menu.sample.float.right')}</h3>
          <MenuFloatRight/>
        </section>

        <section>
          <h3 id="menuFloatLeft"> {intl.get(
              'content.menu.sample.float.left')}</h3>
          <MenuFloatLeft/>
        </section>

        <section>
          <h3 id="menuFloatComponents"> {intl.get(
              'content.menu.sample.float.components')}</h3>
          <MenuFloatComponents/>
        </section>
        <section>
          <h3 id="menuDisabled"> {intl.get(
              'content.menu.sample.float.disabled.menu')}</h3>
          <MenuDisabled/>
        </section>
        <section>
          <h3 id="menuItemDisabled"> {intl.get(
              'content.menu.sample.float.disabled.menu.item')}</h3>
          <MenuItemDisabled/>
        </section>


        <section>
          <h3 id="menuFloatColors"> {intl.get(
              'content.menu.sample.float.colors')}</h3>
        </section>

      </div>

      <div className="doc right-col col-md-2">
        <Menu onClickItem={this.clickLink} hasBorder={false}
              style={{position: 'fixed'}}>
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
            <Menu.Item id="#menuFloat">
              {intl.get('content.menu.sample.menuF')}
            </Menu.Item>
            <Menu.Item id="#menuFloatItems">
              {intl.get('content.menu.sample.float.items')}
            </Menu.Item>
            <Menu.Item id="#menuFloatRight">
              {intl.get('content.menu.sample.float.right')}
            </Menu.Item>
            <Menu.Item id="#menuFloatLeft">
              {intl.get('content.menu.sample.float.left')}
            </Menu.Item>
            <Menu.Item id="#menuFloatComponents">
              {intl.get('content.menu.sample.float.components')}
            </Menu.Item>

            <Menu.Item id="#menuDisabled">
              {intl.get('content.menu.sample.float.disabled.menu')}
            </Menu.Item>
            <Menu.Item id="#menuItemDisabled">
              {intl.get('content.menu.sample.float.disabled.menu.item')}
            </Menu.Item>

            <Menu.Item id="#menuFloatColors">
              {intl.get('content.menu.sample.float.colors')}
            </Menu.Item>

          </Menu.List>
        </Menu>
      </div>
    </>;

    return content;
  }
}