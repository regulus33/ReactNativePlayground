import React from 'react';
import {Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import TaskList from './components/TaskList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Stack key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Log In"
          initial
        />
        <Scene
          key="taskList"
          component={TaskList}
          title="tasks"
        />
      </Stack>
    </Router>
  )
};

export default RouterComponent