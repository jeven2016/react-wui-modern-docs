import React from 'react';
import {Button, Dropdown, Icon, Input, Menu, NavBar} from "../../../react-wui";
import SamplePannel from "../../common/SamplePannel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faList,
  faMusic,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";

export const NavbarA = () => {
  let comp = <>
    <NavBar>
      <NavBar.Title>
        Navbar
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item>
          用户
        </NavBar.Item>
        <NavBar.Item>
          角色
        </NavBar.Item>
        <NavBar.Item>
          权限
        </NavBar.Item>
        <NavBar.Item>
          安全
        </NavBar.Item>
      </NavBar.List>
    </NavBar>

    <NavBar style={{marginTop: "2rem"}}>
      <NavBar.Title>
        Navbar
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          权限
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          安全
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const NavbarB = () => {
  let comp = <>
    <NavBar type="primary">
      <NavBar.Title>
        Navbar
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item>
          <NavBar.Link href="javascript:void(0);">
            用户
          </NavBar.Link>
        </NavBar.Item>
        <NavBar.Item active={true}>
          角色
        </NavBar.Item>
        <NavBar.Item>
          权限
        </NavBar.Item>
        <NavBar.Item>
          <Dropdown triggerBy="hover" style={{minWidth: "5rem"}}>
            <Dropdown.Title>下拉菜单</Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const NavbarC = () => {
  let comp = <>
    <NavBar type="primary">
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item>
          <Button>用户</Button>
        </NavBar.Item>
        <NavBar.Item>
          <Input.IconInput>
            <Input placeholder="Search..."/>
            <Icon>
              <FontAwesomeIcon icon={faSearch}/>
            </Icon>
          </Input.IconInput>
        </NavBar.Item>
        <NavBar.Item>
          <Input placeholder="......"/>
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const NavbarD = () => {
  let comp = <>
    <NavBar type="primary">
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true} hasBar={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true} hasBar={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true} hasBar={true} active={true}>
          权限
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const NavbarE = () => {
  let comp = <>
    <NavBar type="primary" appendClass="bg-color-purple">
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true} active={true}>
          权限
        </NavBar.Item>
      </NavBar.List>
    </NavBar>

    <NavBar type="primary" appendClass="bg-color-black"
            style={{marginTop: "1rem"}}>
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          权限
        </NavBar.Item>
      </NavBar.List>
    </NavBar>

    <NavBar type="primary" appendClass="bg-color-green"
            style={{marginTop: "1rem"}}>
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          权限
        </NavBar.Item>
      </NavBar.List>
    </NavBar>

    <NavBar type="primary" appendClass="bg-color-teal"
            style={{marginTop: "1rem"}}>
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          权限
        </NavBar.Item>
      </NavBar.List>
    </NavBar>

    <NavBar type="primary" appendClass="bg-color-brown"
            style={{marginTop: "1rem"}}>
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true} active={true}>
          权限
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const NavbarF = () => {
  let comp = <>
    <NavBar type="primary">
      <NavBar.Title>
        <NavBar.Link href="javascript:void(0);">
          <i><FontAwesomeIcon icon={faMusic}
                              style={{marginRight: "0.5rem"}}/></i>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item>
          角色
        </NavBar.Item>
        <NavBar.Item alignRight={true}>
          <Dropdown type="button"
                    position="bottomRight">
            <Dropdown.Title>
              <Button circle={true}
                      color="green"
                      outline={true}>
                <FontAwesomeIcon icon={faUser}/>
              </Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
          <Dropdown type="button"
                    position="bottomRight">
            <Dropdown.Title>
              <Button circle={true}
                      color="green"
                      outline={true}>
                <FontAwesomeIcon icon={faList}/>
              </Button>
            </Dropdown.Title>
            <Menu>

              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>

        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const NavbarG = () => {
  let comp = <>
    <NavBar>
      <NavBar.Title>
        <NavBar.Switch>
          <FontAwesomeIcon icon={faAlignJustify}/>
        </NavBar.Switch>
        <NavBar.Link href="javascript:void(0);">
          <FontAwesomeIcon icon={faMusic}
                           style={{marginRight: "0.5rem"}}/>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          权限
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          我的信息
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          系统设置
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          全局配置
        </NavBar.Item>
      </NavBar.List>
    </NavBar>

    <NavBar type="primary" style={{marginTop: "2rem"}}>
      <NavBar.Title>
        <NavBar.Switch>
          <FontAwesomeIcon icon={faAlignJustify}/>
        </NavBar.Switch>
        <NavBar.Link href="javascript:void(0);">
          <FontAwesomeIcon icon={faMusic}
                           style={{marginRight: "0.5rem"}}/>
          音乐网站
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item hasBackground={true}>
          用户
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          角色
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          权限
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          我的信息
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          系统设置
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          全局配置
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};
