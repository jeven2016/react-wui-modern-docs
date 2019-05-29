import React from "react";
import {Col, Row} from "../../../react-wui";
import SamplePannel from "../../common/SamplePannel";

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