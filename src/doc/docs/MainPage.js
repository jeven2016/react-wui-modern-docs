import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import intl from "react-intl-universal";
import ButtonIndex from "./button/ButtonIndex";

export default class MainPage extends Component {
  render() {
    const {match} = this.props;
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
                      <Link to={`${match.url}/components/button`}>
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

            <div style={{height: "300px"}}></div>
            <div style={{height: "300px"}}></div>
            <div style={{height: "300px"}}></div>
            <div style={{height: "300px"}}></div>
            <div style={{height: "300px"}}></div>
            <Route path={`${match.url}/components/button`}
                   component={ButtonIndex}/>
          </div>
          <div className="doc right-col col-md-2">

          </div>

        </div>
    );

  }
}