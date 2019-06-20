import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Select} from "../../../react-wui";

export const A = () => {
  let comp = <>
    <Select defaultValue="nanjing">
      <Select.Option value="beijing">Beijing</Select.Option>
      <Select.Option value="nanjing">Nanjing</Select.Option>
      <Select.Option value="nanjing">Shanghai</Select.Option>
    </Select>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class SelectSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};
