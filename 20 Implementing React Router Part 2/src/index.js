import { render } from 'react-dom';
import React from 'react';
import Users from './containers/users';
import { Provider } from 'react-redux';
import UsersStore from './store';
import App from './components/app';
import Home from './components/home';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

render(
  <Provider store={UsersStore}>
    <Router history={hashHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='users' component={Users} />
      </Route>
      <Route path='/blah/blah/blah' component={App} >
        <IndexRoute component={Home} />
        <Route path='users' component={Users} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
