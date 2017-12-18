import 'react-native';
import React from 'react';
import LoginForm from '../../src/components/LoginForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../src/reducers';
import ReduxThunk from 'redux-thunk';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// imported as a connected component!

const middlewares = []; // you can mock any middlewares here if necessary
// const mockStore = configureStore(middlewares);

console.log(configureStore(reducers, {}, applyMiddleware(ReduxThunk)))
const mockStore = configureStore(reducers, {}, applyMiddleware(ReduxThunk))



const initial = {
  auth: {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
  }
}

describe('Testing LoginForm', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LoginForm/>,
      { context: { store: mockStore(initial) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
