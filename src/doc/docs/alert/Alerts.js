import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Alert, Button, Notification} from '../../../react-wui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDatabase, faInfo} from '@fortawesome/free-solid-svg-icons';
import {faDAndD, faGoodreads} from '@fortawesome/free-brands-svg-icons';

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
    <Alert title="INFO" type="info" iconType={<FontAwesomeIcon icon={faInfo}/>}
           body="A info alert" closable={true}/>
    <Alert title="OK" type="ok" iconType={<FontAwesomeIcon icon={faGoodreads}/>}
           body="A ok alert" closable={true}/>
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
    <Alert type="info" body="A info alert" closable={true}/>
    <Alert type="ok" body="A ok alert" closable={true}/>
    <Alert type="warning" body="A warning alert" closable={true}/>
    <Alert type="error" body="A error alert" closable={true}/>

    <Button onClick={() => Notification.info({body: 'hello'})}>Info</Button>
    <Button onClick={() => Notification.ok('are you kidding me?')}>Ok</Button>
    <Button
        onClick={() => Notification.warning('warning message')}>Warning</Button>
    <Button onClick={() => Notification.error('error message')}>Error</Button>

    <Button onClick={() => Notification.info({
      title: 'INFO',
      body: 'hello',
      closable: true,
      iconType: <FontAwesomeIcon icon={faInfo}/>,
    })}>Info</Button>
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
;