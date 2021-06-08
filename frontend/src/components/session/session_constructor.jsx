import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors, createNewUser } from '../../actions/session';
import Session from './session';

const mSTP = ({errors}) => {
  errors ? errors.session : []
  return {
    errors: errors
  }
}
const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mapDispatchToProps)(Session);