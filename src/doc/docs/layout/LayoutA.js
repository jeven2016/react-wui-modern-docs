import React, {useState} from 'react';

import '../../../style/index.css';
import '../../../style/wui-modern-0.5.1.min.css';
import '../../../style/doc.scss';
import {
  Breadcrumb,
  Button,
  Icon, IconArrowDown,
  IconHome, IconList,
  Layout,
  Menu,
  NavBar, Toggle,
} from '../../../react-wui-modern';
import DocFrame from './DocFrame';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {IconCalendar, IconClear2} from '../../../react-wui-modern/Icons';
import Tooltip from '../../../react-wui-modern/Tooltip';

export const LayoutA = (props) => {

  let code = `
  import React, {Component} from "react";
  import {Layout} from "react-wui";
  
  const sample = (props)=>{
  
  
  }
  `;

  return <DocFrame code={code}>
    <Layout style={{height: '100%'}}>
      <Layout.Header>
        <NavBar type="primary" extraClassName="bg-color-black">
          <NavBar.Title style={{paddingLeft: '3rem'}}>
            <strong>Title Area</strong>
          </NavBar.Title>
          <NavBar.List align="left">
            <NavBar.Item hasBackground={true}>
              Module1
            </NavBar.Item>
            <NavBar.Item hasBackground={true}>
              Module2
            </NavBar.Item>
            <NavBar.Item alignRight>
              <Button extraClassName="clear-border" circle={true}
                      color="green"
                      outline={true}>
                ?
              </Button>
            </NavBar.Item>
          </NavBar.List>
        </NavBar>
      </Layout.Header>
      <Layout style={{background: '#f8f9fa', padding: '0 2rem'}}>
        <Breadcrumb style={{margin: '0.5rem 0'}}>
          <Breadcrumb.Item>
            <IconHome style={{fontSize: '1.25em'}}/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Main
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content
            style={{background: '#fff', padding: '1rem', marginBottom: '1rem'}}>
          Your Content
        </Layout.Content>
      </Layout>
    </Layout>

  </DocFrame>;
};

export const LayoutB = (props) => {

  let code = `
  import React, {Component} from "react";
  import {Layout} from "react-wui";
  
  const sample = (props)=>{
  
  
  }
  `;

  return <DocFrame code={code}>
    <Layout style={{height: '100%'}}>
      <Layout.Header>
        <NavBar type="primary">
          <NavBar.Title style={{paddingLeft: '3rem'}}>
            <strong>Title Area</strong>
          </NavBar.Title>
          <NavBar.List align="left">
            <NavBar.Item hasBackground={true}>
              Module1
            </NavBar.Item>
            <NavBar.Item hasBackground={true}>
              Module2
            </NavBar.Item>
            <NavBar.Item alignRight>
              <Button extraClassName="clear-border" circle={true}
                      color="green"
                      outline={true}>
                ?
              </Button>
            </NavBar.Item>
          </NavBar.List>
        </NavBar>
      </Layout.Header>
      <Layout.Split>
        <Layout.Slider hasBox>
          <Menu type="primary" block>
            <Menu.SubMenu id="sub3">
              <Menu.Header><Icon>
                <FontAwesomeIcon icon={faList}/>
              </Icon>
                <span>Menu</span>
              </Menu.Header>
              <Menu.List>
                <Menu.Item id="item1_3">item4</Menu.Item>
                <Menu.Item id="item2_3">item5</Menu.Item>
                <Menu.Item id="item3_3">item6</Menu.Item>
              </Menu.List>
            </Menu.SubMenu>
          </Menu>
        </Layout.Slider>
        <Layout style={{background: '#f8f9fa', padding: '0 2rem'}}>
          <Layout>
            <Breadcrumb style={{margin: '0.5rem 0'}}>
              <Breadcrumb.Item>
                <IconHome style={{fontSize: '1.25em'}}/>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Main
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Application
              </Breadcrumb.Item>
            </Breadcrumb>
            <Layout.Content style={{background: '#fff', padding: '1rem'}}>
              Your Content
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout.Split>
      <Layout.Footer style={{textAlign: 'center', background: '#f8f9fa'}}>
        <span>react-wui ©2019 All rights reserved</span>
      </Layout.Footer>
    </Layout>

  </DocFrame>;
};

