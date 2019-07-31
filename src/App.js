import React, {Component} from 'react';
import Header from './doc/common/Header';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './doc/common/Home';
import MainPage from './doc/docs/MainPage';

import intl from 'react-intl-universal';

// locale data
const locales = {
  'en_US': require('./doc/i18n/en_US.json'),
  'zh_CN': require('./doc/i18n/zh_CN.json'),
};

class App extends Component {

  constructor(args) {
    super(args);
    this.state = {initDone: false, appliedLocale: 'zh_CN'};
  }

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl.init({
      locales,
      currentLocale: this.state.appliedLocale
    }).then(() => {
      // After loading CLDR locale data, start to render
      this.setState({initDone: true});
    });
  }

  render() {
    return (
        <Router>
          <div>
            <Header/>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/main" component={MainPage}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
