import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  ButtonGroup,
  Divider,
  Dropdown,
  IconArrowDown,
  Menu,
} from '../../../react-wui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faWeibo} from '@fortawesome/free-brands-svg-icons';
import {DocCol} from "../../common/DocComponents";

export const DpA = () => {
  let comp = <>
    <DocCol>
      <Dropdown selectable>
        <Dropdown.Title>Selectable</Dropdown.Title>
        <Menu hasBorder>
          <Menu.List>
            <Menu.Item id={1} value={1} text="Action 1"/>
            <Menu.Item id={2} value={2} text="Action 2"/>
            <Menu.Item id={3} value={3} text="Action 3"/>
            <Menu.Item id={4} value={4} text="Action 4"/>
          </Menu.List>
        </Menu>
      </Dropdown>
    </DocCol>
    <DocCol>
      <Dropdown triggerBy="click">
        <Dropdown.Title>
          <div key="click">Click Me<IconArrowDown/></div>
        </Dropdown.Title>
        <Menu hasBorder>
          <Menu.List>
            <Menu.Item disabled id={1} value={1} text="Action 1"/>
            <Menu.Item id={2} value={2} text="Action 2"/>
            <Menu.Item id={3} value={3} text="Action 3"/>
            <Menu.Item id={4} value={4} text="Action 4"/>
          </Menu.List>
        </Menu>
      </Dropdown>
    </DocCol>
    <DocCol>
      <Dropdown triggerBy="hover">
        <Dropdown.Title>Hover</Dropdown.Title>
        <Menu hasBox>
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
    </DocCol>
    <DocCol>
      <Dropdown triggerBy="hover" position="left">
        <Dropdown.Title>Left Menu</Dropdown.Title>
        <Menu hasBox>
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
    </DocCol>
    <DocCol>
      <Dropdown triggerBy="hover" position="right">
        <Dropdown.Title>Right Menu</Dropdown.Title>
        <Menu hasBox>
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
    </DocCol>
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
      <Menu hasBorder>
        <Menu.List>
          <Menu.Item id={1} value={1} text="Action 1"/>
          <Menu.Item id={2} value={2} text="Action 2"/>
          <Menu.Item id={3} value={3} text="Action 3"/>
          <Menu.Item id={4} value={4} text="Action 4"/>
        </Menu.List>
      </Menu>
    </Dropdown>
    <Dropdown style={{marginLeft: '2rem'}}>
      <Button color="green">Button <IconArrowDown/></Button>
      <Menu hasBorder>
        <Menu.List>
          <Menu.Item id={1} value={1} text="Action 1"/>
          <Menu.Item id={2} value={2} text="Action 2"/>
          <Menu.Item id={3} value={3} text="Action 3"/>
          <Menu.Item id={4} value={4} text="Action 4"/>
        </Menu.List>
      </Menu>
    </Dropdown>
    <Dropdown type="simple" style={{marginLeft: '2rem'}} triggerBy="click">
      <Dropdown.Title>
        Down
        <IconArrowDown/>
      </Dropdown.Title>
      <Menu hasBorder>
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
    <Dropdown position="topLeft">
      <Button color="green">topLeft</Button>
      <Menu hasBorder>
        <Menu.List>
          <Menu.Item id={1} value={1} text="Action 1"/>
          <Menu.Item id={2} value={2} text="Action 2"/>
          <Menu.Item id={3} value={3} text="Action 3"/>
          <Menu.Item id={4} value={4} text="Action 4"/>
        </Menu.List>
      </Menu>
    </Dropdown>

    <Dropdown position="topRight" style={{marginLeft: '2rem'}}>
      <Button color="blue">topRight</Button>
      <Menu hasBorder>
        <Menu.List>
          <Menu.Item id={1} value={1} text="Action 1"/>
          <Menu.Item id={2} value={2} text="Action 2"/>
          <Menu.Item id={3} value={3} text="Action 3"/>
          <Menu.Item id={4} value={4} text="Action 4"/>
        </Menu.List>
      </Menu>
    </Dropdown>

    <Dropdown position="bottomLeft" style={{marginLeft: '2rem'}}>
      <Button color="red" outline={true}>bottomLeft</Button>
      <Menu hasBorder>
        <Menu.List>
          <Menu.Item id={1} value={1} text="Action 1"/>
          <Menu.Item id={2} value={2} text="Action 2"/>
          <Menu.Item id={3} value={3} text="Action 3"/>
          <Menu.Item id={4} value={4} text="Action 4"/>
        </Menu.List>
      </Menu>
    </Dropdown>

    <Dropdown position="bottomRight" style={{marginLeft: '2rem'}}>
      <Button color="pink" outline={true}>bottomRight</Button>
      <Menu hasBorder>
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
      <Dropdown position="bottomRight">
        <Button color="green">
          <FontAwesomeIcon icon={faArrowDown}/>
        </Button>
        <Menu hasBorder>
          <Menu.List>
            <Menu.Item value={1} text="Action 1"/>
            <Menu.Item value={2} text="Action 2"/>
            <Menu.Item value={3} text="Action 3"/>
            <Menu.Item value={4} text="Action 4"/>
          </Menu.List>
        </Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{marginLeft: '2rem'}}>
      <Button color="green" outline={true}>Button</Button>
      <Dropdown position="bottomRight">
        <Button color="green">
          <FontAwesomeIcon icon={faArrowDown}/>
        </Button>
        <Menu hasBorder>
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

    <Dropdown position="bottomLeft" style={{marginLeft: '2rem'}}>
      <Button extraClassName="clear-border" circle={true}
              color="green"
              outline={true}>
        <FontAwesomeIcon icon={faWeibo}/>
      </Button>
      <Menu hasBorder>
        <Menu.List>
          <Menu.Item id={1} value={1} text="Action 1"/>
          <Menu.Item id={2} value={2} text="Action 2"/>
          <Menu.Item id={3} value={3} text="Action 3"/>
          <Menu.Item id={4} value={4} text="Action 4"/>
        </Menu.List>
      </Menu>
    </Dropdown>

    <Dropdown position="bottomLeft" style={{marginLeft: '2rem'}}>
      <Button extraClassName="clear-border" circle={true}
              color="green"
              outline={true}>
        <FontAwesomeIcon icon={faWeibo} size="2x"/>
      </Button>
      <Menu hasBorder>
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
