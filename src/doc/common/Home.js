import React, {Component} from "react";
import {NavBar} from "../../react-wui";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Home extends Component {

  render() {
    return <div className="doc home">
      <div className="banner-container">
        <div className="banner">
          <div className="title text color-white">
            Wui
          </div>
          <div className="banner-icon">
            W
          </div>
          <div className="content">
            <p>一个支持响应式布局并致力于提供丰富Web体验的前端框架</p>
            <p>With MIT License</p>
          </div>
          <div className="line">
            <a className="button teal" to="/components">
              <i className="fa fa-book"/>
              Get Started
            </a>
            <button className="button purple ">
              <i className="fa fa-github"/> Download
            </button>
          </div>
          <div className="line">
            Current release v0.5.0
          </div>
          <div className="line">&nbsp;</div>
        </div>
      </div>
    </div>;
  }

}