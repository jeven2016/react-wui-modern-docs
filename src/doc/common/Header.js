import React, {Component} from "react";
import {NavBar} from "../../react-wui";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Header extends Component {

  render() {
    return <NavBar fixed="top" type="primary" appendClass="doc header">
      <NavBar.Title>
        <FontAwesomeIcon icon={faBars}/>
        <NavBar.Link appendClass="doc title-link">
          <h3>React Wui</h3>
        </NavBar.Link>
      </NavBar.Title>
    </NavBar>
  }

}