// Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';

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


  listItemView(data, index){
    return (
      <tr className="list-group-item clearfix" key={index}>
        <td>{data.name}</td>
        <td>
          <Link to="/edit" className="btn btn-info edit-button">
            Edit
          </Link>
          <button 
            onClick={(e) => 
            this.deleteContact(e, index)} 
            className="btn btn-danger delete-button"
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  };

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
              <ul className="list-group">
              <table className="results-table">
                <tbody>
                  {this.props.contacts.map((contact, i) => this.listItemView(contact, i))}
                </tbody>
              </table>
              </ul>
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
    editContact: index => dispatch(contactAction.editContact(index)),
    deleteContact: index => dispatch(contactAction.deleteContact(index)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);