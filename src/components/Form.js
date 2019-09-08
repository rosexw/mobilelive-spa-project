// Form.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';
import List from './List.js';

class Form extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);

    this.state = {
      name: '',
      selectValue: "list1"
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
    this.props.createContact(contact, this.state.selectValue);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }
 
  toggle() {
    // var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // for (var i = 0; i < checkboxes.length; i++) {
    //     if (checkboxes[i] !== source) {
    //         checkboxes[i].checked = source.checked;
    //         console.log('check all checkboxes');
    //     }
    // }
  }

  render() {
    return (
        <div>
          <div className="contacts-form-results">
            <h3>Add Contact</h3>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/>
            
              <select 
                id="dropdown"
                name="select-list"
                onChange={this.handleDropdownChange}
              > 
                <option className="option" value="list1">Add to List 1</option>
                <option className="option" value="list2">Add to List 2</option>
              </select>

              <input type="submit" className="btn btn-success add-button" value="Add Contact"/>
            </form>
            <p>Selected value is : {this.state.selectValue}</p>

            <button className="btn feature-button">Move</button>
            <button className="btn feature-button" onClick={this.toggle}>Select All</button>
            <hr />

            <div className="column">
              <h3>List 1</h3>
              <List list={this.props.list1} />
            </div>

            <div className="column">
              <h3>List 2</h3>
              <List list={this.props.list2} />
            </div>
            
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list1: state.contacts.list1,
    list2: state.contacts.list2,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact, list) => dispatch(contactAction.createContact(contact, list)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Form);