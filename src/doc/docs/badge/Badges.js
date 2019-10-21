import React, {useState} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Badge,
  Button,
  Dropdown,
  IconArrowDown,
  Menu,
  Toggle
} from "../../../react-wui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMailBulk, faUser} from "@fortawesome/free-solid-svg-icons";

export const BadgeA = () => {
  let comp = <>
    <div>
      <Badge type="normal" color="info" body="8" style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="normal" color="ok" body="9" style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="normal" color="warning" body="10"
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="normal" color="error" body="999+"
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="normal" color="error" body="10">
        This is a message
      </Badge>
    </div>
    <br/>
    <Badge type="normal" color="error" body="999">
      <Button color="green">
        <FontAwesomeIcon icon={faUser}/>
      </Button>
    </Badge>
    <Badge type="normal" color="error" body="99">
      <Dropdown type="button" style={{marginLeft: "2rem"}}>
        <Dropdown.Title>
          <Button color="green">Button</Button>
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
    </Badge>
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

export const BadgeB = () => {
  let comp = <>
    <div>
      <Badge type="dot" color="info" style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="ok" style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="warning"
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="error"
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="error">
        This is a message
      </Badge>
    </div>
    <br/>
    <Badge type="dot" color="error">
      <Button color="green">
        <FontAwesomeIcon icon={faUser}/>
      </Button>
    </Badge>
    <Badge type="dot" color="error">
      <Dropdown type="button">
        <Dropdown.Title>
          <Button color="green">Button</Button>
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
    </Badge>
    <br/>

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

export const BadgeC = () => {
  const [active, setActive] = useState(true);
  let comp = <>
    <div>
      <Toggle active={true} onChange={(value) => {
        console.log("value=" + value)
        setActive(value)
      }}/>
    </div>
    <br/>
    <br/>
    <div>
      <Badge type="dot" color="info" active={active}
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="ok" active={active}
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="warning" active={active}
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="error" active={active}
             style={{marginRight: "1rem"}}>
        <FontAwesomeIcon size="2x" icon={faMailBulk}/>
      </Badge>
      <Badge type="dot" color="error" active={active}>
        This is a message
      </Badge>
    </div>
    <br/>
    <Badge type="dot" color="error" active={active}>
      <Button color="green">
        <FontAwesomeIcon icon={faUser}/>
      </Button>
    </Badge>
    <Badge type="dot" color="error" active={active}>
      <Dropdown type="button">
        <Dropdown.Title>
          <Button color="green">Button</Button>
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
    </Badge>
    <br/>

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

export const BadgeD = () => {
  const [active, setActive] = useState(true);
  let comp = <>
    <div>
      <Toggle active={true} onChange={(value) => {
        console.log("value=" + value)
        setActive(value)
      }}/>
    </div>
    <br/>
    <br/>
    <div>
      <Badge type="tag" color="info" active={active}
             style={{marginRight: "1rem"}}>
        Info
      </Badge>
      <Badge type="tag" color="ok" active={active}
             style={{marginRight: "1rem"}}>
        OK
      </Badge>
      <Badge type="tag" color="warning" active={active}
             style={{marginRight: "1rem"}}>
        Warning
      </Badge>
      <Badge type="tag" color="error" active={active}
             style={{marginRight: "1rem"}}>
        Danger
      </Badge>
      <Badge type="tag" color="dark" active={active}>
        Dark
      </Badge>

    </div>

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