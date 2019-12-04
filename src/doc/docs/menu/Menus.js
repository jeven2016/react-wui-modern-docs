import React from 'react';
import {Button, Divider, Dropdown, Icon, Input, Menu} from '../../../react-wui-modern';
import SamplePannel from '../../common/SamplePannel';
import {faList, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-regular-svg-icons';
import {DocRow} from '../../common/DocComponents';

export const MenuA = () => {
  let comp = <>
    <Menu style={{width: '15rem'}} multiSelect={true}
          id="simpleMenu"
          onSelect={(val) => console.log(val)}>
      <Menu.Header>多选</Menu.Header>
      <Menu.List>
        <Menu.Item id="user">用户</Menu.Item>
        <Menu.Item id="role">角色</Menu.Item>
        <Menu.Item id="authority">权限</Menu.Item>
      </Menu.List>
    </Menu>
    <Menu style={{width: '15rem'}} onClickHeader={() => false}>
      <Menu.Header>不可折叠</Menu.Header>
      <Menu.List>
        <Menu.Item id="user">用户</Menu.Item>
        <Menu.Item id="role">角色</Menu.Item>
        <Menu.Item id="authority">权限</Menu.Item>
      </Menu.List>
    </Menu>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <>
        <Menu style={{width: '15rem'}}>
          <Menu.Header>用户管理</Menu.Header>
          <Menu.List>
            <Menu.Item id="user">用户</Menu.Item>
            <Menu.Item id="role">角色</Menu.Item>
            <Menu.Item id="authority">权限</Menu.Item>
          </Menu.List>
        </Menu>
        <Menu style={{width: '15rem'}} onClickHeader={() => false}>
          <Menu.Header>不可折叠</Menu.Header>
          <Menu.List>
            <Menu.Item id="user">用户</Menu.Item>
            <Menu.Item id="role">角色</Menu.Item>
            <Menu.Item id="authority">权限</Menu.Item>
          </Menu.List>
        </Menu>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuB = () => {
  const {SubMenu} = Menu;
  let comp = <Menu hasBox={true} hasBorder={true} style={{width: '15rem'}}>
    <Menu.Header>用户管理</Menu.Header>
    <Menu.List>
      <Menu.Item id="user" hasBackground={true}>用户</Menu.Item>
      <Menu.Item id="role" hasBackground={true}>角色</Menu.Item>
      <Menu.Item id="authority"
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
      <Menu.Item value="user">用户</Menu.Item>
      <Divider/>
      <Menu.Item value="role">角色</Menu.Item>
      <Divider/>
      <Menu.Item value="authority">权限</Menu.Item>
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
  const {SubMenu} = Menu;
  let comp = <Menu hasBox={true} type="primary"
                   multiSelect
                   style={{width: '15rem'}}>
    <Menu.Header>用户管理</Menu.Header>
    <Menu.List>
      <Menu.Item id="user">用户</Menu.Item>
      <Menu.Item id="role">角色</Menu.Item>
      <Menu.Item id="authority">权限</Menu.Item>
      <Menu.SubMenu id="disabledId" disabled>
        <Menu.Header>Submenu2</Menu.Header>
        <Menu.List>
          <Menu.Item id="item1">item1</Menu.Item>
          <Menu.Item id="item2">item2</Menu.Item>
          <Menu.Item id="item3">item3</Menu.Item>
          <Menu.SubMenu>
            <Menu.Header>Submenu3</Menu.Header>
            <Menu.List>
              <Menu.Item id="item1_1" disabled={false}>Not disabled</Menu.Item>
              <Menu.Item id="item2_1" disabled={false}>Not disabled</Menu.Item>
              <Menu.Item id="item3_1_d">Disabled</Menu.Item>
              <Menu.SubMenu>
                <Menu.Header>Submenu</Menu.Header>
                <Menu.List>
                  <Menu.Item id="item4_1" disabled={false}>Not
                    disabled</Menu.Item>
                  <Menu.Item id="item4_2" disabled={false}>Not
                    disabled</Menu.Item>
                  <Menu.Item id="item4_1_d">Disabled</Menu.Item>
                </Menu.List>
              </Menu.SubMenu>
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
      return  <Menu hasBox={true} type="primary"
                   multiSelect
                   style={{width: '15rem'}}>
                <Menu.Header>用户管理</Menu.Header>
                <Menu.List>
                  <Menu.Item id="user">用户</Menu.Item>
                  <Menu.Item id="role">角色</Menu.Item>
                  <Menu.Item id="authority">权限</Menu.Item>
                  <Menu.SubMenu id="disabledId" disabled>
                    <Menu.Header>Submenu2</Menu.Header>
                    <Menu.List>
                      <Menu.Item id="item1">item1</Menu.Item>
                      <Menu.Item id="item2">item2</Menu.Item>
                      <Menu.Item id="item3">item3</Menu.Item>
                      <Menu.SubMenu>
                        <Menu.Header>Submenu3</Menu.Header>
                        <Menu.List>
                          <Menu.Item id="item1_1" disabled={false}>Not disabled</Menu.Item>
                          <Menu.Item id="item2_1" disabled={false}>Not disabled</Menu.Item>
                          <Menu.Item id="item3_1_d">Disabled</Menu.Item>
                          <Menu.SubMenu>
                            <Menu.Header>Submenu</Menu.Header>
                            <Menu.List>
                              <Menu.Item id="item4_1" disabled={false}>Not disabled</Menu.Item>
                              <Menu.Item id="item4_2" disabled={false}>Not disabled</Menu.Item>
                              <Menu.Item id="item4_1_d">Disabled</Menu.Item>
                            </Menu.List>
                          </Menu.SubMenu>
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
  const {SubMenu} = Menu;
  let comp = <Menu hasBox={true} type="dark"
                   defaultOpenedMenus={['sub1', 'sub2']}
                   style={{width: '15rem'}}>
    <SubMenu id="sub1">
      <Menu.Header>
        <Icon>
          <FontAwesomeIcon icon={faList}/>
        </Icon>
        <span>Submenu1</span>
      </Menu.Header>
      <Menu.List>
        <Menu.Item id="user" hasBottomBar>用户</Menu.Item>
        <Menu.Item id="role" hasBottomBar>角色</Menu.Item>
        <Menu.Item id="authority" hasBottomBar>权限</Menu.Item>
        <Menu.SubMenu>
          <Menu.Header>
            <Icon>
              <FontAwesomeIcon icon={faList}/>
            </Icon>
            <span>Submenu</span>
          </Menu.Header>
          <Menu.List>
            <Menu.Item id="item1">item1</Menu.Item>
            <Menu.Item id="item2">item2</Menu.Item>
            <Menu.Item id="item3">item3</Menu.Item>
            <Menu.SubMenu id="ttt">
              <Menu.Header><Icon>
                <FontAwesomeIcon icon={faList}/>
              </Icon>
                <span>Submenu</span>
              </Menu.Header>
              <Menu.List>
                <Menu.Item id="item1_1">item4</Menu.Item>
                <Menu.Item id="item2_1">item5</Menu.Item>
                <Menu.Item id="item3_1">item6</Menu.Item>
              </Menu.List>
            </Menu.SubMenu>
          </Menu.List>

        </Menu.SubMenu>
      </Menu.List>
    </SubMenu>
    <Menu.SubMenu id="sub2">
      <Menu.Header><Icon>
        <FontAwesomeIcon icon={faList}/>
      </Icon>
        <span>Submenu2</span>
      </Menu.Header>
      <Menu.List>
        <Menu.Item id="item1_2">item4</Menu.Item>
        <Menu.Item id="item2_2">item5</Menu.Item>
        <Menu.Item id="item3_2">item6</Menu.Item>
      </Menu.List>
    </Menu.SubMenu>
    <Menu.SubMenu id="sub3">
      <Menu.Header><Icon>
        <FontAwesomeIcon icon={faList}/>
      </Icon>
        <span>Submenu3</span>
      </Menu.Header>
      <Menu.List>
        <Menu.Item id="item1_3">item4</Menu.Item>
        <Menu.Item id="item2_3">item5</Menu.Item>
        <Menu.Item id="item3_3">item6</Menu.Item>
      </Menu.List>
    </Menu.SubMenu>
  </Menu>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu hasBox={true} type="dark"
                   defaultOpenedMenus={['sub1', 'sub2']}
                   style={{width: '15rem'}}>
                <SubMenu id="sub1">
                  <Menu.Header>
                    <Icon>
                      <FontAwesomeIcon icon={faList}/>
                    </Icon>
                    <span>Submenu1</span>
                  </Menu.Header>
                  <Menu.List>
                    <Menu.Item id="user">用户</Menu.Item>
                    <Menu.Item id="role">角色</Menu.Item>
                    <Menu.Item id="authority">权限</Menu.Item>
                    <Menu.SubMenu>
                      <Menu.Header>
                        <Icon>
                          <FontAwesomeIcon icon={faList}/>
                        </Icon>
                        <span>Submenu</span>
                      </Menu.Header>
                      <Menu.List>
                        <Menu.Item id="item1">item1</Menu.Item>
                        <Menu.Item id="item2">item2</Menu.Item>
                        <Menu.Item id="item3">item3</Menu.Item>
                        <Menu.SubMenu id="ttt">
                          <Menu.Header><Icon>
                            <FontAwesomeIcon icon={faList}/>
                          </Icon>
                            <span>Submenu</span>
                          </Menu.Header>
                          <Menu.List>
                            <Menu.Item id="item1_1">item4</Menu.Item>
                            <Menu.Item id="item2_1">item5</Menu.Item>
                            <Menu.Item id="item3_1">item6</Menu.Item>
                          </Menu.List>
                        </Menu.SubMenu>
                      </Menu.List>
            
                    </Menu.SubMenu>
                  </Menu.List>
                </SubMenu>
                <Menu.SubMenu id="sub2">
                  <Menu.Header><Icon>
                    <FontAwesomeIcon icon={faList}/>
                  </Icon>
                    <span>Submenu2</span>
                  </Menu.Header>
                  <Menu.List>
                    <Menu.Item id="item1_2">item4</Menu.Item>
                    <Menu.Item id="item2_2">item5</Menu.Item>
                    <Menu.Item id="item3_2">item6</Menu.Item>
                  </Menu.List>
                </Menu.SubMenu>
                <Menu.SubMenu id="sub3">
                  <Menu.Header><Icon>
                    <FontAwesomeIcon icon={faList}/>
                  </Icon>
                    <span>Submenu3</span>
                  </Menu.Header>
                  <Menu.List>
                    <Menu.Item id="item1_3">item4</Menu.Item>
                    <Menu.Item id="item2_3">item5</Menu.Item>
                    <Menu.Item id="item3_3">item6</Menu.Item>
                  </Menu.List>
                </Menu.SubMenu>
              </Menu>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuFloat = () => {
  const {SubMenu} = Menu;
  let comp = <><Menu type="primary" hasBorder={true}
                     id="hello"
                     multiLevelMenus
                     menuDirection="horizontal"
                     onClickItem={(info, evt) => {
                       if (info.id === 'item1') {
                         return false;
                       }
                     }}>
    <Menu.SubMenu disabled>
      <Menu.Header>
        <Icon>
          <FontAwesomeIcon icon={faList}/>
        </Icon>
        <span>Hello</span>
      </Menu.Header>
      <Menu.List>
        <Menu.Item id="item1">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>不会关闭菜单</span>
        </Menu.Item>
        <Menu.Item id="item2">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>关闭菜单1</span>
        </Menu.Item>
        <Menu.Item id="item3">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>关闭菜单2</span>
        </Menu.Item>
      </Menu.List>
    </Menu.SubMenu>
    <Menu.SubMenu id="ddd">
      <Menu.Header>
        <Icon>
          <FontAwesomeIcon icon={faList}/>
        </Icon>
        <span>Submenu2</span>
      </Menu.Header>
      <Menu.List>
        <Menu.Item id="item1">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>不会关闭菜单</span>
        </Menu.Item>
        <Menu.Item id="item2">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>关闭菜单1</span>
        </Menu.Item>
        <Menu.Item id="item3">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>关闭菜单2</span>
        </Menu.Item>
      </Menu.List>
    </Menu.SubMenu>
    <Menu.SubMenu>
      <Menu.Header>
        <Icon>
          <FontAwesomeIcon icon={faList}/>
        </Icon>
        <span>Submenu3</span>
      </Menu.Header>
      <Menu.List>
        <Menu.Item id="item7">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>item7</span>
        </Menu.Item>
        <Menu.Item id="item8">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>item8</span>
        </Menu.Item>
        <Menu.Item id="item9">
          <Icon>
            <FontAwesomeIcon icon={faWindowClose}/>
          </Icon>
          <span>item9</span>
        </Menu.Item>
        <Menu.SubMenu>
          <Menu.Header>Submenu3</Menu.Header>
          <Menu.List>
            <Menu.Item id="item7_1">
              <Icon>
                <FontAwesomeIcon icon={faWindowClose}/>
              </Icon>
              <span>item10</span>
            </Menu.Item>
            <Menu.Item id="item8_1">
              <Icon>
                <FontAwesomeIcon icon={faWindowClose}/>
              </Icon>
              <span>item11</span>
            </Menu.Item>
            <Menu.Item id="item9_1">
              <Icon>
                <FontAwesomeIcon icon={faWindowClose}/>
              </Icon>
              <span>item12</span>
            </Menu.Item>
          </Menu.List>
        </Menu.SubMenu>
      </Menu.List>
    </Menu.SubMenu>
  </Menu>
    <div><Button>1</Button> <Button color="blue">22</Button></div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  import {faList} from '@fortawesome/free-solid-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
  
  export default class MenuSample extends Component{
  
    render(){
      return  <Menu type="float" hasBorder={true} onClickItem={(info, evt) => {
                if (info.id === "item1") {
                  return false
                }
              }}>
                <Menu.SubMenu>
                  <Menu.Header>
                    <Icon>
                      <FontAwesomeIcon icon={faList}/>
                    </Icon>
                    <span>Submenu2</span>
                  </Menu.Header>
                  <Menu.List>
                    <Menu.Item id="item1">不会关闭菜单</Menu.Item>
                    <Menu.Item id="item2">关闭菜单1</Menu.Item>
                    <Menu.Item id="item3">关闭菜单2</Menu.Item>
                  </Menu.List>
                </Menu.SubMenu>
              </Menu>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuFloatItems = () => {
  const {SubMenu} = Menu;
  let comp = <>
        <Menu type="primary" hasBorder={true}
              id="hello"
              multiLevelMenus
              menuDirection="vertical"
              onClickItem={(info, evt) => {
                if (info.id === 'item1') {
                  return false;
                }
              }}>
          <Menu.SubMenu disabled>
            <Menu.Header>
              <Icon>
                <FontAwesomeIcon icon={faList}/>
              </Icon>
              <span>Hello</span>
            </Menu.Header>
            <Menu.List>
              <Menu.Item id="item1">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>不会关闭菜单</span>
              </Menu.Item>
              <Menu.Item id="item2">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>关闭菜单1</span>
              </Menu.Item>
              <Menu.Item id="item3">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>关闭菜单2</span>
              </Menu.Item>
            </Menu.List>
          </Menu.SubMenu>
          <Menu.SubMenu>
            <Menu.Header>
              <Icon>
                <FontAwesomeIcon icon={faList}/>
              </Icon>
              <span>Submenu2</span>
            </Menu.Header>
            <Menu.List>
              <Menu.Item id="item1">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>不会关闭菜单</span>
              </Menu.Item>
              <Menu.Item id="item2">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>关闭菜单1</span>
              </Menu.Item>
              <Menu.Item id="item3">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>关闭菜单2</span>
              </Menu.Item>
            </Menu.List>
          </Menu.SubMenu>
          <Menu.SubMenu>
            <Menu.Header>
              <Icon>
                <FontAwesomeIcon icon={faList}/>
              </Icon>
              <span>Submenu3</span>
            </Menu.Header>
            <Menu.List>
              <Menu.Item id="item7">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>item7</span>
              </Menu.Item>
              <Menu.Item id="item8">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>item8</span>
              </Menu.Item>
              <Menu.Item id="item9">
                <Icon>
                  <FontAwesomeIcon icon={faWindowClose}/>
                </Icon>
                <span>item9</span>
              </Menu.Item>
              <Menu.SubMenu>
                <Menu.Header>Submenu3</Menu.Header>
                <Menu.List>
                  <Menu.Item id="item7_1">
                    <Icon>
                      <FontAwesomeIcon icon={faWindowClose}/>
                    </Icon>
                    <span>item10</span>
                  </Menu.Item>
                  <Menu.Item id="item8_1">
                    <Icon>
                      <FontAwesomeIcon icon={faWindowClose}/>
                    </Icon>
                    <span>item11</span>
                  </Menu.Item>
                  <Menu.Item id="item9_1">
                    <Icon>
                      <FontAwesomeIcon icon={faWindowClose}/>
                    </Icon>
                    <span>item12</span>
                  </Menu.Item>
                </Menu.List>
              </Menu.SubMenu>
            </Menu.List>
          </Menu.SubMenu>
        </Menu>
        <div>
          <Menu menuDirection="horizontal" setItemPaddingLeft={false}>
            <Menu.List>
              <Menu.Item id="user">用户</Menu.Item>
              <Menu.Item id="role">角色</Menu.Item>
              <Menu.Item id="authority">权限</Menu.Item>
              <Menu.Item id="setting">设置</Menu.Item>
              <Menu.Item id="security">安全</Menu.Item>
              <Menu.Item id="mgnt">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
        <div>
          <Menu hasBox={true} menuDirection="horizontal" setItemPaddingLeft={false}
                style={{marginTop: '2rem'}}>
            <Menu.List>
              <Menu.Item id="user" hasBox={true} hasBackground={true}>用户</Menu.Item>
              <Menu.Item id="role" hasBox={true} hasBackground={true}>角色</Menu.Item>
              <Menu.Item id="authority" hasBox={true}
                         hasBackground={true}>权限</Menu.Item>
              <Menu.Item id="setting" hasBox={true}
                         hasBackground={true}>设置</Menu.Item>
              <Menu.Item id="security" hasBox={true}
                         hasBackground={true}>安全</Menu.Item>
              <Menu.Item id="mgnt" hasBox={true}
                         hasBackground={true}>管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </>
  ;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <>
                <div>
                  <Menu hasBox={true} type="float">
                    <Menu.List>
                      <Menu.Item id="user">用户</Menu.Item>
                      <Menu.Item id="role">角色</Menu.Item>
                      <Menu.Item id="authority">权限</Menu.Item>
                      <Menu.Item id="setting">设置</Menu.Item>
                      <Menu.Item id="security">安全</Menu.Item>
                      <Menu.Item id="mgnt">管理</Menu.Item>
                    </Menu.List>
                  </Menu>
                </div>
                <div>
                  <Menu hasBox={true} type="float" style={{marginTop: "2rem"}}>
                    <Menu.List>
                      <Menu.Item id="user" hasBox={true} hasBackground={true}>用户</Menu.Item>
                      <Menu.Item id="role" hasBox={true} hasBackground={true}>角色</Menu.Item>
                      <Menu.Item id="authority" hasBox={true}
                                 hasBackground={true}>权限</Menu.Item>
                      <Menu.Item id="setting" hasBox={true}
                                 hasBackground={true}>设置</Menu.Item>
                      <Menu.Item id="security" hasBox={true}
                                 hasBackground={true}>安全</Menu.Item>
                      <Menu.Item id="mgnt" hasBox={true}
                                 hasBackground={true}>管理</Menu.Item>
                    </Menu.List>
                  </Menu>
                </div>
              </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuFloatRight = () => {
  let comp = <>
        <div>
          <Menu menuDirection="horizontal"
                hasBorder={true}
                setItemPaddingLeft={false}
                block={true}>
            <Menu.List>
              <Menu.Item id="user" hasBackground>用户</Menu.Item>
              <Menu.Item id="role" hasBackground>角色</Menu.Item>
              <Menu.Item id="authority" hasBackground>权限</Menu.Item>
              <Menu.Item id="setting" hasBackground>设置</Menu.Item>
              <Menu.Item id="security" hasBackground>安全</Menu.Item>
              <Menu.Item id="mgnt" align="right" hasBackground>管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
        <div>
          <Menu block={true}
                menuDirection="horizontal"
                setItemPaddingLeft={false}
                style={{marginTop: '2rem'}}>
            <Menu.List>
              <Menu.Item id="user" hasBox={true} hasBackground={true}>用户</Menu.Item>
              <Menu.Item id="role" hasBox={true} hasBackground={true}>角色</Menu.Item>
              <Menu.Item id="authority" hasBox={true}
                         hasBackground={true}>权限</Menu.Item>
              <Menu.Item id="setting" hasBox={true}
                         hasBackground={true}>设置</Menu.Item>
              <Menu.Item id="security" hasBox={true}
                         hasBackground={true}>安全</Menu.Item>
              <Menu.Item id="mgnt" hasBox={true}
                         hasBackground={true} align="right">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </>
  ;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <>
        <div>
          <Menu type="float" block={true}>
            <Menu.List>
              <Menu.Item id="user">用户</Menu.Item>
              <Menu.Item id="role">角色</Menu.Item>
              <Menu.Item id="authority">权限</Menu.Item>
              <Menu.Item id="setting">设置</Menu.Item>
              <Menu.Item id="security">安全</Menu.Item>
              <Menu.Item id="mgnt">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
        <div>
          <Menu block={true} type="float" style={{marginTop: "2rem"}}>
            <Menu.List>
              <Menu.Item id="user" hasBox={true} hasBackground={true}>用户</Menu.Item>
              <Menu.Item id="role" hasBox={true} hasBackground={true}>角色</Menu.Item>
              <Menu.Item id="authority" hasBox={true}
                         hasBackground={true}>权限</Menu.Item>
              <Menu.Item id="setting" hasBox={true}
                         hasBackground={true}>设置</Menu.Item>
              <Menu.Item id="security" hasBox={true}
                         hasBackground={true}>安全</Menu.Item>
              <Menu.Item id="mgnt" hasBox={true}
                         hasBackground={true} align="right">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuFloatLeft = () => {
  let comp = <>
        <div>
          <Menu block={true}
                menuDirection="horizontal"
                hasBorder={true}
                setItemPaddingLeft={false}
                style={{marginTop: '2rem'}}>
            <Menu.List>
              <Menu.Item id="user" hasBottomBar align="left">用户</Menu.Item>
              <Menu.Item id="role" hasBottomBar>角色</Menu.Item>
              <Menu.Item id="authority" hasBottomBar>权限</Menu.Item>
              <Menu.Item id="setting" hasBottomBar>设置</Menu.Item>
              <Menu.Item id="security" hasBottomBar>安全</Menu.Item>
              <Menu.Item id="mgnt" hasBottomBar>管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </>
  ;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <div>
          <Menu block={true} type="float" style={{marginTop: "2rem"}}>
            <Menu.List>
              <Menu.Item id="user"  align="left">用户</Menu.Item>
              <Menu.Item id="role" >角色</Menu.Item>
              <Menu.Item id="authority" hasBox={true}
                         hasBackground={true}>权限</Menu.Item>
              <Menu.Item id="setting" hasBox={true}
                         hasBackground={true}>设置</Menu.Item>
              <Menu.Item id="security" hasBox={true}
                         hasBackground={true}>安全</Menu.Item>
              <Menu.Item id="mgnt">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuFloatComponents = () => {
  let comp = <>
        <div>
          <Menu block={true}
                menuDirection="horizontal"
                hasBorder={true}
                setItemPaddingLeft={false}
          >
            <Menu.List>
              <Menu.Item id="menu">
                <span>Menu</span>
              </Menu.Item>
              <Menu.Item id="button">
                <Button color="green">Button</Button>
              </Menu.Item>
              <Menu.Item id="input">
                <Input.IconInput>
                  <Input placeholder="Icon input..."/>
                  <Icon>
                    <FontAwesomeIcon icon={faSearch}/>
                  </Icon>
                </Input.IconInput>
              </Menu.Item>
              <Menu.Item id="dpdown">
                <Dropdown triggerBy="hover">
                  <Dropdown.Title>
                    Dropdown
                  </Dropdown.Title>
                  <Menu hasBox hasBorder={true}>
                    <Menu.List>
                      <Menu.Item>Action 1</Menu.Item>
                      <Menu.Item>Action 2</Menu.Item>
                      <Menu.Item>Action 3</Menu.Item>
                      <Menu.Item>Action 4</Menu.Item>
                    </Menu.List>
                  </Menu>
                </Dropdown>
              </Menu.Item>

            </Menu.List>
          </Menu>
        </div>
      </>
  ;

  let code = `
  import React, {Component} from "react";
  import {Button, Dropdown, Icon, Input, Menu}  from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return   <div>
          <Menu block={true} type="float" style={{marginTop: "2rem"}}>
            <Menu.List>
              <Menu.Item id="button">
                <Button color="green">Button</Button>
              </Menu.Item>
              <Menu.Item id="input">
                <Input.IconInput>
                  <Input placeholder="Icon input..."/>
                  <Icon>
                    <FontAwesomeIcon icon={faSearch}/>
                  </Icon>
                </Input.IconInput>
              </Menu.Item>
              <Menu.Item id="">
                <Dropdown type="button">
                  <Button>Dropdown</Button>
                  <Menu position="right">
                    <Menu.List>
                      <Menu.Item>Action 1</Menu.Item>
                      <Menu.Item>Action 2</Menu.Item>
                      <Menu.Item>Action 3</Menu.Item>
                      <Menu.Item>Action 4</Menu.Item>
                    </Menu.List>
                  </Menu>
                </Dropdown>
              </Menu.Item>

            </Menu.List>
          </Menu>
        </div>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuDisabled = () => {
  let comp = <>
        <div>
          <Menu menuDirection="horizontal"
                hasBorder={true}
                setItemPaddingLeft={false}
                block={true} disabled={true}>
            <Menu.List>
              <Menu.Item id="user">用户</Menu.Item>
              <Menu.Item id="role">角色</Menu.Item>
              <Menu.Item id="authority">权限</Menu.Item>
              <Menu.Item id="setting">设置</Menu.Item>
              <Menu.Item id="security">安全</Menu.Item>
              <Menu.Item id="mgnt">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </>
  ;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return <div>
          <Menu type="float" block={true} disabled={true}>
            <Menu.List>
              <Menu.Item id="user">用户</Menu.Item>
              <Menu.Item id="role">角色</Menu.Item>
              <Menu.Item id="authority">权限</Menu.Item>
              <Menu.Item id="setting">设置</Menu.Item>
              <Menu.Item id="security">安全</Menu.Item>
              <Menu.Item id="mgnt">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuItemDisabled = () => {
  let comp = <>
        <div>
          <Menu menuDirection="horizontal" block>
            <Menu.List>
              <Menu.Item id="user" disabled={true}>用户</Menu.Item>
              <Menu.Item id="role" disabled={true}>角色</Menu.Item>
              <Menu.Item id="authority" disabled={true}>权限</Menu.Item>
              <Menu.Item id="setting">设置</Menu.Item>
              <Menu.Item id="security">安全</Menu.Item>
              <Menu.Item id="mgnt">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      </>
  ;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <div>
          <Menu menuDirection="horizontal" block>
            <Menu.List>
              <Menu.Item id="user" disabled={true}>用户</Menu.Item>
              <Menu.Item id="role" disabled={true}>角色</Menu.Item>
              <Menu.Item id="authority" disabled={true}>权限</Menu.Item>
              <Menu.Item id="setting">设置</Menu.Item>
              <Menu.Item id="security">安全</Menu.Item>
              <Menu.Item id="mgnt">管理</Menu.Item>
            </Menu.List>
          </Menu>
        </div>
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const MenuSpaceBetween = () => {
  let comp = <>
        <div>
          <DocRow>
            <Menu menuDirection="horizontal" block hasBorder>
              <Menu.List justify="between">
                <Menu.Item id="security" hasBackground>安全</Menu.Item>
                <Menu.Item id="mgnt" hasBackground>管理</Menu.Item>
              </Menu.List>
            </Menu>
          </DocRow>
          <DocRow>
            <Menu menuDirection="horizontal" block hasBorder>
              <Menu.List justify="center">
                <Menu.Item id="authority" hasBackground>权限</Menu.Item>
                <Menu.Item id="setting" hasBackground>设置</Menu.Item>
                <Menu.Item id="security" hasBackground>安全</Menu.Item>
              </Menu.List>
            </Menu>
          </DocRow>
          <DocRow>
            <Menu menuDirection="horizontal" block hasBorder>
              <Menu.List justify="evenly">
                <Menu.Item id="authority" hasBackground>权限</Menu.Item>
                <Menu.Item id="setting" hasBackground>设置</Menu.Item>
                <Menu.Item id="security" hasBackground>安全</Menu.Item>
              </Menu.List>
            </Menu>
          </DocRow>
        </div>
      </>
  ;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  <div>
          
        </div>
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};