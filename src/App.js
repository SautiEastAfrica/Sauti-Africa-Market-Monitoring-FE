import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute';


const App = () => (
  <Router>
  <div>
    <Navigation />
    <Route exact path = '/' component = {Home}/>
    <Route path = '/about' component = {About}/>
    <PrivateRoute path = '/contact' component = {Contact}/>
  </div>


  </Router>
);

export default App;
