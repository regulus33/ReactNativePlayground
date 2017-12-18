import 'react-native';
import React from 'react';
import { EMAIL_CHANGED } from '../../src/actions/types';
import { emailChanged } from '../../src/actions';

describe('auth actions', () => {
    describe('emailChanged', () => {
      it('has the correct type', () => {
        expect(emailChanged().type).toEqual(EMAIL_CHANGED);
      });

      it('has the correct payload', () => {

      });
    });
});
