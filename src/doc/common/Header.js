import React, {Component} from "react";
import {NavBar} from "../../react-wui";

export default class Header extends Component {

  render() {
    return <NavBar fixed="top" type="primary">
      <NavBar.Title>
        <NavBar.Link>Hello</NavBar.Link>
      </NavBar.Title>
    </NavBar>
  }

}