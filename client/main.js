import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import './assets/css/style.css';
import './assets/css/common.css';


hydrate(<App/>, document.getElementById('root'))