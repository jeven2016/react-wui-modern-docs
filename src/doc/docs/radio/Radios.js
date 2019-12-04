import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Notification, Radio, RadioGroup} from '../../../react-wui-modern';

function change(value) {
  Notification.mini(`The value is :${value}`)
}

export const RadioA = () => {
  let comp = <>
    <div>
      <Radio value="1" checked onChange={change} label="One" value="valueOne"/>
      <Radio value="2" onChange={change}>Two</Radio>
      <Radio value="3" onChange={change}>Three</Radio>
      <Radio value="4" onChange={change}>Three</Radio>
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

export const RadioB = () => {
  let comp = <>
    <div>
      <div>
        <RadioGroup defaultValue="1"
                    onChange={change}>
          <Radio label="One" value="1"/>
          <Radio value="2">Two</Radio>
          <Radio value="3">Three</Radio>
          <Radio value="4">Four</Radio>
        </RadioGroup>
      </div>

      <RadioGroup onChange={change}>
        <Radio label="One" value="1"/>
        <Radio value="2">Two</Radio>
        <Radio value="3">Three</Radio>
        <Radio value="4">Four</Radio>
      </RadioGroup>
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
