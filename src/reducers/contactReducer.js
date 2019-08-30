// contactReducer.js

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  list1: [],
  list2: [],
};

export default (state = initialState, action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
        if (action.list === "list1") {
          return {
            ...state,
            list1: [
              ...state.list1,
              Object.assign({}, action.contact)
            ]
          }          
        } else {
          return {
            ...state,
            list2: [
              ...state.list2,
              Object.assign({}, action.contact)
            ]
          };
        }

      case actionTypes.REMOVE_CONTACT:
        return {
          ...state,
          // if contact is in list 1, then:
          list1: state.list1.filter((data, i) => i !== action.id),
          // else contact is in list 2, then
          list2: state.list2.filter((data, i) => i !== action.id)
        }
          ;
      case actionTypes.EDIT_CONTACT:
        return state;
      default:
        return state;
    }
  };

  // Change the Edit function case as above