 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './List.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="main">
    <App name = "Rayhan Ahmed"/>
    <List />
</div>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();