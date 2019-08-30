// contactReducer.js

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  list1: [],
  list2: [],
};

let idCount = 0;

function createContact(contact) {
  return Object.assign({}, contact, {
    id: idCount ++
  })
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
        console.log("action.id", action.id);
        return {
          ...state,
          // if contact is in list 1, then:
          list1: state.list1.filter(data => data.id !== action.id),
          // else contact is in list 2, then
          list2: state.list2.filter(data => data.id !== action.id)
        }
          ;
      case actionTypes.EDIT_CONTACT:
        return state;
      default:
        return state;
    }
  };

  // Change the Edit function case as above