import React from "react";
import SamplePannel from "../../common/SamplePannel";
import {Alert, Button} from "../../../react-wui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase, faInfo} from "@fortawesome/free-solid-svg-icons";
import {faDAndD, faGoodreads} from "@fortawesome/free-brands-svg-icons";

export const AlertA = () => {
  let comp = <>
    <Alert type="info" body="A info alert" closable={true}/>
    <Alert type="ok" body="A ok alert" closable={true}/>
    <Alert type="warning" body="A warning alert" closable={true}/>
    <Alert type="error" body="A error alert" closable={true}/>
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

export const AlertB = () => {
  let comp = <>
    <Alert type="info" iconType={<FontAwesomeIcon icon={faInfo}/>}
           body="A info alert" closable={true}/>
    <Alert type="ok" iconType={<FontAwesomeIcon icon={faGoodreads}/>}
           body="A ok alert" closable={true}/>
    <Alert type="warning" iconType={<FontAwesomeIcon icon={faDAndD}/>}
           body="A warning alert" closable={true}/>
    <Alert type="error" iconType={<FontAwesomeIcon icon={faDatabase}/>}
           body="A error alert" closable={true}/>
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

export const AlertC = () => {
  let comp = <>
    <Alert type="info" body="A info alert" closable={true}/>
    <Alert type="ok" body="A ok alert" closable={true}/>
    <Alert type="warning" body="A warning alert" closable={true}/>
    <Alert type="error" body="A error alert" closable={true}/>
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
