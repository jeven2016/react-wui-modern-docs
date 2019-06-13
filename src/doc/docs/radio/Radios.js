import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Notification, Radio} from "../../../react-wui";

function change(value) {
  Notification.mini(`The value is :${value}`)
}

export const RadioA = () => {
  let comp = <>
    <div>
      <Radio checked onChange={change} label="One" value="valueOne"/>
      <Radio onChange={change}>Two</Radio>
      <Radio onChange={change}>Three</Radio>
      <Radio onChange={change}>Three</Radio>
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
