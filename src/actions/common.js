import {
  START_ACTION,
  END_ACTION,
  SHOW_TOAST,
  HIDE_TOAST
} from '../constants/actionTypes/common'

export const startAction = () => ({ type: START_ACTION })

export const endAction = () => ({ type: END_ACTION })

export const showToast = (title, content) => ({ type: SHOW_TOAST, title, content })

export const hideToast = () => ({ type: HIDE_TOAST })