import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Alert, Button, Notification} from '../../../react-wui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDatabase, faInfo, faPlane} from '@fortawesome/free-solid-svg-icons';
import {faDAndD} from '@fortawesome/free-brands-svg-icons';

export const AlertA = () => {
  let comp = <>
    <Alert type="mini" body="A mini alert"/>
    <Alert type="simple" title="Simple Title" body="A simple alert"
           closable={true}/>
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
    <Alert title="WARNING" type="warning"
           iconType={<FontAwesomeIcon icon={faDAndD}/>}
           body="A warning alert" closable={true}/>
    <Alert title="ERROR" type="error"
           iconType={<FontAwesomeIcon icon={faDatabase}/>}
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
    <Button onClick={() => Notification.info({body: 'hello'})}>Info</Button>
    <Button onClick={() => Notification.ok('are you kidding me?')}>Ok</Button>
    <Button
        onClick={() => Notification.warning('warning message')}>Warning</Button>
    <Button onClick={() => Notification.error('error message')}>Error</Button>

    <Button onClick={() => Notification.info({
      title: 'INFO',
      body: 'hello',
      closable: true
    })}>Info</Button>

    <Button onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a simple message.',
      closable: true,
      iconType: <FontAwesomeIcon icon={faPlane}/>,
    })}>Simple</Button>

    <Button onClick={() => Notification.mini(
        "Please double check your system.")}>Mini</Button>
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


export const AlertD = () => {
  let comp = <>
    <Button onClick={() => Notification.info({body: 'hello', duration: 3000})}>
      Duration 3seconds
    </Button>
    <Button onClick={() => Notification.ok('are you kidding me?')}>
      Top Right
    </Button>
    <Button
        onClick={() => Notification.warning('warning message')}>Warning</Button>
    <Button onClick={() => Notification.error('error message')}>Error</Button>

    <Button onClick={() => Notification.info({
      title: 'INFO',
      body: 'hello',
      closable: true
    })}>Info</Button>

    <Button onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a simple message.',
      closable: true,
      iconType: <FontAwesomeIcon icon={faPlane}/>,
    })}>Simple</Button>

    <Button onClick={() => Notification.mini(
        "Please double check your system.")}>Mini</Button>
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