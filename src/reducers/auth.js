import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SIGNUP
} from '../constants/actionTypes/auth'

const INITIAL_STATE = {
  currentUser: {
    email: '',
    phone: '',
    token: ''
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        currentUser: action.user
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        currentUser: {
          email: '',
          token: ''
        }
      }
    case AUTH_SIGNUP:
      console.log('redux', action)
      return {
        ...state,
        currentUser: {
          email: action.email,
          phone: action.phone
        }
      }
    default:
      return state
  }
}

export default reducer