import React, {Component} from "react";
import {Button, NavBar} from "../../react-wui";
import {faBars, faBook, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import intl from 'react-intl-universal';

export default class Header extends Component {

  render() {
    return <NavBar fixed="top" type="primary" appendClass="doc header">
      <NavBar.Title>
        <FontAwesomeIcon icon={faBars}/>
        <NavBar.Link appendClass="doc title-link">
          <h3>{intl.get("home.title")}</h3>
        </NavBar.Link>
      </NavBar.Title>
      <NavBar.List align="right">
        <NavBar.Item hasBackground={true}>
          <NavBar.Link><FontAwesomeIcon
              icon={faBook}/>&nbsp;&nbsp;{intl.get(
              "home.title.about.documentation")}</NavBar.Link>
        </NavBar.Item>
        <NavBar.Item hasBackground={true}>
          <NavBar.Link><FontAwesomeIcon
              icon={faUser}/>&nbsp;&nbsp;{intl.get("home.title.about.me")}
          </NavBar.Link>
        </NavBar.Item>
      </NavBar.List>
    </NavBar>;
  }

}