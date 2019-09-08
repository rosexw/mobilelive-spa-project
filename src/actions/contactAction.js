// contactAction.js

import * as actionTypes from './actionTypes';

export const createContact = (contact, list) => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact,
    list: list
  }
};

export const deleteContact = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id: id
  }
};

export const editContact = (contact) => {
  return {
    type: actionTypes.EDIT_CONTACT,
    contact: contact
  }
}

// export const moveContact = (contact) => {
//   return {
//     type: actionTypes.MOVE_CONTACT,
//     contact: contact,
//     checked: checked
//   }
// }

export const toggleChecked = (id) => {
  return {
    type: actionTypes.TOGGLE_CHECKED,
    id: id,
  }
}
