import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import './assets/css/common1.css';
import './assets/css/style1.css';
// import './assets/css/common.css';
import JavascriptTimeAgo from 'javascript-time-ago'

// The desired locales.
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

// Initialize the desired locales.
JavascriptTimeAgo.locale(en)
JavascriptTimeAgo.locale(ru)



hydrate(<App/>, document.getElementById('root'))