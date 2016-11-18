import React from 'react'
import { connect } from 'react-redux';
import { Login, Logout } from '../actions/user';

function onClick() {
  console.log('user has clicked');
}

function LoginComponent( { user, date, Login, Logout } ) {

  debugger;

  return (
    <div className="login">
      <h1>Login</h1>
      <div onClick={ Login }>Login</div>
      <div onClick={ Logout }>Logout</div>
    </div>
  );
}

export default connect(
  state => ({
    user: state.user,
    date: Date.now()
  }),
  { Login, Logout }
)( LoginComponent )