export const LayoutC = (props) => {

  let code = `
  import React, {Component} from "react";
  import {Layout} from "react-wui";
  
  const sample = (props)=>{
  
  
  }
  `;

  return <DocFrame code={code}>
    <Layout style={{height: '100%'}}>
      <Layout.Header>
        <NavBar type="primary" extraClassName="bg-color-black">
          <NavBar.Title style={{paddingLeft: '3rem'}}>
            <strong>Title Area</strong>
          </NavBar.Title>
          <NavBar.List align="left">
            <NavBar.Item hasBackground={true}>
              Module1
            </NavBar.Item>
            <NavBar.Item hasBackground={true}>
              Module2
            </NavBar.Item>
            <NavBar.Item alignRight>
              <Button extraClassName="clear-border" circle={true}
                      color="green"
                      outline={true}>
                ?
              </Button>
            </NavBar.Item>
          </NavBar.List>
        </NavBar>
      </Layout.Header>
      <Layout style={{background: '#f8f9fa', padding: '0 2rem'}}>
        <Breadcrumb style={{margin: '0.5rem 0'}}>
          <Breadcrumb.Item>
            <IconHome style={{fontSize: '1.25em'}}/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Main
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Split style={{marginBottom: '1rem'}}>
          <Layout.Slider style={{
            background: '#fff',
            width: '200px',
          }}>
            <Menu type="primary" block style={{
              marginTop: '0.5rem',
              borderRight: '1px solid #f8f9fa',
            }}>
              <Menu.SubMenu id="sub3">
                <Menu.Header><Icon>
                  <FontAwesomeIcon icon={faList}/>
                </Icon>
                  <span>Menu</span>
                </Menu.Header>
                <Menu.List>
                  <Menu.Item id="item1_3">item4</Menu.Item>
                  <Menu.Item id="item2_3">item5</Menu.Item>
                  <Menu.Item id="item3_3">item6</Menu.Item>
                </Menu.List>
              </Menu.SubMenu>
            </Menu>
          </Layout.Slider>
          <Layout.Content
              style={{
                background: '#fff',
                padding: '1rem',
              }}>
            Your Content
          </Layout.Content>
        </Layout.Split>


      </Layout>
    </Layout>

  </DocFrame>;
};

export const LayoutD = (props) => {
  const [collapse, setCollapse] = useState(true);
  const [leftSlider, setLeftSlider] = useState(true);

  let code = `
  import React, {Component} from "react";
  import {Layout} from "react-wui";
  
  const sample = (props)=>{
  
  
  }
  `;

  return <>
    <Toggle type="secondary" content={{on: '在右侧', off: '在左侧', showInBar: true}}
            onChange={() => setLeftSlider(!leftSlider)}
            style={{marginBottom: '2rem', width: '6rem'}}/>

    <Layout style={{height: '500px', overflowY: 'auto', overflowX: 'hidden'}}>
      <Layout.Split style={{flexDirection: leftSlider ? 'row' : 'row-reverse'}}>
        <Layout.Slider collapse={collapse} style={{background: '#000c17'}}>
          <div style={{
            fontWeight: 'bold',
            background: '#6c8aea',
            color: '#fff',
            textAlign: 'center',
            padding: '1rem 0',
          }}>
            Title
          </div>
          <Menu type="dark" collapse={collapse} block
                onSelect={(itemInfo) => console.log(itemInfo)}
                multiLevelMenus={collapse}
                subMenuPosition={leftSlider ? 'right' : 'left'}
                menuDirection="vertical">
            <Menu.List>
              <Tooltip body="菜单1" disabled={!collapse}
                       position={leftSlider ? 'right' : 'left'}>
                <Menu.Item id="cd1">
                  <IconCalendar/>
                  <span>Add User</span>
                </Menu.Item>
              </Tooltip>
            </Menu.List>
            <Menu.SubMenu id="sub1">
              <Menu.Header>
                <IconCalendar/>
                <span>系统时间</span>
              </Menu.Header>
              <Menu.List>
                <Menu.Item id="item1">时间设置</Menu.Item>
              </Menu.List>
            </Menu.SubMenu>
            <Menu.SubMenu id="sub2">
              <Menu.Header><Icon>
                <FontAwesomeIcon icon={faList}/>
              </Icon>
                <span>Menu</span>
              </Menu.Header>
              <Menu.List>
                <Menu.Item id="item2">item2</Menu.Item>
                <Menu.SubMenu id="sub3">
                  <Menu.Header>
                    <IconHome/>
                    <span>Menu3</span>
                  </Menu.Header>
                  <Menu.List>
                    <Menu.Item id="item33"> <IconHome/>
                      <span>item33</span></Menu.Item>
                  </Menu.List>
                </Menu.SubMenu>
              </Menu.List>
            </Menu.SubMenu>
          </Menu>
        </Layout.Slider>
        <Layout>
          <Layout.Header style={{
            borderBottom: '1px solid #ccc',
            justifyContent: 'flex-end',
          }}>
            <Button outline extraClassName="clear-border"
                    circle
                    style={{margin: '5px'}}
                    onClick={() => setCollapse(val => !val)}>
              <IconList/>
            </Button>
          </Layout.Header>
          <Layout.Content
              style={{background: '#fff', padding: '1rem', height: '50rem'}}>
            Your Content
          </Layout.Content>
        </Layout>
      </Layout.Split>
    </Layout>
  </>
      ;
};

