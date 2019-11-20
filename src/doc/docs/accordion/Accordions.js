import React from 'react';
import SamplePannel from "../../common/SamplePannel";
import {Accordion, Card} from "react-wui-modern";

export const AccordionA = () => {
  let comp = <>
    <Accordion>
      <Card>
        <Card.Header hasBackground>
          Header
        </Card.Header>
        <Card.Body>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header hasBackground>
          Header
        </Card.Header>
        <Card.Body>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header hasBackground>
          Header
        </Card.Header>
        <Card.Body>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
          <h4>this is the body</h4>
        </Card.Body>
      </Card>
    </Accordion>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class MenuSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};