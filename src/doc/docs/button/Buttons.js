import React, {useState, useEffect, useRef} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  ButtonGroup,
  IconClear,
  Loader,
  Notification,
  Toggle,
  Tooltip
} from "../../../react-wui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlane} from "@fortawesome/free-solid-svg-icons";

export const A = () => {
  let comp = <>
    <div>
      <Button>default</Button>
      <Button elementType="a" href="#" onClick={() => void (0)}>Link</Button>
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
          <Button elementType="a" href="#" onClick={() => void (0)}>Link</Button>
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
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const B = () => {
  let btnRef = useRef(null);
  useEffect(()=>{
    //focus
    btnRef.current.focus();
  });
  let comp = <>
    <Button block>Block</Button>
    <Button type="primary" block ref={btnRef}>Block</Button>
    <Button type="danger" block>Block</Button>
  </>;

  let code = `
  import React, {Component, useRef, useEffect} from "react";
  import {Button} from "react-wui";
  
  export const sample = () => {
    let btnRef = useRef(null);
    useEffect(()=>{
      //focus
      btnRef.current.focus();
    });
    let comp = <>
      <Button block>Block</Button>
      <Button type="primary" block ref={btnRef}>Block</Button>
      <Button type="danger" block>Block</Button>
    </>;
    return comp;
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const C = () => {
  let comp = <>
    <Button circle>王</Button>
    <Button type="info" circle>OK</Button>
    <Button type="success" circle>NO</Button>
    <Button circle><IconClear/></Button>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
       <Button circle>王</Button>
       <Button type="info" circle>OK</Button>
       <Button type="success" circle>NO</Button>
       <Button circle><IconClear/></Button>
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

export const G = () => {
  let comp = <>
    <div>

      <Button outline color="teal" onClick={() => Notification.mini({
        body: 'you clicked a button'
      })}>
        Click
      </Button>
      <Button outline color="brown" disabled
              onClick={() => Notification.mini({
                body: 'hello'
              })}>
        Disabled
      </Button>
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

export const H = () => {
  let comp = <>
    <div>
      <Button>
        <span>Remove</span>
        <IconClear/>
      </Button>
      <Button type="primary">
        <span>飞机</span>
        <FontAwesomeIcon icon={faPlane}/>
      </Button>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Button, Icon} from "react-wui";
  
  export default class ButtonSample extends Component{
  
    render(){
      return <>
         <div>
            <Button>
              <span>Remove</span>
              <IconClear/>
            </Button>
            <Button type="primary">
              <span>飞机</span>
              <FontAwesomeIcon icon={faPlane}/>
            </Button>
          </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const I = () => {
  const [active, setActive] = useState();
  let comp = <>
    <div>
      <div><Toggle onChange={(value) => setActive(value)}/></div>
      <div style={{marginTop: "1rem"}}>
        <Button color="blue" disabled={active} style={{minWidth: "10rem"}}>
          <span>{active ? "Saving" : "Save"}</span>
          {
            active && <Loader type="third" size="small" color="white"
                              active={active}/>
          }

        </Button>
        <Button type="success" circle disabled={active}>
          {
            active ? <Loader type="third" size="small" color="white"
                             active={active}/>
                : "GO"
          }
        </Button>
      </div>
    </div>

  </>;

  let code = `
  import React, {useState} from "react";
  import {Button} from "react-wui";
  
  const BtnSample = (props)=>{
      const [active, setActive] = useState();
      let comp = <>
        <div>
          <div><Toggle onChange={(value) => setActive(value)}/></div>
          <div style={{marginTop: "1rem"}}>
            <Button color="blue" disabled={active} style={{minWidth: "10rem"}}>
              <span>{active ? "Saving" : "Save"}</span>
              {
                active && <Loader type="third" size="small" color="white"
                                  active={active}/>
              }
    
            </Button>
            <Button type="success" circle disabled={active}>
              {
                active ? <Loader type="third" size="small" color="white"
                                 active={active}/>
                    : "GO"
              }
            </Button>
          </div>
        </div>
      </>;
  }
  
  export default BtnSample;
  `;

  return <SamplePannel component={comp} code={code}/>;
};