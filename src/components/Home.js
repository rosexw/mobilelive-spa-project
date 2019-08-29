// Home.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';
import List from './List.js'


class Home extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: this.state.name,
    }
    this.props.createContact(contact);
  }

  render() {
    return (
        <div>
          <h2>Home</h2>

          <div className="contacts-form-results">
            <h3>Add Contact Form to List 1</h3>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/>
              <input type="submit" className="btn btn-success add-button" value="Add Contact"/>
            </form>
            <hr />

            <div class="column">
              <th>List 1</th>
              <List />
            </div>

            <div class="column">
              <th>List 2</th>
              <List />
            </div>
            
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);