// App.js

// https://appdividend.com/2017/11/02/simple-redux-create-delete-contact-application/
// the above tutorial, but modified so the errors don't occur.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: ''
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: this.state.name,
    } 
    this.props.createContact(contact);
  }

  listView(data, index){
    return (
      <div className="row form-inline" key={index}>
        <table>
          <tbody>
            <tr className="list-group-item clearfix">
              <td>{data.name}</td>
            </tr>
          </tbody>
        </table>
        <div className="col-md-2">
          <button onClick={(e) => this.editContact(e, index)} className="btn btn-info edit-button">
            Edit
          </button>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger delete-button">
            Delete
          </button>
        </div>
    </div> 
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  editContact(e, index){
    e.preventDefault();
    this.props.editContact(index);
  }


  render() {

    return(
      <div className="frame">
        <h1>Clientside Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/>
            <input type="submit" className="btn btn-success add-button" value="ADD"/>
          </form>
          <hr />
            <ul className="list-group">
              {this.props.contacts.map((contact, i) => this.listView(contact, i))}
            </ul>
        </div>
      </div>
    )
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
    deleteContact: index => dispatch(contactAction.deleteContact(index)),
    editContact: index => dispatch(contactAction.editContact(index)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);