import React from 'react';
import {Col, Row, Tooltip} from '../../../react-wui';
import SamplePannel from '../../common/SamplePannel';

export const GridA = () => {
  let comp = <>
    <div className="doc grid">
      <Row>
        <Col xs={12}>col-12</Col>
      </Row>
      <Row>
        <Col xs={6}>col-6</Col>
        <Col xs={6}>col-6</Col>
      </Row>
      <Row>
        <Col xs={4}>col-4</Col>
        <Col xs={4}>col-4</Col>
        <Col xs={4}>col-4</Col>
      </Row>
      <Row>
        <Col xs={3}>col-3</Col>
        <Col xs={3}>col-3</Col>
        <Col xs={3}>col-3</Col>
        <Col xs={3}>col-3</Col>
      </Row>
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

export const GridB = () => {
  let comp = <>
    <div className="doc grid">

      <Row>
        <Col xs={4}>col-4</Col>
        <Col xs={4} xsOffset={4}>col-4</Col>
      </Row>
      <Row>
        <Col xs={3} xsOffset={3}>col-3</Col>
        <Col xs={3} xsOffset={3}>col-3</Col>
      </Row>
      <Row>
        <Col xs={4} xsOffset={4}>col-4</Col>
      </Row>
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

export const GridC = () => {
  let comp = <>
    <div className="doc grid">
      <h5 className="text comment">justify="start"</h5>
      <Row justify="start">
        <Col xs={5}>col-5</Col>
        <Col xs={5}>col-5</Col>
      </Row>
      <h5 className="text comment">justify="center"</h5>
      <Row justify="center">
        <Col xs={5}>col-5</Col>
        <Col xs={5}>col-5</Col>
      </Row>
      <h5 className="text comment">justify="end"</h5>
      <Row justify="end">
        <Col xs={5}>col-5</Col>
        <Col xs={5}>col-5</Col>
      </Row>
      <h5 className="text comment">justify="around"</h5>
      <Row justify="around">
        <Col xs={5}>col-5</Col>
        <Col xs={5}>col-5</Col>
      </Row>
      <h5 className="text comment">justify="between"</h5>
      <Row justify="between">
        <Col xs={5}>col-5</Col>
        <Col xs={5}>col-5</Col>
      </Row>
      <h5 className="text comment">justify="evenly"</h5>
      <Row justify="evenly">
        <Col xs={5}>col-5</Col>
        <Col xs={5}>col-5</Col>
      </Row>
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

export const GridD = () => {
  let comp = <>
    <div className="doc grid">
      <Tooltip position="top" body="justify='around' align='start'">
        <Row justify="around" align="start" style={{height: '100px'}}>
          <Col xs={3} style={{height: '80px'}}></Col>
          <Col xs={3} style={{height: '40px'}}></Col>
          <Col xs={3} style={{height: '60px'}}></Col>
        </Row>
      </Tooltip>

      <Tooltip position="top" body="justify='around' align='center'">
        <Row justify="around" align="center" style={{height: '100px'}}>
          <Col xs={3} style={{height: '80px'}}></Col>
          <Col xs={3} style={{height: '40px'}}></Col>
          <Col xs={3} style={{height: '60px'}}></Col>
        </Row>
      </Tooltip>
      <Tooltip position="top" body="justify='around' align='end'">
        <Row justify="around" align="end" style={{height: '100px'}}>
          <Col xs={3} style={{height: '80px'}}></Col>
          <Col xs={3} style={{height: '40px'}}></Col>
          <Col xs={3} style={{height: '60px'}}></Col>
        </Row>
      </Tooltip>
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

export const GridE = () => {
  let comp = <>
    <div className="doc grid">
      <Row justify="around">
        <Tooltip body="order=3">
          <Col xs={3} order={3}>First</Col>
        </Tooltip>
        <Tooltip body="order=1">
          <Col xs={3} order={1}>Second</Col>
        </Tooltip>
        <Tooltip body="order=2">
          <Col xs={3} order={2}>Last</Col>
        </Tooltip>
      </Row>

    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Row,Col} from "react-wui";
  
  export default class GridSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const GridF = () => {
  let comp = <>
    <div className="doc grid">
      <Row>
        <Col xs={12} sm={4}>sm-4</Col>
        <Col xs={12} sm={4}>sm-4</Col>
        <Col xs={12} sm={4}>sm-4</Col>
      </Row>

      <Row>
        <Col sm={4}>sm-4</Col>
        <Col sm={4} smOffset={4}>sm-4</Col>
      </Row>

      <Row>
        <Col sm={4} smOffset={4}>sm-4</Col>
      </Row>

      <Tooltip body="xs={12} sm={4} smOffset={4} md={2} mdOffset={2} lg={3} lgOffset={1}">
        <Row>
          <Col xs={12} sm={4} smOffset={4} md={2} mdOffset={2} lg={6} lgOffset={3}>Col</Col>
        </Row>
      </Tooltip>

    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Row,Col} from "react-wui";
  
  export default class GridSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};