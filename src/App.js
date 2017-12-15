import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {


  componentWillMount() {
    let config = {
      apiKey: "AIzaSyDLh0cnbmp61jfPJpU399ihBJm4cyIpzPY",
      authDomain: "taskman-d49b3.firebaseapp.com",
      databaseURL: "https://taskman-d49b3.firebaseio.com",
      projectId: "taskman-d49b3",
      storageBucket: "taskman-d49b3.appspot.com",
      messagingSenderId: "560612693392"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    )
  }

}

export default App;
