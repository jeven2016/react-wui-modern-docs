import React, {useState} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {IconClear, Toggle, Tooltip} from '../../../react-wui-modern';
import {IconChecked2} from '../../../react-wui-modern/Icons';

export const ToggleA = () => {
  const [active, setActive] = useState(true);
  let comp = <>
    <Toggle/>
    <Tooltip body="switch the active state">
      <Toggle active={active} onChange={() => setActive(!active)}/>
    </Tooltip>

    <Toggle defaultActive disabled/>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const ToggleB = () => {
      let comp = <>
        <div>
          <Toggle type="primary" content={{on: '开', off: '关', showInBar: true}}/>
          <Toggle type="primary" style={{width: '6rem'}}
                  content={{on: 'ON', off: 'OFF', showInBar: true}}/>
          <br/>
          <Toggle type="primary" content={{on: '开', off: '关', showInBar: false}}/>
          <Toggle type="primary" content={{on: 'Y', off: 'N'}}/>
        </div>

        {/*<div style={{marginTop: '2rem'}}>
          <Toggle type='primary' content={{
            on: <Icon>
              <FontAwesomeIcon icon={faCheck}/>
            </Icon>,
            off: <Icon>
              <FontAwesomeIcon icon={faQuestion}/>
            </Icon>,
            showInBar: true,
          }}/>
          <Toggle type="primary" content={{
            on: <Icon>
              <FontAwesomeIcon icon={faCar}/>
            </Icon>,
            off: <Icon>
              <FontAwesomeIcon icon={faPlane}/>
            </Icon>,
          }}/>
        </div>*/}
      </>;

      let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
  
 
  `;

      return <SamplePannel component={comp} code={code}/>;
    }
;

export const ToggleC = () => {
      let comp = <>
        <div>
          <Toggle type="secondary" content={{on: '开', off: '关', showInBar: true}}/>
          <Toggle type="secondary"
                  style={{width: '5rem'}}
                  content={{on: 'ON', off: 'OFF', showInBar: true}}/>
          <Toggle type="secondary" content={{on: '开', off: '关', showInBar: false}}/>
          <Toggle type="secondary" content={{on: 'Y', off: 'N'}}/>
        </div>

        <div style={{marginTop: '2rem'}}>
          <Toggle type='secondary' content={{
            on: <IconChecked2/>,
            off: <IconClear/>,
            showInBar: true,
          }}/>
          <Toggle type="secondary" content={{
            on: <IconChecked2/>,
            off: <IconClear/>,
          }}/>
        </div>
      </>;

      let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
  
 
  `;

      return <SamplePannel component={comp} code={code}/>;
    }
;
