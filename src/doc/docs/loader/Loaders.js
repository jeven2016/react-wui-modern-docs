import React from "react";
import SamplePannel from "../../common/SamplePannel";
import {Button, Card, Loader} from "../../../react-wui";

export const LoaderA = () => {
  let comp = <>
    <div style={{marginTop: "1rem"}}>
      <Loader type="primary" size="small" active style={{marginRight: "1rem"}}/>
      <Loader type="secondary" size="small" active
              style={{marginRight: "1rem"}}/>
      <Loader type="third" size="small" active style={{marginRight: "1rem"}}/>
    </div>

    <div style={{marginTop: "1rem"}}>
      <Loader type="primary" size="normal" active
              style={{marginRight: "1rem"}}/>
      <Loader type="secondary" size="normal" active
              style={{marginRight: "1rem"}}/>
      <Loader type="third" size="normal" active style={{marginRight: "1rem"}}/>
    </div>

    <div style={{marginTop: "1rem"}}>
      <Loader type="primary" size="large" active style={{marginRight: "1rem"}}/>
      <Loader type="secondary" size="large " active
              style={{marginRight: "1rem"}}/>
      <Loader type="third" size="large" active style={{marginRight: "1rem"}}/>
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

export const LoaderB = () => {
  let comp = <>
    <div>
      <Loader type="primary" text="Loading" active
              style={{marginRight: "1rem"}}/>
    </div>
    <div style={{marginTop: "1rem"}}>
      <Loader type="secondary" text="正在加载中" active
              style={{marginRight: "1rem"}}/>
    </div>
    <div style={{marginTop: "1rem"}}>
      <Loader type="third" text="正在加载中" active/>
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

export const LoaderC = () => {
  let comp = <>
    <Button>
      Saving
      <Loader size="small"/>
    </Button>

    <Button color="green" disabled>
      Saving
      <Loader type="secondary" size="small" color="white"/>
    </Button>
    <Button color="green">
      Loading
      <Loader type="third" size="small" color="white"/>
    </Button>

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

export const LoaderD = () => {
  let comp = <>
    <div style={{marginTop: "2rem"}}>
      <Loader type="secondary" color="white" active>
        <Card>
          <Card.Header>
            Header
          </Card.Header>
          <Card.Body>
            <h4>Body</h4>
            <h4>Body</h4>
            <h4>Body</h4>
            <h4>Body</h4>
          </Card.Body>
          <Card.Footer>
            Footer
          </Card.Footer>
        </Card>
      </Loader>
    </div>

    <div style={{marginTop: "2rem"}}>
      <Loader type="secondary" color="white" active block>
        <Card block>
          <Card.Header>
            Header
          </Card.Header>
          <Card.Body>
            <h4>Body</h4>
            <h4>Body</h4>
          </Card.Body>
          <Card.Footer>
            Footer
          </Card.Footer>
        </Card>
      </Loader>
    </div>

    <div style={{marginTop: "2rem"}}>
      <Loader type="third" size="normal" color="white" text="Loading......"
              active
              block>
        <Card block>
          <Card.Header>
            Header
          </Card.Header>
          <Card.Body>
            <h4>Body</h4>
            <h4>Body</h4>
          </Card.Body>
          <Card.Footer>
            Footer
          </Card.Footer>
        </Card>
      </Loader>
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