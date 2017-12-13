import { EMAIL_CHANGED } from './types'

export const emailChanged = (text) => {
    return {
      type: 'email_change',
      payload: text
    };
};