import { PROGRESS_VALUE } from "../constants/actionTypes/progress"

const INITIAL_STATE = {
  progressValue: parseInt(localStorage.getItem('progressValue')) ? parseInt(localStorage.getItem('progressValue')) : 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PROGRESS_VALUE:
      localStorage.setItem('progressValue', `${action.value}`)
      return {
        ...state,
        progressValue: action.value,
      }
    default:
      return state
  }
}

export default reducer