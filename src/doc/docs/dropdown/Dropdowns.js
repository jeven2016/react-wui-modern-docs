import React ,{useRef}from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  ButtonGroup, Col,
  Divider,
  Dropdown,
  IconArrowDown,
  Menu, Row, Tooltip,
} from 'react-wui-modern';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faWeibo} from '@fortawesome/free-brands-svg-icons';
import {DocCol, DocRow} from '../../common/DocComponents';

export const DpA = () => {
  let comp = <>
    <DocCol>
      <Dropdown>
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
      <Dropdown selectable disabled>
        <Dropdown.Title>disabled</Dropdown.Title>
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
  const btnRef = useRef(null);
  let comp = <>
    <Button onClick={()=> btnRef.current.focus()}>TestRef</Button>
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
      <Button color="green" ref={btnRef}>Button <IconArrowDown/></Button>
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
  let comp = <div style={{width: '60%'}}>
    <Row>
      <Col smOffset={2} sm={8}
           style={{justifyContent: 'center', display: 'flex'}}>
        <DocCol>
          <Dropdown position="topLeft" triggerBy="hover">
            <Button color="green">TL</Button>
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
          <Tooltip body="position='top'" position="top">
            <Dropdown position="top" triggerBy="hover">
              <Button color="green">T</Button>
              <Menu hasBorder>
                <Menu.List>
                  <Menu.Item id={1} value={1} text="Action 1"/>
                  <Menu.Item id={2} value={2} text="Action 2"/>
                  <Menu.Item id={3} value={3} text="Action 3"/>
                  <Menu.Item id={4} value={4} text="Action 4"/>
                </Menu.List>
              </Menu>
            </Dropdown>
          </Tooltip>
        </DocCol>
        <DocCol>
          <Dropdown position="topRight" triggerBy="hover">
            <Button color="blue">TR</Button>
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
      </Col>
    </Row>
    <Row>
      <Col sm={2}>
        <DocRow>
          <Dropdown position="leftTop" triggerBy="hover">
            <Button color="red" outline={true}>LT</Button>
            <Menu hasBorder>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </DocRow>
        <DocRow>
          <Dropdown position="left" triggerBy="hover">
            <Button color="red" outline={true}>L</Button>
            <Menu hasBorder>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </DocRow>
        <DocRow>
          <Dropdown position="leftBottom" triggerBy="hover">
            <Button color="red" outline={true}>LB</Button>
            <Menu hasBorder>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </DocRow>
      </Col>
      <Col smOffset={8} sm={2}>
        <DocRow>
          <Dropdown position="rightTop" triggerBy="hover">
            <Button color="red" outline={true}>RT</Button>
            <Menu hasBorder>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </DocRow>
        <DocRow>
          <Dropdown position="right" triggerBy="hover">
            <Button color="red" outline={true}>R</Button>
            <Menu hasBorder>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </DocRow>
        <DocRow>
          <Dropdown position="rightBottom" triggerBy="hover">
            <Button color="red" outline={true}>RB</Button>
            <Menu hasBorder>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </DocRow>
      </Col>
    </Row>
    <Row>
      <Col smOffset={2} sm={8}
           style={{justifyContent: 'center', display: 'flex'}}>
        <DocCol>
          <Dropdown position="bottomLeft" triggerBy="hover">
            <Button color="red" outline={true}>BL</Button>
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
          <Dropdown position="bottom" triggerBy="hover">
            <Button color="red" outline={true}>B</Button>
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
          <Dropdown position="bottomRight" triggerBy="hover">
            <Button color="pink" outline={true}>BR</Button>
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
      </Col>
    </Row>
  </div>;

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
