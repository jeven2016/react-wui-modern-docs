import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Checkbox, Notification} from 'react-wui-modern';

function change(value) {
  Notification.mini(`The value is :${value}`)
}

export const CheckboxA = () => {
  let comp = <>
    <div>
      <Checkbox checked onChange={change}>One</Checkbox>
      <Checkbox onChange={change}>Two</Checkbox>
      <Checkbox onChange={change}>Three</Checkbox>
      <Checkbox onChange={change}>Three</Checkbox>
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
