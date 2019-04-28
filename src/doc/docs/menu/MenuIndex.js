import React from 'react';
import BaseComponent from "../../../react-wui/BaseComponent";
import intl from "react-intl-universal";
import {Card, Divider, Menu} from "../../../react-wui";

export default class MenuIndex extends BaseComponent {

  render() {
    return this.content();
  }

  content() {
    let content = <>
      <div className="doc center-col col-xs-12 col-md-8">
        <h2 id="menu_title">{intl.get('content.menu.title')}</h2>
        <p>
          {intl.get('content.menu.simple.desc')}
        </p>
        <section>
          <h3 id="simple_menu">一个极简的菜单</h3>
          <Card block={true}>
            <Card.Header>
              示例
            </Card.Header>
            <Divider/>
            <Card.Row>
              <Menu hasBorder={false}>
                <Menu.Header id="header">Geting Started</Menu.Header>
                <Menu.List>
                  <Menu.Item id="installItem">Install</Menu.Item>
                  <Menu.Item id="basicItem">Basic</Menu.Item>
                </Menu.List>
              </Menu>
            </Card.Row>
          </Card>
        </section>
      </div>

      <div className="doc right-col col-md-2">
        <Menu hasBorder={false}>
          <Menu.List>
            <Menu.Item id="#menu_title">
              {intl.get(
                  'content.menu.simple.desc')}
            </Menu.Item>
            <Menu.Item id="basicItem">Basic</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
    </>;

    return content;
  }
}