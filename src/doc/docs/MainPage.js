import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class MainPage extends Component {
  render() {
    return (<div>
      <div className="row">
        <div className="col-xs-12 col-sm-3 col-md-2" >

          <div className="simple menu" style={{width: "100%", height: "calc(100vh - 4rem)"}}>
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
        <div className="col-xs-12 col-sm-9 col-md-10"></div>

      </div>
      < /div>);

        }
        }