export const LayoutE = (props) => {

  let code = `
  import React, {Component} from "react";
  import {Layout} from "react-wui";
  
  const sample = (props)=>{
  
  
  }
  `;

  return <DocFrame code={code}>
    <Layout style={{height: '100%'}}>
      <Layout.Header fixed="top">
        <NavBar type="primary" extraClassName="bg-color-black">
          <NavBar.Title style={{paddingLeft: '3rem'}}>
            <strong>Title Area</strong>
          </NavBar.Title>
          <NavBar.List align="left">
            <NavBar.Item hasBackground={true}>
              Module1
            </NavBar.Item>
            <NavBar.Item hasBackground={true}>
              Module2
            </NavBar.Item>
            <NavBar.Item alignRight>
              <Button extraClassName="clear-border" circle={true}
                      color="green"
                      outline={true}>
                ?
              </Button>
            </NavBar.Item>
          </NavBar.List>
        </NavBar>
      </Layout.Header>
      <Layout
          style={{marginTop: '4rem', background: '#f8f9fa', padding: '0 2rem'}}>
        <Breadcrumb style={{margin: '0.5rem 0'}}>
          <Breadcrumb.Item>
            <IconHome style={{fontSize: '1.25em'}}/>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Main
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content
            style={{background: '#fff', padding: '1rem', marginBottom: '1rem'}}>
          <div style={{height: '1000px'}}>
            Your Content<br/>
          </div>
        </Layout.Content>
      </Layout>
      <Layout.Footer fixed="bottom"
                     style={{
                       textAlign: 'center',
                       height: '3rem',
                       background: '#f8f9fa',
                     }}>
        <span>react-wui ©2019 All rights reserved</span>
      </Layout.Footer>
    </Layout>

  </DocFrame>;
};

export const LayoutF = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [leftSlider, setLeftSlider] = useState(true);

  let code = `
  import React, {Component} from "react";
  import {Layout} from "react-wui";
  
  const sample = (props)=>{
  
  
  }
  `;

  return <>
    <Toggle type="secondary" content={{on: '在右侧', off: '在左侧', showInBar: true}}
            onChange={() => setLeftSlider(!leftSlider)}
            style={{marginBottom: '2rem', width: '6rem'}}/>
    <DocFrame code={code}>
      <Layout style={{height: '500px', overflowY: 'auto', overflowX: 'hidden'}}>
        <Layout.Header fixed="top">
          <NavBar type="primary">
            <NavBar.Title style={{paddingLeft: '3rem'}}>
              <strong>Title Area</strong>
            </NavBar.Title>
            <NavBar.List align="left">
              <NavBar.Item hasBackground={true}>
                Module1
              </NavBar.Item>
              <NavBar.Item hasBackground={true}>
                Module2
              </NavBar.Item>
              <NavBar.Item alignRight>
                <Button extraClassName="clear-border" circle={true}
                        color="green"
                        outline={true}>
                  ?
                </Button>
              </NavBar.Item>
            </NavBar.List>
          </NavBar>
        </Layout.Header>
        <Layout.Slider collapse={collapse} style={{
          background: '#000c17',
          position: 'fixed',
          top: 0,
          left: 0,
        }}>
          <div style={{
            fontWeight: 'bold',
            background: '#6c8aea',
            color: '#fff',
            textAlign: 'center',
            padding: '1rem 0',
          }}>
            Title
          </div>
          <Menu type="dark" collapse={collapse} block
                onSelect={(itemInfo) => console.log(itemInfo)}
                multiLevelMenus={collapse}
                subMenuPosition={leftSlider ? 'right' : 'left'}
                menuDirection="vertical">
            <Menu.List>
              <Tooltip body="菜单1" disabled={!collapse}
                       position={leftSlider ? 'right' : 'left'}>
                <Menu.Item id="cd1">
                  <IconCalendar/>
                  <span>Add User</span>
                </Menu.Item>
              </Tooltip>
            </Menu.List>
            <Menu.SubMenu id="sub1">
              <Menu.Header>
                <IconCalendar/>
                <span>系统时间</span>
              </Menu.Header>
              <Menu.List>
                <Menu.Item id="item1">时间设置</Menu.Item>
              </Menu.List>
            </Menu.SubMenu>
          </Menu>
        </Layout.Slider>
        <Layout style={{
          marginLeft: '250px',
        }}>
          <Layout.Header style={{
            marginTop: '4rem',
            borderBottom: '1px solid #ccc',
            justifyContent: 'flex-end',
          }}>
            <Button outline extraClassName="clear-border"
                    circle
                    style={{margin: '5px'}}
                    onClick={() => setCollapse(val => !val)}>
              <IconList/>
            </Button>
          </Layout.Header>
          <Layout.Content
              style={{background: '#fff', padding: '1rem',
                height: '150rem'}}>
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content
            Your Content Your ContentYour ContentYour ContentYour ContentYour Content



          </Layout.Content>
        </Layout>
      </Layout>
    </DocFrame>
  </>
      ;
};