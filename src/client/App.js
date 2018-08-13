import React, { Component } from 'react';
import './app.css';
import {
  HashRouter, Route, Switch, Link, Redirect
} from 'react-router-dom';

import Register from './containers/Registration/Registration';
import Login from './containers/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/Homepage/Homepage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  render() {
    return (
       <HashRouter>
           <div>
           {window.location.pathname.includes('index.html') && <Redirect to="/" />}
           <Route exact path="/" component={Login} />
           <Route exact path="/register" component={Register} />
           </div>
       </HashRouter>
    );
  }
}
