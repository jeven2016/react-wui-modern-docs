import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import intl from "react-intl-universal";
import ButtonIndex from "./button/ButtonIndex";

export default class MainPage extends Component {
  render() {
    return (
        <div className="doc grid-row row">
          <div className="doc left-nav-col col-md-2">
            <div className="submenu">
              <div className="menu-header">Geting Started</div>
              <div className="menu-list">
                <div className="item">
                  Install
                </div>
                <div className="item">
                  Basic
                </div>
                <div className="submenu">
                  <div className="menu-header">
                    Components
                  </div>
                  <div className="menu-list">
                    <div className="item">
                      <Link to="/components/button">
                        {intl.get("main.navbar.button")}
                      </Link>
                    </div>
                    <div className="item">
                      Input
                    </div>
                  </div>
                </div>
                <div className="item">
                  Layout
                </div>
              </div>
            </div>

          </div>
          <div className="doc center-col col-md-8">
            <Route path="/components/button" component={ButtonIndex}/>
          </div>
          <div className="doc right-col col-md-2">

          </div>

        </div>
    );

  }
}