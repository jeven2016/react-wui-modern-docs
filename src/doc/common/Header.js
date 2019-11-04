import React, {useContext} from 'react';
import {IconList, NavBar} from '../../react-wui';
import {faBook, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import intl from 'react-intl-universal';
import {Link} from 'react-router-dom';
import MenuReducer from '../common/MenuReducer';

const Header = (props) => {
  const context = useContext(MenuReducer.context);
  console.log('header');
  return <NavBar fixed="top" type="primary" extraClassName="doc header">
    <NavBar.Title>
      <NavBar.Switch onClick={(evt) => {
        context.dispatch({type: 'active'});
        evt.preventDefault();
        evt.stopPropagation();
      }}>
        <IconList/>
      </NavBar.Switch>
      <div className="doc doc-title-link title-text">
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

};
export default Header;