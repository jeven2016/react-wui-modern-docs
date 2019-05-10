import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {faList, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Dropdown, Menu} from '../../../react-wui';

export const DpA = () => {
  let comp = <Dropdown triggerBy="hover">
    <div key="hover">Hover</div>
    <Menu>
      <Menu.Item value={1} text="Action 1"/>
      <Menu.Item value={2} text="Action 2"/>
      <Menu.Item value={3} text="Action 3"/>
      <Menu.Item value={4} text="Action 4"/>
    </Menu>
  </Dropdown>;

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
