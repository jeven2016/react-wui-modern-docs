import React, {useRef, useCallback, useState} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Select, useEvent} from '../../../react-wui-modern';
import {DocRow} from '../../common/DocComponents';
import Button from '../../../react-wui-modern/button';
import {EventListener} from '../../../react-wui-modern/common/Constants';
import Popover from '../../../react-wui-modern/popover';

export const A = () => {
  const btnRef = useRef();
  const [show, setShow] = useState(true);
  let comp = <>
    <DocRow>
      <Button onClick={() => setShow(!show)}>Hide</Button>
      {show &&
      <Select style={{width: '10rem'}} triggerBy="hover"
              defaultValue="nanjing"
              searchable={false}
              onChange={(item) => console.log(item)}>
        <Select.Option value="beijing">
          Beijing
        </Select.Option>
        <Select.Option value="nanjing">Nanjing</Select.Option>
        <Select.Option value="shanghai">Shanghai</Select.Option>
        <Select.Option value="xian">XiAn</Select.Option>
      </Select>
      }

      <Select style={{width: '10rem'}} placeholder="Select..." triggerBy="hover"
              defaultValue="nanjing"
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
              triggerBy="hover"
              onOpen={() => { console.log('onOpen...');}}
              onClose={() => { console.log('onClose...');}}
              onSearch={(value) => { console.log('onSearch...' + value);}}
              onChange={(item) => console.log('onChange=', item)}>
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
        <Select.Option value="China">中国</Select.Option>
        <Select.Option value="USA">美国</Select.Option>

      </Select>
    </DocRow>

    <DocRow>

      <Select style={{width: '10rem'}} placeholder="Select..." multiple
              triggerBy="click"
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
