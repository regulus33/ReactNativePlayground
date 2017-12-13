import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.passwordChanged(text)
  }

  onPassWordChange(text) {
    this.props.passwordChanged(text)
  }

  render() {
    return(
       <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="Password"
            secureTextEntry
            label="Password"
            onChangeText={this.onPassWordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles={
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default LoginForm;