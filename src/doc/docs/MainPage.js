import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class MainPage extends Component {
  render() {
    return <div>
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <div className="menu simple">
            <div className="submenu">
              <div className="menu-header">快速开始</div>
              <div className="menu primary">
                <li className="item">安装</li>
                <li className="item active">基础</li>
              </div>
            </div>

          </div>
        </div>
        <div className="col-xs-12 col-sm-8"></div>

      </div>
    </div>;
  }

}