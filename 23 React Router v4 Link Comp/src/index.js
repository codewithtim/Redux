import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = (props) => {
  console.log(props);
  return <h1>Home</h1>
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={App} />
      <Route path='/home/:name' component={Home} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
