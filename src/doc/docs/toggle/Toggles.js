import React from 'react';
import SamplePannel from "../../common/SamplePannel";
import {Toggle} from "../../../react-wui";

export const ToggleA = () => {
  let comp = <>
    <Toggle/>
    <Toggle/>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const ToggleB = () => {
  let comp = <>
    <Toggle type="primary" content={{on: "开开开开开开", off: "关关关关关关关", showInBar: true}}/>
    <Toggle type="primary" content={{on: "ON", off: "OFF", showInBar: true}}/>
    <Toggle type="primary" content={{on: "开", off: "关", showInBar: false}}/>
    <Toggle type="primary" content={{on: "ON", off: "OFF"}}/>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

