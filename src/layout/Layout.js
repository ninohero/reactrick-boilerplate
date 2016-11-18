import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';

function Layout( { children, user } ) {

  return (
    <div className="container">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default connect(
  state => ({
    user: state.user
  }),
  {  }
)( Layout );
