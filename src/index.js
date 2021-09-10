import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style.js';
import {GlobalStyleIconfont} from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle BgColor={"lime"}/>
      <GlobalStyleIconfont/>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
