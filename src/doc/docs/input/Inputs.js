import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  Radio,
  Input,
  InputGroup,
  Dropdown,
  Menu, ButtonGroup
} from "../../../react-wui";
import {IconSearch} from "../../../react-wui/Icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

export const A = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input placeholder="This is a small input" size="small"/>
    </div>
    <div className="doc doc-row">
      <Input placeholder="This is a input"/>
    </div>
    <div className="doc doc-row">
      <Input placeholder="This is a largeinput" size="large"/>
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

export const B = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input.IconInput size="small">
        <Input placeholder="This is a small input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="medium">
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="large">
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
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

export const C = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input.IconInput size="small" leftIcon>
        <Input placeholder="This is a small input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="medium" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="large" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
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

export const D = () => {
  let comp = <>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>$</InputGroup.Label>
        <Input withinGroup placeholder="money......"/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <Input withinGroup placeholder="money......"/>
        <InputGroup.Label>$</InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>$</InputGroup.Label>
        <Input withinGroup placeholder="money......"/>
        <Button>Buy</Button>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          <Radio value="ok"/>
        </InputGroup.Label>
        <Input withinGroup placeholder="money......"/>
        <Button>Buy</Button>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <Dropdown type="button">
          <Dropdown.Title>
            <Button color="blue" outline={true}>bottomRight</Button>
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
        <Input withinGroup placeholder="money......"/>
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
      </InputGroup>
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
