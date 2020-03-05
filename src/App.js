import React from 'react';
import './App.css';

import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServerScreen from './Screens/Server/ServerScreen'
import ServerDetail from './Screens/Server/components/ServerDetail'
import MemberScreen from './Screens/Member/MemberScreen'
import AddServerScreen from './Screens/Member/AddServerScreen'
import MyServersScreen from './Screens/Member/MyServersScreen'
import ProfileScreen from './Screens/Member/ProfileScreen'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <ServerScreen />}></Route>
        <Route exact path='/serveur/' component={() => <ServerDetail />}></Route>
        <Route exact path='/membre/' component={() => <MemberScreen />}></Route>
        <Route exact path='/profile/' component={() => <ProfileScreen />}></Route>
        <Route exact path='/nouveau-serveur/' component={() => <AddServerScreen />}></Route>
        <Route exact path='/mes-serveurs/' component={() => <MyServersScreen />}></Route>
      </Switch>
    </Router>
  )
}

export default App;
