import React from 'react';
import {Button, Popover} from '../../../react-wui';
import SamplePannel from '../../common/SamplePannel';
import {Tooltip} from '../../../react-wui';

export const TooltipA = () => {
  let comp = <>
    <div>
      <Tooltip position="top" body="This is a tooltip">
        <span tabIndex={0}>Top</span>
      </Tooltip>
      &nbsp;&nbsp;
      <Tooltip position="bottom" body="This is a tooltip">
        <Button outline={true} color="blue">Bottom</Button>
      </Tooltip>
    </div>

    <div style={{marginTop: '2rem'}}>
      <Tooltip position="left" body="This is a tooltip">
        <Button outline={true} color="blue">Left</Button>
      </Tooltip>
      <Tooltip position="right" body="This is a tooltip">
        <Button outline={true} color="blue">Right</Button>
      </Tooltip>
    </div>

    <div style={{marginTop: '2rem'}}>
      <Tooltip position="topLeft" body="This is a tooltip">
        <Button outline={true} color="blue">Top Left</Button>
      </Tooltip>

      <Tooltip position="topRight" body="This is a tooltip">
        <Button outline={true} color="blue">Top Right</Button>
      </Tooltip>
      <Tooltip position="bottomLeft" body="This is a tooltip">
        <Button outline={true} color="blue">Bottom Left</Button>
      </Tooltip>
      <Tooltip position="bottomRight" body="This is a tooltip">
        <Button outline={true} color="blue">Bottom Right</Button>
      </Tooltip>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Tooltip} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};
