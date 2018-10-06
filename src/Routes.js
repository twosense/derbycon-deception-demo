import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Success from './containers/Success';
import Failure from './containers/Failure';
import NotFound from './containers/NotFound';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/success" exact component={Success} />
    <Route path="/failure" exact component={Failure} />
    <Route component={NotFound} />
  </Switch>;