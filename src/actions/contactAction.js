// contactAction.js

import * as actionTypes from './actionTypes';

export const createContact = (contact) => {
    return {
      type: actionTypes.CREATE_NEW_CONTACT,
      contact: contact
    }
  };