import axios from 'axios';
export const SET_USER_ACCOUNT = 'SET_USER_ACCOUNT';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';
const API_SERVER = process.env.REACT_APP_API_SERVER;


export function setUserAccount(payload) {
  return {
    type: SET_USER_ACCOUNT,
    payload: payload
  }
}

export function authenticateUser(payload) {
  const request = axios.get(`${API_SERVER}/authenticate?address=${payload.address}`);
  return {
    type: AUTHENTICATE_USER,
    payload: request
  }
}

export function authenticateUserSuccess(response) {
  return {
    type: AUTHENTICATE_USER_SUCCESS,
    payload: response
  }
}

export function authenticateUserFailure(err) {
  return {
    type: AUTHENTICATE_USER_FAILURE,
    payload: err
  }
}