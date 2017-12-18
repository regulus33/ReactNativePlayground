import 'react-native';
import React from 'react';
import LoginForm from '../src/components/LoginForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';
import ReduxThunk from 'redux-thunk';