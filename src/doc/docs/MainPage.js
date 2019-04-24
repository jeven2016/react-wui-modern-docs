import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import intl from 'react-intl-universal';
import ButtonIndex from './button/ButtonIndex';
import {Menu} from '../../react-wui';

export default class MainPage extends Component {

  render() {
    console.log('mainPage');
    const {match} = this.props;
    return (
        <div className="doc grid-row row">
          <div className="doc left-nav-col col-xs-12 col-md-2">
            <Menu type="primary" hasBorder={false}>
              <Menu.Header id="header">Geting Started</Menu.Header>
              <Menu.List>
                <Menu.Item id="installItem">Install</Menu.Item>
                <Menu.Item id="basicItem">Basic</Menu.Item>
                <Menu.SubMenu>
                  <Menu.Header>Components</Menu.Header>
                  <Menu.List>
                    <Menu.Item id="buttonItem">
                      <Link to={`${match.url}/components/button`}>
                        {intl.get('main.navbar.button')}
                      </Link>
                    </Menu.Item>
                    <Menu.Item id="inputItem">
                      Input
                    </Menu.Item>
                  </Menu.List>
                </Menu.SubMenu>
                <Menu.Item id="layoutItem">
                  Layout
                </Menu.Item>
              </Menu.List>
            </Menu>

          </div>
          <div className="doc center-col col-xs-12 col-md-8">
            <Route exact={true} path={`${match.url}/components/button`}
                   component={ButtonIndex}/>
          </div>
          <div className="doc right-col col-md-2">

          </div>

        </div>
    );

  }
}