import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, ButtonGroup, IconClear, Tooltip} from "../../../react-wui";

export const A = () => {
  let comp = <>
    <div>
      <Button>default</Button>
    </div>
    <div style={{marginTop: "1rem"}}>
      <Tooltip position="top" body="This is a tooltip">
        <Button type="primary">primary</Button>
      </Tooltip>
      <Button type="secondary">secondary</Button>
    </div>
    <div style={{marginTop: "1rem"}}>
      <Button type="info" hasMinWidth>info</Button>
      <Button type="success" hasMinWidth>success</Button>
      <Button type="danger" hasMinWidth>danger</Button>
      <Button type="error" hasMinWidth>error</Button>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
        <div>
          <Button>default</Button>
        </div>
        <div style={{marginTop: "1rem"}}>
          <Button type="primary">primary</Button>
          <Button type="secondary">secondary</Button>
        </div>
        <div style={{marginTop: "1rem"}}>
          <Button type="info" hasMinWidth>info</Button>
          <Button type="success" hasMinWidth>success</Button>
          <Button type="danger" hasMinWidth>danger</Button>
          <Button type="error" hasMinWidth>error</Button>
        </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const B = () => {
  let comp = <>
    <Button block>Block</Button>
    <Button type="primary" block>Block</Button>
    <Button type="danger" block>Block</Button>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
        <Button block>Block</Button>
        <Button type="primary" block>Block</Button>
        <Button type="danger" block>Block</Button>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const C = () => {
  let comp = <>
    <Button circle>B</Button>
    <Button type="info" circle>OK</Button>
    <Button type="success" circle>NO</Button>
    <Button circle>a
      {/*<FontAwesomeIcon icon={faMusic}/>*/}
      <IconClear/>
    </Button>
    <IconClear/>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const D = () => {
  let comp = <>
    <div>
      <Button color="black">black</Button>
      <Button color="brown">brown</Button>
      <Button color="pink">pink</Button>
      <Button color="purple">purple</Button>
      <Button color="violet">violet</Button>
    </div>
    <div style={{marginTop: "1rem"}}>
      <Button color="blue">blue</Button>
      <Button color="teal">teal</Button>
      <Button color="green">green</Button>
      <Button color="yellow">yellow</Button>
      <Button color="orange">orange</Button>
      <Button color="red">red</Button>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
       <div>
        <Button color="black">black</Button>
        <Button color="brown">brown</Button>
        <Button color="pink">pink</Button>
        <Button color="purple">purple</Button>
        <Button color="violet">violet</Button>
      </div>
      <div style={{marginTop: "1rem"}}>
        <Button color="blue">blue</Button>
        <Button color="teal">teal</Button>
        <Button color="green">green</Button>
        <Button color="yellow">yellow</Button>
        <Button color="orange">orange</Button>
        <Button color="red">red</Button>
      </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const D2 = () => {
  let comp = <>
    <div>
      <Button outline color="black">black</Button>
      <Button outline color="brown">brown</Button>
      <Button outline color="pink">pink</Button>
      <Button outline color="purple">purple</Button>
      <Button outline color="violet">violet</Button>
    </div>
    <div style={{marginTop: "1rem"}}>
      <Button outline color="blue">blue</Button>
      <Button outline color="teal">teal</Button>
      <Button outline color="green">green</Button>
      <Button outline color="yellow">yellow</Button>
      <Button outline color="orange">orange</Button>
      <Button outline color="red">red</Button>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
       <div>
          <Button outline color="black">black</Button>
          <Button outline color="brown">brown</Button>
          <Button outline color="pink">pink</Button>
          <Button outline color="purple">purple</Button>
          <Button outline color="violet">violet</Button>
        </div>
        <div style={{marginTop: "1rem"}}>
          <Button outline color="blue">blue</Button>
          <Button outline color="teal">teal</Button>
          <Button outline color="green">green</Button>
          <Button outline color="yellow">yellow</Button>
          <Button outline color="orange">orange</Button>
          <Button outline color="red">red</Button>
        </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const E = () => {
  let comp = <>
    <ButtonGroup>
      <Button>first</Button>
      <Button>second</Button>
      <Button>thrid</Button>
    </ButtonGroup>

    <div style={{marginTop: "1rem"}}>
      <ButtonGroup block>
        <Button color="primary">first</Button>
        <Button color="info">second</Button>
        <Button color="success">thrid</Button>
      </ButtonGroup>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
      <ButtonGroup>
        <Button>first</Button>
        <Button>second</Button>
        <Button>thrid</Button>
      </ButtonGroup>
    
      <div style={{marginTop: "1rem"}}>
        <ButtonGroup block>
          <Button color="primary">first</Button>
          <Button color="info">second</Button>
          <Button color="success">thrid</Button>
        </ButtonGroup>
      </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const F = () => {
  let comp = <>
    <div>
      <ButtonGroup>
        <Button outline color="black">black</Button>
        <Button outline color="brown">brown</Button>
        <Button outline color="pink">pink</Button>
        <Button outline color="purple">purple</Button>
        <Button outline color="violet">violet</Button>
      </ButtonGroup>
    </div>
    <div style={{marginTop: "1rem"}}>
      <ButtonGroup block>
        <Button outline color="blue">blue</Button>
        <Button outline color="teal">teal</Button>
        <Button outline color="green">green</Button>
        <Button outline color="yellow">yellow</Button>
        <Button outline color="orange">orange</Button>
        <Button outline color="red">red</Button>
      </ButtonGroup>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
       <div>
        <ButtonGroup>
          <Button outline color="black">black</Button>
          <Button outline color="brown">brown</Button>
          <Button outline color="pink">pink</Button>
          <Button outline color="purple">purple</Button>
          <Button outline color="violet">violet</Button>
        </ButtonGroup>
      </div>
      <div style={{marginTop: "1rem"}}>
        <ButtonGroup block>
          <Button outline color="blue">blue</Button>
          <Button outline color="teal">teal</Button>
          <Button outline color="green">green</Button>
          <Button outline color="yellow">yellow</Button>
          <Button outline color="orange">orange</Button>
          <Button outline color="red">red</Button>
        </ButtonGroup>
      </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};