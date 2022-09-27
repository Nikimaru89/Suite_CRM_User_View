import { combineReducers } from 'redux'

import auth from './auth'
import common from './common'
import sidebar from './sidebar'
import progress from './progress'

const rootReducer = combineReducers({
  auth,
  common,
  sidebar,
  progress,
})

export default rootReducer
