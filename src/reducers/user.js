import { LOGOUT, LOGIN } from '../constants';

let initialState = {
  token: null,
  username: null,
  roles: {
    'Admin' : false,
    'Editor' : false
  }
};

export default function update(state = initialState, action) {
  var newState = Object.assign({}, state);

  if( action.type === LOGOUT ) {
    console.log( 'User is logging out' );
    return state;

  } else if( action.type === LOGIN ) {
    console.log( 'User is logging in' );
    return state;
  }

  return state;
}
