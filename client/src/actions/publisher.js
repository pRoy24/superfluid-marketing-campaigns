import axios from 'axios';

export const CREATE_PUBLISHER_INDEX = 'CREATE_PUBLISHER_INDEX';
export const CREATE_PUBLISHER_INDEX_SUCCESS = 'CREATE_PUBLISHER_INDEX_SUCCESS';
export const CREATE_PUBLISHER_INDEX_FAILURE = 'CREATE_PUBLISHER_INDEX_FAILURE';


export const CREATE_CAMPAIGN_WALLET = 'CREATE_CAMPAIGN_WALLET';
export const CREATE_CAMPAIGN_WALLET_SUCCESS = 'CREATE_CAMPAIGN_WALLET_SUCCESS';
export const CREATE_CAMPAIGN_WALLET_FAILURE = 'CREATE_CAMPAIGN_WALLET_FAILURE';

export const GENERATE_FUNDS = 'GENERATE_FUNDS';
export const GENERATE_FUNDS_SUCCESS = 'GENERATE_FUNDS_SUCCESS';
export const GENERATE_FUNDS_FAILURE = 'GENERATE_FUNDS_FAILURE';

export const GET_ACCOUNT_FLOW = 'GET_ACCOUNT_FLOW';
export const GET_ACCOUNT_FLOW_SUCCESS = 'GET_ACCOUNT_FLOW_SUCCESS';
export const GET_ACCOUNT_FLOW_FAILURE = 'GET_ACCOUNT_FLOW_FAILURE';

export const SUBMIT_CAMPAIGN_DETAILS = 'SUBMIT_CAMPAIGN_DETAILS';
export const SUBMIT_CAMPAIGN_DETAILS_SUCCESS = 'SUBMIT_CAMPAIGN_DETAILS_SUCCESS';
export const SUBMIT_CAMPAIGN_DETAILS_FAILURE = 'SUBMIT_CAMPAIGN_DETAILS_FAILURE';

const API_SERVER = process.env.REACT_APP_API_SERVER;

export function generateFunds(payload) {
  const request = axios.post(`${API_SERVER}/generate_funds`, payload);  
  return {
    type: GENERATE_FUNDS,
    payload: request
  }
}

export function generateFundsSuccess(response) {
  return {
    type: GENERATE_FUNDS_SUCCESS,
    payload: response
  }
}

export function generateFundsFailure(err) {
  return {
    type: GENERATE_FUNDS_FAILURE,
    payload: err
  }
}

export function createPublisherIndex(payload) {
  
  const request = axios.post(`${API_SERVER}/publisher`, payload);
  
  return {
    type: CREATE_PUBLISHER_INDEX,
    payload: request
  }
}

export function createPublisherIndexSuccess(payload) {
  return {
    type: CREATE_PUBLISHER_INDEX_SUCCESS,
    payload: payload
  }
}

export function createPublisherIndexFailure(err) {
  return {
    type: CREATE_PUBLISHER_INDEX_FAILURE,
    payload: err
  }
}

export function createCampaignWallet(payload) {
  const request = axios.post(`${API_SERVER}/publisher_wallet`, payload);
  
  return {
    type: CREATE_CAMPAIGN_WALLET,
    payload: request
  }
}

export function createCampaignWalletSuccess(response) {
  return {
    type: CREATE_CAMPAIGN_WALLET_SUCCESS,
    payload: response
  }
}

export function createCampaignWalletFailure(err) {
  return {
    type: CREATE_CAMPAIGN_WALLET_FAILURE,
    payload: err
  }
}

export function getAccountFlow(id) {
  const request = axios.get(`${API_SERVER}/account_flow?id=${id}`)
  return {
    type: GET_ACCOUNT_FLOW,
    payload: request
  }
}

export function getAccountFlowSuccess(response) {
  return {
    type: GET_ACCOUNT_FLOW_SUCCESS,
    payload: response
  }
}

export function getAccountFlowFailure(err) {
  return {
    type: GET_ACCOUNT_FLOW_FAILURE,
    payload: err
  } 
}

export function submitCampaignDetails(payload) {
  const request = axios.post(`${API_SERVER}/campaign_details`, payload);
  return {
    type: SUBMIT_CAMPAIGN_DETAILS,
    payload: request
  }
}

export function submitCampaignDetailsSuccess(response) {
  return {
    type: SUBMIT_CAMPAIGN_DETAILS_SUCCESS,
    payload: response
  }
}

export function submitCampaignDetailsFailure(err) {
  return {
    type: SUBMIT_CAMPAIGN_DETAILS_SUCCESS,
    payload: err
  }
}
