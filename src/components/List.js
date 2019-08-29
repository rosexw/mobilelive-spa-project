// List.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';


class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  }

  listItemView(data, index){
    return (
      <div>
        <tr className="list-group-item clearfix" key={index}>
          <td className="list-data-item">{data.name}</td>
          <td className="list-buttons">
            <Link to={`/edit/${data.name}`} className="btn btn-info edit-button">
              Edit
            </Link>
            <button
              onClick={(e) => 
              this.deleteContact(e, data.name, index)} 
              className="btn btn-danger delete-button"
            >
              Delete
            </button>
          </td>
        </tr>
      </div>
    )
  }

  deleteContact(e, name, index){
    e.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.props.deleteContact(index);
      setTimeout(() => {
        alert(`Successful deletion of ${name}`);
      }, 300);
    }
  };

  render() {
    return (
        <div>
          <table className="results-table">
            <tbody>
              {this.props.list.map((contact, i) => this.listItemView(contact, i))}
            </tbody>    
          </table>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // contacts: state.contacts.list1
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    editContact: index => dispatch(contactAction.editContact(index)),
    deleteContact: contact => dispatch(contactAction.deleteContact(contact)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);