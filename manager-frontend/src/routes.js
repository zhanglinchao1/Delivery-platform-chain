import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import Orders from './pages/Orders';

export default function Routes() {
  return (  
    <HashRouter>
      <Switch>
        <PublicRoute restricted={true} path="/" exact component={CreateAccount} />
        <PublicRoute restricted={true} path="/session" component={Login} />

        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/dashboard/menu" component={Menu} />
        <PrivateRoute path="/dashboard/orders" component={Orders} />
      </Switch>
    </HashRouter>
  )
}