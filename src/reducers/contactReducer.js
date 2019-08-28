// contactReducer.js

import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.CREATE_NEW_CONTACT:
        return [
          ...state,
          Object.assign({}, action.contact)
        ];
      case actionTypes.REMOVE_CONTACT:
        return state.filter((data, i) => i !== action.id);
      case actionTypes.EDIT_CONTACT:
        return state;
      default:
        return state;
    }
  };

  // Change the Edit function case as above
  // ** Another task to do: add routing - route to a different page when pressed.
  // Alert if delete!