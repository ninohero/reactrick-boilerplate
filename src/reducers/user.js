import { TOGGLEROLE, ADDROLE, REMOVEROLE, LOGOUT, LOGIN, USERREINSURER, USERCEDENT } from '../constants';

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

  if( action.type === TOGGLEROLE ) {
    return state;

  } else if( action.type === ADDROLE ) {
    return state;

  } else if( action.type === REMOVEROLE ) {
    return state;

  } else if( action.type === LOGOUT ) {
    return state;

  } else if( action.type === USERREINSURER ) {
    return state;

  } else if( action.type === USERCEDENT ) {
    return state;

  } else if( action.type === LOGIN ) {
    return state;
  }

  return state;
}
