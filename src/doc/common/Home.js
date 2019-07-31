import React, {Component} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import intl from 'react-intl-universal';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

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
            <p>{intl.get('briefDescription')}</p>
            <p style={{marginTop: '1rem'}}>{intl.get('licenseInfo')}</p>
          </div>
          <div className="line">
            <Link to="/main" className="button green">
              <FontAwesomeIcon icon={faBook}/>&nbsp;&nbsp;
              {intl.get('home.btn.start')}
            </Link>
            <button className="button purple">
              <FontAwesomeIcon icon={faGithub}/>&nbsp;&nbsp;Github
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