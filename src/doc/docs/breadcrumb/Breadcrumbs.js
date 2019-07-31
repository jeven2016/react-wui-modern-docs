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
  Notification
} from "../../../react-wui";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const BreadA = () => {
  let comp = <>
    <Breadcrumb>
      <Breadcrumb.Item>
        <FontAwesomeIcon icon={faHome}/>
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
        <FontAwesomeIcon icon={faHome}/>
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
        <FontAwesomeIcon icon={faHome}/>
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
        <FontAwesomeIcon icon={faHome}/>
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
        <FontAwesomeIcon icon={faHome}/>
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
        <FontAwesomeIcon icon={faHome}/>
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
        <FontAwesomeIcon icon={faHome}/>
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
        <FontAwesomeIcon icon={faHome}/>
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
          <FontAwesomeIcon icon={faHome}/>
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
        <Dropdown type="simple"
                  onItemClick={({text}) => Notification.mini(
                      "you clicked :" + text)}>
          <Dropdown.Title>
            My<IconArrowDown/>
          </Dropdown.Title>
          <Menu>
            <Menu.List>
              <Divider/>
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