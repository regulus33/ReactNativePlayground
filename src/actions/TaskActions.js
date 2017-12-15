import firebase from 'firebase'
import {
  TASK_UPDATE
} from './types';

export const taskUpdate = ({ prop, value }) => {
  return {
    type: TASK_UPDATE,
    payload: { prop, value }
  };
};


export const taskCreate = ({name, insights, dueDate}) => {
  //the ref is not a url, its a path to your dataStore
  //more like and SQL query
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/tasks`)
    .push({ name, insights, dueDate });
};