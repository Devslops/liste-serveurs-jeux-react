import React from 'react';
import './App.css';

import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServeurScreen from './Screens/Serveur/ServeurScreen'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <ServeurScreen />}></Route>
      </Switch>
    </Router>
  )
}

export default App;
