import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';
import { emailChanged } from '../actions'

class LoginForm extends Component {

  onEmailChange(text) {

  }

  render() {
    return(
       <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="Password"
            secureTextEntry
            label="Password"
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

export default LoginForm;