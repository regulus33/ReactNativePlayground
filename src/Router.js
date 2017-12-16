import React from 'react';
import {Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';

const RouterComponent = () => {

  return (
    <Router>
      <Stack key="root" hideNavBar>

        <Scene key="auth" initial>
          <Scene
            key="login"
            component={LoginForm}
            title="Please Log In"
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={()=> Actions.taskCreate()}
            key="taskList"
            component={TaskList}
            title="tasks"
          />
          <Scene
            key="taskCreate"
            component={TaskCreate}
            title="Create A Task"
          />
        </Scene>

      </Stack>
    </Router>
  )
};



export default RouterComponent