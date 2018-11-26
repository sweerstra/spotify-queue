import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import Firebase from './data/firebase';
import * as serviceWorker from './serviceWorker';

render(
  <App firebase={new Firebase()}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
