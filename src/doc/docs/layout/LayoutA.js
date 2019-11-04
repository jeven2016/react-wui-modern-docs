import React, {useState} from 'react';

import '../../../style/index.css';
import '../../../style/wui-bundle-min.css';
import '../../../style/doc.scss';
import {
  Breadcrumb,
  Button,
  Icon,
  IconHome,
  Layout,
  Menu,
  NavBar,
} from '../../../react-wui';
import DocFrame from './DocFrame';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import SamplePannel from '../../common/SamplePannel';

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
  const [collapse, setCollapse] = useState(false);

  let code = `
  import React, {Component} from "react";
  import {Layout} from "react-wui";
  
  const sample = (props)=>{
  
  
  }
  `;

  let comp = <Layout style={{height: '100%'}}>
    <Layout.Split style={{marginBottom: '1rem'}}>
      <Layout.Slider collapse={collapse}
                     style={{flex: '0 1 200px', background: '#000c17'}}>
        <div style={{
          fontSize: '1.5rem', fontWeight: 'bold', color: '#fff',
          textAlign: 'center',
          padding: '1rem 0',
        }}>
          Title Area
        </div>
        <Menu type="dark" block popup direction="vertical">
          <Menu.SubMenu id="sub1">
            <Menu.Header><Icon>
              <FontAwesomeIcon icon={faList}/>
            </Icon>
              <span>Menu</span>
            </Menu.Header>
            <Menu.List>
              <Menu.Item id="item1">item1</Menu.Item>
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
            </Menu.List>
          </Menu.SubMenu>
        </Menu>
      </Layout.Slider>
      <Layout>
        <Layout.Header style={{borderBottom: '1px solid #ccc'}}>
          <Button outline extraClassName="clear-border"
                  onClick={() => setCollapse(val => !val)}>
            <IconHome/>
          </Button>
        </Layout.Header>
        <Layout.Content style={{background: '#fff', padding: '1rem'}}>
          Your Content
        </Layout.Content>
      </Layout>
    </Layout.Split>
  </Layout>;
  return <SamplePannel component={comp} code={code}/>;
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