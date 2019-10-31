import React, {useEffect, useReducer, useState} from 'react';
import Header from './doc/common/Header';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './doc/common/Home';
import MainPage from './doc/docs/MainPage';

import intl from 'react-intl-universal';
import MenuReducer from './doc/common/MenuReducer';

// locale data
const locales = {
  'en_US': require('./doc/i18n/en_US.json'),
  'zh_CN': require('./doc/i18n/zh_CN.json'),
};

const App = (props) => {
  const [state, setState] = useState({initDone: false, appliedLocale: 'zh_CN'});
  const [menuState, dispatch] = useReducer(MenuReducer.reducer,
      MenuReducer.initState);

  useEffect(() => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl.init({
      locales,
      currentLocale: state.appliedLocale,
    }).then(() => {
      // After loading CLDR locale data, start to render
      setState({...state, initDone: true});
    });
  }, [state.appliedLocale]);

  return state.initDone ?
      <MenuReducer.context.Provider value={{
        menuState: menuState,
        dispatch: dispatch,
      }}>
        <Router>
          {contentA()}
        </Router>
      </MenuReducer.context.Provider>
      : '';

};

//上中下，左右
const contentA = () => {
  return <div>
    <Header/>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/main" component={MainPage}/>
    </div>
  </div>;
};

export default App;
