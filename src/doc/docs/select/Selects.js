import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Select} from '../../../react-wui-modern';
import {DocRow} from '../../common/DocComponents';

export const A = () => {
  let comp = <>
    <DocRow>
      <Select style={{width: '10rem'}} placeholder="Select..."
              // defaultValue="nanjing"
              searchable={false}
              onChange={(item) => console.log(item)}>
        <Select.Option value="beijing">
          Beijing
        </Select.Option>
        <Select.Option value="nanjing">Nanjing</Select.Option>
        <Select.Option value="shanghai">Shanghai</Select.Option>
      </Select>
    </DocRow>

    <DocRow>
      <Select style={{width: '10rem'}} placeholder="search..."
              onChange={(item) => console.log(item)}>
        <Select.Option value="aaa">aaa</Select.Option>
        <Select.Option value="aa">aa</Select.Option>
        <Select.Option value="bbb">bbb</Select.Option>
        <Select.Option value="b">b</Select.Option>
        <Select.Option value="ccc">ccc</Select.Option>
        <Select.Option value="ddd">ddd</Select.Option>
        <Select.Option value="dd">dd</Select.Option>
        <Select.Option value="eee">eee</Select.Option>
        <Select.Option value="ee">ee</Select.Option>
        <Select.Option value="fff">fff</Select.Option>
        <Select.Option value="ff">ff</Select.Option>
        <Select.Option value="ggg">ggg</Select.Option>
        <Select.Option value="gg">gg</Select.Option>
        <Select.Option value="hhh">hhh</Select.Option>
        <Select.Option value="hh">hh</Select.Option>
      </Select>
    </DocRow>

    <DocRow>
      <Select style={{width: '10rem'}} placeholder="Select..." multiple
              onChange={(items) => console.log(items)}>
        <Select.Option value="beijing">Beijing</Select.Option>
        <Select.Option value="nanjing">Nanjing</Select.Option>
        <Select.Option value="wuxi">Wuxi</Select.Option>
        <Select.Option value="suZhou">SuZhou</Select.Option>
        <Select.Option value="hangZhou">HangZhou</Select.Option>
        <Select.Option value="shenZhen">ShenZhen</Select.Option>
        <Select.Option value="guangZhou">GuangZhou</Select.Option>
      </Select>
    </DocRow>

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
