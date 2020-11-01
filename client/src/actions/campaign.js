import axios from 'axios';
export const FETCH_OPEN_CAMPAIGNS = 'FETCH_OPEN_CAMPAIGNS';
export const FETCH_OPEN_CAMPAIGNS_SUCCESS = 'FETCH_OPEN_CAMPAIGNS_SUCCESS';
export const FETCH_OPEN_CAMPAIGNS_FAILURE = 'FETCH_OPEN_CAMPAIGNS_FAILURE';

export const FETCH_CURRENT_CAMPAIGN = 'FETCH_CURRENT_CAMPAIGN';
export const FETCH_CURRENT_CAMPAIGN_SUCCESS = 'FETCH_CURRENT_CAMPAIGN_SUCCESS';
export const FETCH_CURRENT_CAMPAIGN_FAILURE = 'FETCH_CURRENT_CAMPAIGN_FAILURE';

export const SUBMIT_JOIN_CAMPAIGN = 'SUBMIT_JOIN_CAMPAIGN';
export const SUBMIT_JOIN_CAMPAIGN_SUCCESS = 'SUBMIT_JOIN_CAMPAIGN_SUCCESS';
export const SUBMIT_JOIN_CAMPAIGN_FAILURE = 'SUBMIT_JOIN_CAMPAIGN_FAILURE';

export const APPROVAL_SUCCESS = 'APPROVAL_SUCCESS';
export const APPROVAL_PENDING = 'APPROVAL_PENDING';

const API_SERVER = process.env.REACT_APP_API_SERVER;


export function fetchOpenCampaigns() {
  const request = axios.get(`${API_SERVER}/campaigns`);
  return {
    type: FETCH_OPEN_CAMPAIGNS,
    payload: request
  }
}

export function fetchOpenCampaignsSuccess(response) {
  return {
    type: FETCH_OPEN_CAMPAIGNS_SUCCESS,
    payload: response
  }
}

export function fetchOpenCampaignsFailure(err) {
  return {
    type: FETCH_OPEN_CAMPAIGNS_FAILURE,
    payload: err
  }
}

export function fetchCurrentCampaign(id) {
  const request = axios.get(`${API_SERVER}/campaign?id=${id}`);
  return {
    type: FETCH_CURRENT_CAMPAIGN,
    payload: request
  }  
}

export function fetchCurrentCampaignSuccess(response) {
  return {
    type: FETCH_CURRENT_CAMPAIGN_SUCCESS,
    payload: response
  }
}

export function fetchCurrentCampaignFailure(err) {
  return {
    type: FETCH_CURRENT_CAMPAIGN_FAILURE,
    payload: err
  }
}

export function submitJoinCampaign(payload) {
  const request = axios.post(`${API_SERVER}/join_campaign`, payload);
  return {
    type: SUBMIT_JOIN_CAMPAIGN,
    payload: request
  }
}

export function submitJoinCampaignSuccess(response) {
  return {
    type: SUBMIT_JOIN_CAMPAIGN_SUCCESS,
    payload: response
  }
}

export function submitJoinCampaignFailure(err) {
  return {
    type: SUBMIT_JOIN_CAMPAIGN_FAILURE,
    payload: err
  }
}

export function approvalPending() {
  return {
    type: APPROVAL_PENDING
  }
}

export function approvalSuccess() {
  return {
    type: APPROVAL_SUCCESS,
  }
}