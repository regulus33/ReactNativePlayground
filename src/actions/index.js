import firebase from 'firebase'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
}
from './types'

export const emailChanged = (text) => {
    return {
      type: 'email_change',
      payload: text
    };
};

export const passwordChanged = (text) => {
    return {
      type: 'password_change',
      payload: text
    };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      });
  };
};
