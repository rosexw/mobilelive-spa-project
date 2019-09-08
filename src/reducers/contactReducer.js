// contactReducer.js

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  list1: [],
  list2: [],
};

let idCount = 0;

function createContact(contact) {
  return Object.assign({}, contact, {
    id: idCount ++,
    checked: false,
  })
}

function checkedContact(contact, action) {
  if (contact.id === action.id) {
    // toggle checked
    console.log('checked', contact.checked);

    return {
      ...contact,
      checked: !contact.checked,
    };
  } else {
    return contact;
  }
}

export default (state = initialState, action) => {
    switch (action.type){

      case actionTypes.CREATE_NEW_CONTACT:
        if (action.list === "list1") {
          return {
            ...state,
            list1: [
              ...state.list1,
              createContact(action.contact)
            ]
          }          
        } else {
          return {
            ...state,
            list2: [
              ...state.list2,
              createContact(action.contact)
            ]
          };
        }

      case actionTypes.REMOVE_CONTACT:
        return {
          ...state,
          // if contact is in list 1, then:
          list1: state.list1.filter(data => data.id !== action.id),
          // else contact is in list 2, then
          list2: state.list2.filter(data => data.id !== action.id)
        };

      case actionTypes.EDIT_CONTACT:
        return state;

      // case actionTypes.MOVE_CONTACT:

      case actionTypes.TOGGLE_CHECKED:
        console.log('toggle checked function');
        return {
          ...state,
          list1: state.list1.map(
            contact => checkedContact(contact, action)
          ),    
          list2: state.list2.map(
            contact => checkedContact(contact, action)
          )
        }

      default:
        return state;
    }
  };

  // Change the Edit function case as above