import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  ButtonGroup,
  Divider,
  Dropdown,
  IconArrowDown,
  Menu
} from '../../../react-wui';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faWeibo} from "@fortawesome/free-brands-svg-icons";

export const DpA = () => {
  let comp = <> <Dropdown triggerBy="hover">
    <div key="hover">Hover</div>
    <Menu>
      <Menu.List>
        <Menu.Item id={1} value={1} text="Action 1"/>
        <Menu.Item id={2} value={2} text="Action 2"/>
        <Menu.Item id={3} value={3} text="Action 3"/>
        <Menu.Item id={4} value={4} text="Action 4"/>
      </Menu.List>
    </Menu>
  </Dropdown>

    <Dropdown triggerBy="hover" style={{marginLeft: "2rem"}}>
      <Dropdown.Title>Divider</Dropdown.Title>
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
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const DpB = () => {
  let comp = <>
    <Dropdown>
      <Dropdown.Title>Click Title</Dropdown.Title>
      <Menu>
        <Menu.List>
          <Menu.Item id={1} value={1} text="Action 1"/>
          <Menu.Item id={2} value={2} text="Action 2"/>
          <Menu.Item id={3} value={3} text="Action 3"/>
          <Menu.Item id={4} value={4} text="Action 4"/>
        </Menu.List>
      </Menu>
    </Dropdown>
    <Dropdown type="button" style={{marginLeft: "2rem"}}>
      <Dropdown.Title>
        <Button color="green">Button <IconArrowDown/></Button>
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
    <Dropdown type="simple" style={{marginLeft: "2rem"}} triggerBy="click">
      <Dropdown.Title>
        Down
        <IconArrowDown/>
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
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const DpC = () => {
  let comp = <>
    <Dropdown type="button" position="topLeft">
      <Dropdown.Title>
        <Button color="green">topLeft</Button>
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

    <Dropdown type="button" position="topRight" style={{marginLeft: "2rem"}}>
      <Dropdown.Title>
        <Button color="blue">topRight</Button>
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

    <Dropdown type="button" position="bottomLeft" style={{marginLeft: "2rem"}}>
      <Dropdown.Title>
        <Button color="red" outline={true}>bottomLeft</Button>
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

    <Dropdown type="button" position="bottomRight" style={{marginLeft: "2rem"}}>
      <Dropdown.Title>
        <Button color="pink" outline={true}>bottomRight</Button>
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
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const DpD = () => {
  let comp = <>
    <ButtonGroup>
      <Button color="green">Button</Button>
      <Dropdown type="button" position="bottomRight">
        <Dropdown.Title>
          <Button color="green">
            <FontAwesomeIcon icon={faArrowDown}/>
          </Button>
        </Dropdown.Title>
        <Menu>
          <Menu.List>
            <Menu.Item value={1} text="Action 1"/>
            <Menu.Item value={2} text="Action 2"/>
            <Menu.Item value={3} text="Action 3"/>
            <Menu.Item value={4} text="Action 4"/>
          </Menu.List>
        </Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{marginLeft: "2rem"}}>
      <Button color="green" outline={true}>Button</Button>
      <Dropdown type="button" position="bottomRight">
        <Dropdown.Title>
          <Button color="green">
            <FontAwesomeIcon icon={faArrowDown}/>
          </Button>
        </Dropdown.Title>
        <Menu>
          <Menu.List>
            <Menu.Item value={1} text="Action 1"/>
            <Menu.Item value={2} text="Action 2"/>
            <Menu.Item value={3} text="Action 3"/>
            <Menu.Item value={4} text="Action 4"/>
          </Menu.List>
        </Menu>
      </Dropdown>
    </ButtonGroup>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const DpE = () => {
  let comp = <>

    <Dropdown type="button" position="bottomLeft" style={{marginLeft: "2rem"}}>
      <Dropdown.Title>
        <Button extraClassName="clear-border" circle={true}
                color="green"
                outline={true}>
          <FontAwesomeIcon icon={faWeibo}/>
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

    <Dropdown type="button" position="bottomLeft" style={{marginLeft: "2rem"}}>
      <Dropdown.Title>
        <Button extraClassName="clear-border" circle={true}
                color="green"
                outline={true}>
          <FontAwesomeIcon icon={faWeibo} size="2x"/>
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
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};
