import React from 'react';
import {Button, Col, Dropdown, Menu, Popover, Row} from '../../../react-wui-modern';
import SamplePannel from '../../common/SamplePannel';
import {Tooltip} from '../../../react-wui-modern';
import {DocCol, DocRow} from '../../common/DocComponents';

export const TooltipA = () => {
  let comp = <>
    <Row style={{maxWidth: '20rem'}}>
      <Col smOffset={2} sm={8}
           style={{justifyContent: 'center', display: 'flex'}}>
        <DocCol>
          <Tooltip position="topLeft"
                   body={<div>
                     <span style={{
                       fontSize: '1rem',
                       fontWeight: 'bold', color: '#f2791a',
                     }}> This is a tooltip</span></div>}>
            <Button outline={true} color="blue">TL</Button>
          </Tooltip>
        </DocCol>
        <DocCol>
          <Tooltip position="top" body="This is a tooltip">
            <Button outline={true} color="blue">T</Button>
          </Tooltip>
        </DocCol>
        <DocCol>
          <Tooltip position="topRight" body="This is a tooltip">
            <Button outline={true} color="blue">TR</Button>
          </Tooltip>
        </DocCol>
      </Col>
    </Row>
    <Row style={{maxWidth: '20rem'}}>
      <Col sm={2}>
        <DocRow>
          <Tooltip position="leftTop" body="This is a tooltip">
            <Button outline={true} color="blue">LT</Button>
          </Tooltip>
        </DocRow>
        <DocRow>
          <Tooltip position="left" body="This is a tooltip">
            <Button outline={true} color="blue">L</Button>
          </Tooltip>

        </DocRow>
        <DocRow>
          <Tooltip position="leftBottom" body="This is a tooltip" defaultActive>
            <Button outline={true} color="blue">LB</Button>
          </Tooltip>
        </DocRow>
      </Col>
      <Col smOffset={8} sm={2}>
        <DocRow>
          <Tooltip position="rightTop" body="This is a tooltip">
            <Button outline={true} color="blue">RT</Button>
          </Tooltip>
        </DocRow>
        <DocRow>
          <Tooltip position="right" body="This is a tooltip">
            <Button outline={true} color="blue">R</Button>
          </Tooltip>
        </DocRow>
        <DocRow>
          <Tooltip position="rightBottom" body="This is a tooltip">
            <Button outline={true} color="blue">RB</Button>
          </Tooltip>
        </DocRow>
      </Col>
    </Row>
    <Row style={{maxWidth: '20rem'}}>
      <Col smOffset={2} sm={8}
           style={{justifyContent: 'center', display: 'flex'}}>
        <DocCol>
          <Tooltip position="bottomLeft" body="This is a tooltip">
            <Button outline={true} color="blue">BL</Button>
          </Tooltip>
        </DocCol>
        <DocCol>
          <Tooltip position="bottom" body="This is a tooltip">
            <Button outline={true} color="blue">B</Button>
          </Tooltip>
        </DocCol>
        <DocCol>
          <Tooltip position="bottomRight" body="This is a tooltip">
            <Button outline={true} color="blue">BR</Button>
          </Tooltip>
        </DocCol>
      </Col>
    </Row>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Tooltip} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};
