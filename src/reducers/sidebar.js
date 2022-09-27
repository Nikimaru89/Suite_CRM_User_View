import {
  SIDEBAR_CHECK
} from "../constants/actionTypes/sidebar"

const INITIAL_STATE = [
  {
    imgurl: '/assets/images/single-neutral-actions.a8cd97b5.svg',
    name: 'profile',
    check: Boolean(localStorage.getItem('profile')) ? Boolean(localStorage.getItem('profile')) : false,
  },
  {
    imgurl: '/assets/images/monetization-touch-browser.539c61de.svg',
    name: 'income',
    check: Boolean(localStorage.getItem('income')) ? Boolean(localStorage.getItem('income')) : false,
  },
  {
    imgurl: '/assets/images/real-estate-action-house-dollar.3ddb74fc.svg',
    name: 'property',
    check: Boolean(localStorage.getItem('property')) ? Boolean(localStorage.getItem('property')) : false,
  },
  {
    imgurl: '/assets/images/cash-payment-bag-1.b6ab446e.svg',
    name: 'payment',
    check: Boolean(localStorage.getItem('payment')) ? Boolean(localStorage.getItem('payment')) : false,
  },
  {
    imgurl: '/assets/images/accounting-document.9de57dcf.svg',
    name: 'offers',
    check: Boolean(localStorage.getItem('offers')) ? Boolean(localStorage.getItem('offers')) : false,
  },
  {
    imgurl: '/assets/images/common-file-text-info.4b1bedfc.svg',
    name: 'docs',
    check: Boolean(localStorage.getItem('docs')) ? Boolean(localStorage.getItem('docs')) : false,
  },
  {
    imgurl: '/assets/images/saving-bank.e172e9b5.svg',
    name: 'application',
    check: Boolean(localStorage.getItem('application')) ? Boolean(localStorage.getItem('application')) : false,
  },
  {
    imgurl: '/assets/images/award-trophy-star-1.b64d13b0.svg',
    name: 'approval',
    check: Boolean(localStorage.getItem('approval')) ? Boolean(localStorage.getItem('approval')) : false,
  },
]

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIDEBAR_CHECK:
      localStorage.setItem(action.name, 'true');
      const newState = state.map(item => item.name === action.name ? {...item, check: true} : item)
      return [
        ...newState
      ]
    default:
      return state
  }
}

export default reducer;