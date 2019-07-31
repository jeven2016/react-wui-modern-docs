import React from 'react';
import {Button, Popover} from '../../../react-wui';
import SamplePannel from '../../common/SamplePannel';

export const PopoverA = () => {
  let comp = <>
    <div>
      <Popover position="topLeft"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Top Left</Button>
      </Popover>

      <Popover position="top"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Top</Button>
      </Popover>

      <Popover position="topRight"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Top Right</Button>
      </Popover>
    </div>

    <div style={{marginTop: '2rem'}}>
      <Popover position="bottomLeft" header="Header"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Bottom Left</Button>
      </Popover>

      <Popover position="bottom" header="Header"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Bottom</Button>
      </Popover>

      <Popover position="bottomRight" header="Header"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Bottom Right</Button>
      </Popover>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const PopoverB = () => {
  let comp = <>
    <Popover triggerBy="hover" position="left" header="Header"
             body={<span>This is a sample</span>}>
      <Button outline={true} color="blue">Left</Button>
    </Popover>

    <Popover triggerBy="hover" position="right" header="Header"
             body={<span>This is a sample</span>}>
      <Button outline={true} color="blue">right</Button>
    </Popover>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const PopoverC = () => {
  let comp = <>
    <Popover triggerBy="hover" position="topLeft" header="Header"
             body={<span>This is a sample</span>}>
      <Button outline={true} color="blue">Hover</Button>
    </Popover>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};
