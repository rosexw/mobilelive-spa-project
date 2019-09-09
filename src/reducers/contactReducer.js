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
    return {
      ...contact,
      checked: !contact.checked,
    };
  } else {
    return contact;
  }
}

function selectAll(contact) {
 return {
   ...contact,
   checked: true,
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

      case actionTypes.MOVE_CONTACT:
        // if the contact is in list 1
        // then remove the item from list 1
        // add item to list 2

        // if (data.id === action.id){
        // return {
        //   ...state,
        //   // if contact is in list 1, then:
        //   list1: state.list1.filter(data => data.id !== action.id),
        //   // else contact is in list 2, then
        //   list2: state.list2.filter(data => data.id !== action.id)
        // };
        // }


        console.log("test test move contact");

        // if the contact is in list 2
        // then remove the item from list 2
        // add item to list 1


      case actionTypes.TOGGLE_CHECKED:
        return {
          ...state,
          list1: state.list1.map(
            contact => checkedContact(contact, action)
          ),    
          list2: state.list2.map(
            contact => checkedContact(contact, action)
          )
        }

      case actionTypes.SELECT_ALL:
        return {
          ...state,
          list1: state.list1.map(
            contact => selectAll(contact)
          ),    
          list2: state.list2.map(
            contact => selectAll(contact)
          )
        }

      default:
        return state;
    }
  };

  // Change the Edit function case as above