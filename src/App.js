import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {


  componentWillMount() {
    var config = {
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
    return (
      <Provider store={ createStore(reducers) }>
        <View>
         <LoginForm/>
        </View>
      </Provider>
    )
  }

}

export default App