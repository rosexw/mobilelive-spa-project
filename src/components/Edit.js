// Edit.js

import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class Edit extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Edit</h2>
          <p>Item is "<Route path="/edit/:id" component={Contact} />"</p>
        </div>
      </Router>
    );
  }
}

function Contact({ match }) {
  return (
    <span>{match.params.id}</span>
  );
}

export default Edit;