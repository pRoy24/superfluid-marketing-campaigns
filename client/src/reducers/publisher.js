import {CREATE_CAMPAIGN_WALLET, CREATE_CAMPAIGN_WALLET_SUCCESS, CREATE_CAMPAIGN_WALLET_FAILURE, GET_ACCOUNT_FLOW,
  GET_ACCOUNT_FLOW_SUCCESS, GET_ACCOUNT_FLOW_FAILURE, GENERATE_FUNDS, GENERATE_FUNDS_SUCCESS, GENERATE_FUNDS_FAILURE,
  SUBMIT_CAMPAIGN_DETAILS, SUBMIT_CAMPAIGN_DETAILS_SUCCESS, SUBMIT_CAMPAIGN_DETAILS_FAILURE
} from '../actions/publisher';

const initialState = {
  accounts: [],
  currentAccount: '',
  newAccountAdding: false,
  generatingFunds: false, 
  currentPublisher: {},
  campaignDetailsSubmitting: false
}


export default function publisherReducer (state = initialState, action) {
    let currentPublisherInState;
  switch (action.type) {
    case CREATE_CAMPAIGN_WALLET:
      return {...state, newAccountAdding: true}
    case CREATE_CAMPAIGN_WALLET_SUCCESS:
      let newAccount = action.payload.account;
      let currentAccounts = state.accounts;
      currentAccounts.push({'address': newAccount});
      return {...state, accounts: currentAccounts, newAccountAdding: false, currentAccount: newAccount}
    case CREATE_CAMPAIGN_WALLET_FAILURE:
      return {...state, newAccountAdding: false};
    case GENERATE_FUNDS:
      return {...state, generatingFunds: true}
    case GENERATE_FUNDS_SUCCESS:
      return {...state, generatingFunds: false}
    case GENERATE_FUNDS_FAILURE:
      return {...state, generatingFunds: false}
    case GET_ACCOUNT_FLOW:
      currentPublisherInState = state.currentPublisher;
      currentPublisherInState.accountFlow = action.payload.data;
      return {...state, currentPublisher: currentPublisherInState}
    case SUBMIT_CAMPAIGN_DETAILS:
      return {...state, campaignDetailsSubmitting: true}
    case SUBMIT_CAMPAIGN_DETAILS_SUCCESS:
      return {...state, campaignDetailsSubmitting: false}
    default:

      return state
      
  }
}
