import React, { Component } from 'react';
import './app.css';
import {
  HashRouter, Route, Switch, Link, Redirect
} from 'react-router-dom';

import Register from './components/Registration/Registration';
import Login from './components/Login/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
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
