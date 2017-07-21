import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link,hashHistory } from 'react-router'
import routeConfig from './router'



ReactDOM.render(<Router history={hashHistory} routes={routeConfig} />, document.getElementById('root'));
registerServiceWorker();
