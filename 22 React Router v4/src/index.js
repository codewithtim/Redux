import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={App} />
      <Route path='/home' render={() => <h1>Hello</h1>} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
