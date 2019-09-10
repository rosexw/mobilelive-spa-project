// App.js

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';

class App extends Component {
  render() {
    return(
      <Router basename="/">
        <div className="frame">
          <h1>Clientside Contacts Application</h1>
          <hr />
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id" component={Edit} />
        </div>
      </Router>
    )
  }
}

export default App;