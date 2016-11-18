import React from 'react';
import { Link } from 'react-router'; //IndexLink
import { connect } from 'react-redux';

function PrimaryNavigation( ) {

  return (
    <div>
      <div className="primary-nav">
        {' '}
        <Link activeStyle={{color: '#000'}} to="/">Home</Link>
        {' '}
        <Link activeStyle={{color: '#000'}} to="/dashboard">Dashboard</Link>
        {' '}
        <Link activeStyle={{color: '#000'}} to="/login">Login</Link>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    user: state.user
  }),
  { }
)( PrimaryNavigation )
