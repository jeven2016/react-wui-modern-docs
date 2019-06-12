import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, Checkbox} from '../../../react-wui';

export const CheckboxA = () => {
  let comp = <>
    <div>
      <Checkbox>One</Checkbox>
      <Checkbox>Two</Checkbox>
      <Checkbox>Three</Checkbox>
      <Button>Test</Button>
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
