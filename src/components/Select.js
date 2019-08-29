// Select.js
// Dropdown to which list

import React, { Component } from 'react';

class Select extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "selected-list-1"
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    return(
      <select 
        id="dropdown"
        name="select-list"
        onChange={this.handleDropdownChange}
      > 
        <option className="select-list-1" value="selected-list-1">Add to List 1</option>
        <option className="select-list-2" value="selected-list-2">Add to List 2</option>
      </select>
    )
  }
}

export default Select;