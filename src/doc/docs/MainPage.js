import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import intl from 'react-intl-universal';
import ButtonIndex from './button/ButtonIndex';
import MenuIndex from './menu/MenuIndex';
import {Menu} from '../../react-wui';
import DropdownIndex from './dropdown/DropdownIndex';

export default class MainPage extends Component {

  render() {
    const {match} = this.props;
    return (
        <div className="doc grid-row row">
          <div className="doc left-nav-col col-xs-12 col-md-2">
            <Menu block hasBorder={false}>
              <Menu.Header id="header">Geting Started</Menu.Header>
              <Menu.List>
                <Menu.Item id="installItem">Install</Menu.Item>
                <Menu.Item id="basicItem">Basic</Menu.Item>
              </Menu.List>
              <Menu.SubMenu>
                <Menu.Header>Components</Menu.Header>
                <Menu.List>
                  <Menu.Item id="AccordionItem">
                    Accordion 手风琴
                  </Menu.Item>
                  <Menu.Item id="BlockquoteItem">
                    Blockquote 引用
                  </Menu.Item>
                  <Menu.Item id="buttonItem">
                    <Link to={`${match.url}/components/button`}>
                      {intl.get('main.navbar.button')}
                    </Link>
                  </Menu.Item>
                  <Menu.Item id="CardItem">
                    Card 卡片
                  </Menu.Item>
                  < Menu.Item id="DrawerItem">
                    Drawer 抽屉
                  </Menu.Item>
                  <Menu.Item id="DialogItem">
                    Dialog 对话框
                  </Menu.Item>
                  <Menu.Item id="DropdownItem">
                    <Link to={`${match.url}/components/dropdown`}>
                      {intl.get('main.navbar.dropdown')}
                    </Link>
                  </Menu.Item>
                  <Menu.Item id="InputItem">
                    Input 输入框
                  </Menu.Item>
                  <Menu.Item id="NavbarItem">
                    Navbar 导航栏
                  </Menu.Item>
                  <Menu.Item id="MenuItem">
                    <Link to={`${match.url}/components/menu`}>
                      {intl.get('main.navbar.menu')}
                    </Link>
                  </Menu.Item>
                  <Menu.Item id="PopoverItem">
                    Popover 弹出框
                  </Menu.Item>
                  <Menu.Item id="FormItem">
                    Form 表单
                  </Menu.Item>
                  <Menu.Item id="TableItem">
                    Table 表格
                  </Menu.Item>
                  <Menu.Item id="LoadingItem">
                    Loading 加载
                  </Menu.Item>
                  <Menu.Item id="ToggleItem">
                    Toggle 开关
                  </Menu.Item>
                  <Menu.Item id="SlidershowItem">
                    Slidershow 幻灯片
                  </Menu.Item>
                  <Menu.Item id="LayoutItem">
                    Layout 布局
                  </Menu.Item>
                </Menu.List>
              </Menu.SubMenu>
              <Menu.SubMenu>
                <Menu.Header>Common 公共</Menu.Header>
                <Menu.List>
                  <Menu.Item id="TypefaceItem">
                    Typeface 字体
                  </Menu.Item>
                  <Menu.Item id="colorItem">
                    Color 颜色
                  </Menu.Item>
                  <Menu.Item id="styleItem">
                    Style 样式
                  </Menu.Item>
                  <Menu.Item id="IconItem">
                    Icon 图标
                  </Menu.Item>
                </Menu.List>
              </Menu.SubMenu>
            </Menu>


          </div>

          <Route exact={true} path={`${match.url}/components/button`}
                 component={ButtonIndex}/>
          <Route exact={true} path={`${match.url}/components/menu`}
                 component={MenuIndex}/>
          <Route exact={true} path={`${match.url}/components/dropdown`}
                 component={DropdownIndex}/>

        </div>
    );

  }
}