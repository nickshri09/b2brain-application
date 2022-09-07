import React from 'react'
import { Route, Switch,  } from 'react-router-dom'
import HomePage from './Pages/HomePage';

const Routes = () => {
  return <Switch>
    <Route exact path="/">
        <HomePage />
    </Route>
  </Switch>;
}

export default Routes;