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

export const editContact = (id) => {
  return {
    type: actionTypes.EDIT_CONTACT,
    id: id
  }
}

export const moveContact = (list) => {
  return {
    type: actionTypes.MOVE_CONTACT,
    list: list,
  }
}

export const toggleChecked = (id) => {
  return {
    type: actionTypes.TOGGLE_CHECKED,
    id: id,
  }
}

export const selectAll = () => {
  return {
    type: actionTypes.SELECT_ALL,
  }
}