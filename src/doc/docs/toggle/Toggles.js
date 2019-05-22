import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Dropdown, Icon, Toggle, Tooltip} from '../../../react-wui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArchive,
  faArrowDown, faCar,
  faCheck, faPlane, faQuestion, faVoteYea,
} from '@fortawesome/free-solid-svg-icons';

export const ToggleA = () => {
  let comp = <>
    <Toggle/>
    <Toggle turnOn/>

    <Tooltip body="This toggle is disabled.">
      <Toggle turnOn disabled/>
    </Tooltip>
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
          <Toggle type="primary" content={{on: 'ON', off: 'OFF', showInBar: true}}/>
          <Toggle type="primary" content={{on: '开', off: '关', showInBar: false}}/>
          <Toggle type="primary" content={{on: 'ON', off: 'OFF'}}/>
        </div>

        <div style={{marginTop: '2rem'}}>
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

export const ToggleC = () => {
      let comp = <>
        <div>
          <Toggle type="secondary" content={{on: '开', off: '关', showInBar: true}}/>
          <Toggle type="secondary"
                  content={{on: 'ON', off: 'OFF', showInBar: true}}/>
          <Toggle type="secondary" content={{on: '开', off: '关', showInBar: false}}/>
          <Toggle type="secondary" content={{on: 'ON', off: 'OFF'}}/>
        </div>

        <div style={{marginTop: '2rem'}}>
          <Toggle type='secondary' content={{
            on: <Icon>
              <FontAwesomeIcon icon={faCheck}/>
            </Icon>,
            off: <Icon>
              <FontAwesomeIcon icon={faQuestion}/>
            </Icon>,
            showInBar: true,
          }}/>
          <Toggle type="secondary" content={{
            on: <Icon>
              <FontAwesomeIcon icon={faCar}/>
            </Icon>,
            off: <Icon>
              <FontAwesomeIcon icon={faPlane}/>
            </Icon>,
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
