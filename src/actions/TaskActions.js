import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TASK_UPDATE,
  TASK_CREATE
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
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks`).push({ name, insights, dueDate })
      .then(() => {
      // .then(() => Actions.taskList({ type: 'reset' }));
        dispatch({ type: TASK_CREATE });
        Actions.taskList();
      });
  };
};
