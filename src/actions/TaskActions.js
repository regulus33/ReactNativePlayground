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
  console.log(name, insights, dueDate)
};