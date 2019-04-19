import React, {Component} from 'react';
import {Button, NavBar} from '../../react-wui';
import {faBars, faBook, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import intl from 'react-intl-universal';
import {Link} from 'react-router-dom';

export default class Header extends Component {

  render() {
    return <NavBar fixed="top" type="primary" appendClass="doc header">
      <NavBar.Title>
        <FontAwesomeIcon icon={faBars}/>
        <div className="doc title-link">
          <h3><Link to="/">{intl.get('home.title')}</Link></h3>
        </div>
      </NavBar.Title>
      <NavBar.List align="right">
        <NavBar.Item hasBackground={true} hasBar={true}>
          <FontAwesomeIcon
              icon={faBook}/>&nbsp;&nbsp;{intl.get(
            'home.title.about.documentation')}
        </NavBar.Item>
        <NavBar.Item hasBackground={true} hasBar={true}>
          <FontAwesomeIcon
              icon={faUser}/>&nbsp;&nbsp;{intl.get('home.title.about.me')}
        </NavBar.Item>
      </NavBar.List>
    </NavBar>;
  }

}