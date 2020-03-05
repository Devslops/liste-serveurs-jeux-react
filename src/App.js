import React from 'react';
import './App.css';

import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServerScreen from './Screens/Server/ServerScreen'
import ServerDetail from './Screens/Server/components/ServerDetail'
import MemberScreen from './Screens/Member/MemberScreen'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <ServerScreen />}></Route>
        <Route exact path='/serveur/' component={() => <ServerDetail />}></Route>
        <Route exact path='/membre/' component={() => <MemberScreen />}></Route>
      </Switch>
    </Router>
  )
}

export default App;
