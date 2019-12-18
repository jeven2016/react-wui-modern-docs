//if you import the IE9 entry point, this will include IE10 and IE11 support.
//https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
import 'babel-polyfill';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/wui-modern-0.5.1.min.css';
import './style/doc.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add();

ReactDOM.render(<App/>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
