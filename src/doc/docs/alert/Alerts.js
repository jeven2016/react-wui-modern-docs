import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Alert,
  Button,
  IconError,
  IconWarning,
  Notification,
} from '../../../react-wui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlane} from '@fortawesome/free-solid-svg-icons';

export const AlertA = () => {
  let comp = <>
    <Alert type="mini" body="A mini alert" closable={false}/>
    <Alert type="simple" title="Simple Title" body="A simple alert"
           closable={false}/>
    <Alert type="info" body="A info alert"/>
    <Alert type="ok" body="A ok alert"/>
    <Alert type="warning" body="A warning alert"/>
    <Alert type="error" body="A error alert"/>
    <Alert type="info" body="close in 10 seconds"
           duration={10000} onClose={() => console.log('alert is gone')}/>
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
    <Alert title="WARNING" type="warning" icon={<IconWarning/>}
           body="A warning alert" closable={true}/>
    <Alert title="ERROR" type="error"
           icon={<IconError/>}
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
      closable: true,
    })}>Info</Button>

    <Button onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a simple message.',
      closable: true
    })}>Simple2</Button>

    <Button onClick={() => Notification.mini(
        'Please double check your system.')}>Mini</Button>
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
