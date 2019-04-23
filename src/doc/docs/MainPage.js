import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import intl from 'react-intl-universal';
import ButtonIndex from './button/ButtonIndex';
import {Menu} from '../../react-wui';

export default class MainPage extends Component {
  render() {
    const {match} = this.props;
    return (
        <div className="doc grid-row row">
          <div className="doc left-nav-col col-md-2">
            <Menu hasBorder={false}>
              <Menu.Header key="header">Geting Started</Menu.Header>
              <Menu.List>
                <Menu.Item>Install</Menu.Item>
                <Menu.Item>Basic</Menu.Item>
                <Menu.SubMenu>
                  <Menu.Header>Components</Menu.Header>
                  <Menu.List>
                    <Menu.Item>
                      <Link to={`${match.url}/components/button`}>
                        {intl.get('main.navbar.button')}
                      </Link>
                    </Menu.Item>
                    <Menu.Item active={true} disabled={false}>
                      Input
                    </Menu.Item>
                  </Menu.List>
                </Menu.SubMenu>
                <Menu.Item>
                  Layout
                </Menu.Item>
              </Menu.List>
            </Menu>

          </div>
          <div className="doc center-col col-md-8">

            <div style={{height: '300px'}}></div>
            <div style={{height: '300px'}}></div>
            <div style={{height: '300px'}}></div>
            <div style={{height: '300px'}}></div>
            <div style={{height: '300px'}}></div>
            <Route exact={true} path={`${match.url}/components/button`}
                   component={ButtonIndex}/>
          </div>
          <div className="doc right-col col-md-2">

          </div>

        </div>
    );

  }
}