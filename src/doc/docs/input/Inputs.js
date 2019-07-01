import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Input} from "../../../react-wui";
import {IconSearch} from "../../../react-wui/Icons";

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
