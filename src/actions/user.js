import { LOGOUT, LOGIN } from '../constants'

export function Login( ) {
  return {
    type: LOGIN
  }
}

export function Logout( ) {
  return {
    type: LOGOUT
  }
}
