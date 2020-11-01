import {SET_USER_ACCOUNT, AUTHENTICATE_USER_SUCCESS} from '../actions/user';

const initialState = {
  selectedAddress: '',
  selectedNetwork: '',
  profile: {}
}


export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER_ACCOUNT:
      return {...state, selectedAddress: action.payload.address, selectedNetwork: action.payload.network}
    case AUTHENTICATE_USER_SUCCESS:
      console.log(action.payload);
      return {...state, profile: action.payload.user}
    default:
      return state
      
  }
}

