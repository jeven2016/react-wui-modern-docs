import React, {Component} from "react";

export default class MainPage extends Component {
  render() {
    return (<div>
      <div className="doc grid-row row">
        <div className="doc left-nav-col col-md-2">
          <div className="simple menu"
               style={{width: "100%", height: "calc(100vh - 4rem)"}}>
            <div className="submenu">
              <div className="menu-header">Getting Started</div>
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
                      Button
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
        </div>
        <div className="doc center-col col-md-8">
          <div style={{height: "300px"}}>d</div>
          <div style={{height: "300px"}}>d</div>
          <div style={{height: "300px"}}>d</div>
          <div style={{height: "300px"}}>d</div>
          <div style={{height: "300px"}}>d</div>
        </div>
        <div className="doc right-col col-md-2">

        </div>

      </div>

      < /div>);

        }
}