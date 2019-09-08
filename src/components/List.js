// List.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';


class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  renderListItem(data, index){
    return (
      <tr className="list-group-item clearfix pd-checkbox" key={data.id}>
        <input type="checkbox" className="checkbox-custom" checked={data.checked} onChange={() => this.onCheck(data.id)}></input>
        <label className="form-check-label list-data-item">{data.name}</label>
        <td className="list-buttons">
          <Link to={`/edit/${data.name}`} className="btn btn-info edit-button">
            Edit
          </Link>
          <button
            onClick={(e) => 
            this.deleteContact(e, data.name, data.id)} 
            className="btn btn-danger delete-button"
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }

  onCheck(id) {
    console.log('onCheck', id);
    this.props.toggleChecked(id);
  }

  deleteContact(e, name, id){
    e.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.props.deleteContact(id);
      setTimeout(() => {
        alert(`Successful deletion of "${name}" at index ${id}`);
      }, 300);
    }
  };

  render() {
    return (
      <table className="results-table">
        <tbody>
          {this.props.list.map((contact, i) => this.renderListItem(contact, i))}
        </tbody>    
      </table>
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
    toggleChecked: id => dispatch(contactAction.toggleChecked(id)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);