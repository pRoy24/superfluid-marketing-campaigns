import {FETCH_OPEN_CAMPAIGNS, FETCH_OPEN_CAMPAIGNS_SUCCESS, FETCH_OPEN_CAMPAIGNS_FAILURE, FETCH_CURRENT_CAMPAIGN, FETCH_CURRENT_CAMPAIGN_SUCCESS,
  FETCH_CURRENT_CAMPAIGN_FAILURE, SUBMIT_JOIN_CAMPAIGN,SUBMIT_JOIN_CAMPAIGN_SUCCESS, SUBMIT_JOIN_CAMPAIGN_FAILURE, APPROVAL_PENDING,
  APPROVAL_SUCCESS
} from '../actions/campaign';

const initialState = {
  campaignList: [],
  currentCampaign: {},
  joinCampaignSubmitting: false,
  approvalPending: false
}

export default function campaignReducer (state = initialState, action) {

  switch (action.type) {
    case FETCH_OPEN_CAMPAIGNS:
      return {...state}
    case FETCH_OPEN_CAMPAIGNS_SUCCESS:
      return {...state, campaignList: action.payload.campaigns}
    case FETCH_OPEN_CAMPAIGNS_FAILURE:
      return {...state}
    case FETCH_CURRENT_CAMPAIGN:
      return {...state}
    case FETCH_CURRENT_CAMPAIGN_SUCCESS:
      return {...state, currentCampaign: action.payload.campaign}
    case FETCH_CURRENT_CAMPAIGN_FAILURE:
      return {...state}
    case SUBMIT_JOIN_CAMPAIGN:
      return {...state, joinCampaignSubmitting: true}
    case SUBMIT_JOIN_CAMPAIGN_SUCCESS:
      return {...state, joinCampaignSubmitting: false}
    case SUBMIT_JOIN_CAMPAIGN_FAILURE:
      return {...state, joinCampaignSubmitting: false}
    case APPROVAL_PENDING:
      return {...state, approvalPending: true}
    case APPROVAL_SUCCESS:
      return {...state, approvalPending: false}
    default:
      return state;
  }      
}
      