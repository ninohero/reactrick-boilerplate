import { LOGOUT, LOGIN } from '../constants'

export function Login( dat ) {
  return {
    type: LOGIN,
    username: data.username
  }
}

export function Logout( ) {
  return {
    type: LOGOUT
  }
}
