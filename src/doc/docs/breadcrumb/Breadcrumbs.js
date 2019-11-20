import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Badge,
  Breadcrumb,
  Button,
  Divider,
  Dropdown,
  IconArrowDown,
  IconClear,
  Menu,
  Notification,
} from 'react-wui-modern';
import {IconHome} from 'react-wui-modern';

export const BreadA = () => {
  let comp = <>
    <Breadcrumb>
      <Breadcrumb.Item>
       <IconHome style={{fontSize:"1.25em"}}/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb hasBackground>
      <Breadcrumb.Item>
        <IconHome/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const BreadB = () => {
  let comp = <>
    <Breadcrumb hasBackground separator="">
      <Breadcrumb.Item>
        <IconHome/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb separator=">">
      <Breadcrumb.Item>
        <IconHome/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb hasBackground separator={<IconClear/>}>
      <Breadcrumb.Item>
        <IconHome/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const BreadC = () => {
  let comp = <>
    <Breadcrumb style={{fontSize: "1rem"}}>
      <Breadcrumb.Item>
        <IconHome/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb hasBackground style={{fontSize: "1.5rem"}}>
      <Breadcrumb.Item>
        <IconHome/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb style={{fontSize: "2rem"}}>
      <Breadcrumb.Item>
        <IconHome/>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const BreadD = () => {
  let comp = <>
    <Breadcrumb style={{fontSize: "1rem"}}>
      <Breadcrumb.Item>
        <Button size="small" outline color="green">
          <IconHome/>
        </Button>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Button size="small" outline color="green">Main</Button>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Badge type="tag" color="dark">
          Application
        </Badge>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Dropdown position="bottom"
            onSelect={({text}) => Notification.mini(
                      "you clicked :" + text)}>
          <Dropdown.Title>
            My&nbsp;<IconArrowDown/>
          </Dropdown.Title>
          <Menu hasBorder>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Divider/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Divider/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Divider/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
      </Breadcrumb.Item>
    </Breadcrumb>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};