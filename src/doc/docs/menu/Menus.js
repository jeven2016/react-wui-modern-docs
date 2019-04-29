import React from 'react';
import {Divider, Menu} from '../../../react-wui';
import SamplePannel from '../../common/SamplePannel';

export const MenuA = () => {
  let comp = <Menu style={{width: '15rem'}}>
    <Menu.Header>用户管理</Menu.Header>
    <Menu.List>
      <Menu.Item id="user">用户</Menu.Item>
      <Menu.Item id="role">角色</Menu.Item>
      <Menu.Item id="authority">权限</Menu.Item>
    </Menu.List>
  </Menu>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu style={{width: "15rem"}}>
                <Menu.Header>用户管理</Menu.Header>
                <Menu.List>
                  <Menu.Item id="user">用户</Menu.Item>
                  <Menu.Item id="role">角色</Menu.Item>
                  <Menu.Item id="authority">权限</Menu.Item>
                </Menu.List>
              </Menu>
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuB = () => {
  let comp = <Menu hasBox={true} hasBorder={true} style={{width: '15rem'}}>
    <Menu.Header>用户管理</Menu.Header>
    <Menu.List>
      <Menu.Item id="user" hasBox={true} hasBackground={true}>用户</Menu.Item>
      <Menu.Item id="role" hasBox={true} hasBackground={true}>角色</Menu.Item>
      <Menu.Item id="authority" hasBox={true}
                 hasBackground={true}>权限</Menu.Item>
    </Menu.List>
  </Menu>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu hasBox={true} hasBorder={true} style={{width: "15rem"}}>
                <Menu.Header>用户管理</Menu.Header>
                <Menu.List>
                  <Menu.Item id="user" hasBox={true} hasBackground={true}>用户</Menu.Item>
                  <Menu.Item id="role" hasBox={true} hasBackground={true}>角色</Menu.Item>
                  <Menu.Item id="authority" hasBox={true} hasBackground={true}>权限</Menu.Item>
                </Menu.List>
              </Menu>；
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuC = () => {
  let comp = <Menu hasBox={true} hasBorder={true} style={{width: '15rem'}}>
    <Menu.Header>用户管理</Menu.Header>
    <Menu.List>
      <Divider/>
      <Menu.Item id="user">用户</Menu.Item>
      <Divider/>
      <Menu.Item id="role">角色</Menu.Item>
      <Divider/>
      <Menu.Item id="authority">权限</Menu.Item>
    </Menu.List>
  </Menu>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu hasBox={true} hasBorder={true} style={{width: "15rem"}}>
                <Menu.Header>用户管理</Menu.Header>
                <Menu.List>
                  <Divider/>
                  <Menu.Item id="user">用户</Menu.Item>
                  <Divider/>
                  <Menu.Item id="role">角色</Menu.Item>
                  <Divider/>
                  <Menu.Item id="authority">权限</Menu.Item>
                </Menu.List>
              </Menu>；
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuD = () => {
  let comp = <Menu hasBox={true} type="primary" style={{width: '15rem'}}>
    <Menu.Header>用户管理</Menu.Header>
    <Menu.List>
      <Menu.Item id="user">用户</Menu.Item>
      <Menu.Item id="role">角色</Menu.Item>
      <Menu.Item id="authority">权限</Menu.Item>
      <Menu.SubMenu>
        <Menu.Header paddingLeft="2rem">Submenu2</Menu.Header>
        <Menu.List>
          <Menu.Item id="item1" paddingLeft="3rem">item1</Menu.Item>
          <Menu.Item id="item2" paddingLeft="3rem">item2</Menu.Item>
          <Menu.Item id="item3" paddingLeft="3rem">item3</Menu.Item>
          <Menu.SubMenu>
            <Menu.Header paddingLeft="3rem">Submenu3</Menu.Header>
            <Menu.List>
              <Menu.Item id="item1_1" paddingLeft="4rem">item4</Menu.Item>
              <Menu.Item id="item2_1" paddingLeft="4rem">item5</Menu.Item>
              <Menu.Item id="item3_1" paddingLeft="4rem">item6</Menu.Item>
            </Menu.List>
          </Menu.SubMenu>
        </Menu.List>

      </Menu.SubMenu>
    </Menu.List>

  </Menu>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu hasBox={true} type="primary" style={{width: "15rem"}}>
                <Menu.Header>用户管理</Menu.Header>
                <Menu.List>
                  <Menu.Item id="user">用户</Menu.Item>
                  <Menu.Item id="role">角色</Menu.Item>
                  <Menu.Item id="authority">权限</Menu.Item>
                  <Menu.SubMenu>
                    <Menu.Header paddingLeft="2rem">Submenu2</Menu.Header>
                    <Menu.List>
                      <Menu.Item id="item1" paddingLeft="3rem">item1</Menu.Item>
                      <Menu.Item id="item2" paddingLeft="3rem">item2</Menu.Item>
                      <Menu.Item id="item3" paddingLeft="3rem">item3</Menu.Item>
                      <Menu.SubMenu>
                        <Menu.Header paddingLeft="3rem">Submenu3</Menu.Header>
                        <Menu.List>
                          <Menu.Item id="item1_1" paddingLeft="4rem">item4</Menu.Item>
                          <Menu.Item id="item2_1" paddingLeft="4rem">item5</Menu.Item>
                          <Menu.Item id="item3_1" paddingLeft="4rem">item6</Menu.Item>
                        </Menu.List>
                      </Menu.SubMenu>
                    </Menu.List>
                  </Menu.SubMenu>
                </Menu.List>
              </Menu>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuE = () => {
  let comp = <Menu hasBox={true} type="dark" style={{width: '15rem'}}>
    <Menu.Header>用户管理</Menu.Header>
    <Menu.List>
      <Menu.Item id="user">用户</Menu.Item>
      <Menu.Item id="role">角色</Menu.Item>
      <Menu.Item id="authority">权限</Menu.Item>
      <Menu.SubMenu>
        <Menu.Header paddingLeft="2rem">Submenu2</Menu.Header>
        <Menu.List>
          <Menu.Item id="item1" paddingLeft="3rem">item1</Menu.Item>
          <Menu.Item id="item2" paddingLeft="3rem">item2</Menu.Item>
          <Menu.Item id="item3" paddingLeft="3rem">item3</Menu.Item>
          <Menu.SubMenu>
            <Menu.Header paddingLeft="3rem">Submenu3</Menu.Header>
            <Menu.List>
              <Menu.Item id="item1_1" paddingLeft="4rem">item4</Menu.Item>
              <Menu.Item id="item2_1" paddingLeft="4rem">item5</Menu.Item>
              <Menu.Item id="item3_1" paddingLeft="4rem">item6</Menu.Item>
            </Menu.List>
          </Menu.SubMenu>
        </Menu.List>

      </Menu.SubMenu>
    </Menu.List>

  </Menu>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu hasBox={true} type="dark" style={{width: "15rem"}}>
                <Menu.Header>用户管理</Menu.Header>
                <Menu.List>
                  <Menu.Item id="user">用户</Menu.Item>
                  <Menu.Item id="role">角色</Menu.Item>
                  <Menu.Item id="authority">权限</Menu.Item>
                  <Menu.SubMenu>
                    <Menu.Header paddingLeft="2rem">Submenu2</Menu.Header>
                    <Menu.List>
                      <Menu.Item id="item1" paddingLeft="3rem">item1</Menu.Item>
                      <Menu.Item id="item2" paddingLeft="3rem">item2</Menu.Item>
                      <Menu.Item id="item3" paddingLeft="3rem">item3</Menu.Item>
                      <Menu.SubMenu>
                        <Menu.Header paddingLeft="3rem">Submenu3</Menu.Header>
                        <Menu.List>
                          <Menu.Item id="item1_1" paddingLeft="4rem">item4</Menu.Item>
                          <Menu.Item id="item2_1" paddingLeft="4rem">item5</Menu.Item>
                          <Menu.Item id="item3_1" paddingLeft="4rem">item6</Menu.Item>
                        </Menu.List>
                      </Menu.SubMenu>
                    </Menu.List>
                  </Menu.SubMenu>
                </Menu.List>
              </Menu>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuFloat = () => {
  let comp = <Menu type="float" hasBorder={false}>
    <Menu.SubMenu>
      <Menu.Header paddingLeft="2rem">Submenu2</Menu.Header>
      <Menu.List>
        <Menu.Item id="item1" paddingLeft="3rem">item1</Menu.Item>
        <Menu.Item id="item2" paddingLeft="3rem">item2</Menu.Item>
        <Menu.Item id="item3" paddingLeft="3rem">item3</Menu.Item>
        <Menu.SubMenu>
          <Menu.Header paddingLeft="3rem">Submenu3</Menu.Header>
          <Menu.List>
            <Menu.Item id="item1_1" paddingLeft="4rem">item4</Menu.Item>
            <Menu.Item id="item2_1" paddingLeft="4rem">item5</Menu.Item>
            <Menu.Item id="item3_1" paddingLeft="4rem">item6</Menu.Item>
          </Menu.List>
        </Menu.SubMenu>
      </Menu.List>
    </Menu.SubMenu>
    <Menu.SubMenu>
      <Menu.Header paddingLeft="2rem">Submenu3</Menu.Header>
      <Menu.List>
        <Menu.Item id="item7" paddingLeft="3rem">item7</Menu.Item>
        <Menu.Item id="item8" paddingLeft="3rem">item8</Menu.Item>
        <Menu.Item id="item9" paddingLeft="3rem">item9</Menu.Item>
        <Menu.SubMenu>
          <Menu.Header paddingLeft="3rem">Submenu3</Menu.Header>
          <Menu.List>
            <Menu.Item id="item7_1" paddingLeft="4rem">item10</Menu.Item>
            <Menu.Item id="item8_1" paddingLeft="4rem">item11</Menu.Item>
            <Menu.Item id="item9_1" paddingLeft="4rem">item12</Menu.Item>
          </Menu.List>
        </Menu.SubMenu>
      </Menu.List>
    </Menu.SubMenu>
  </Menu>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu hasBox={true} type="dark" style={{width: "15rem"}}>
                <Menu.Header>用户管理</Menu.Header>
                <Menu.List>
                  <Menu.Item id="user">用户</Menu.Item>
                  <Menu.Item id="role">角色</Menu.Item>
                  <Menu.Item id="authority">权限</Menu.Item>
                  <Menu.SubMenu>
                    <Menu.Header paddingLeft="2rem">Submenu2</Menu.Header>
                    <Menu.List>
                      <Menu.Item id="item1" paddingLeft="3rem">item1</Menu.Item>
                      <Menu.Item id="item2" paddingLeft="3rem">item2</Menu.Item>
                      <Menu.Item id="item3" paddingLeft="3rem">item3</Menu.Item>
                      <Menu.SubMenu>
                        <Menu.Header paddingLeft="3rem">Submenu3</Menu.Header>
                        <Menu.List>
                          <Menu.Item id="item1_1" paddingLeft="4rem">item4</Menu.Item>
                          <Menu.Item id="item2_1" paddingLeft="4rem">item5</Menu.Item>
                          <Menu.Item id="item3_1" paddingLeft="4rem">item6</Menu.Item>
                        </Menu.List>
                      </Menu.SubMenu>
                    </Menu.List>
                  </Menu.SubMenu>
                </Menu.List>
              </Menu>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};