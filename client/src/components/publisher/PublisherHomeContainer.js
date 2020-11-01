//const SuperfluidSDK = require("@superfluid-finance/ethereum-contracts");
import {createPublisherIndex, createPublisherIndexSuccess, createPublisherIndexFailure,
  createCampaignWallet, createCampaignWalletSuccess, createCampaignWalletFailure,
  generateFunds, generateFundsSuccess, generateFundsFailure, getAccountFlow, getAccountFlowSuccess, getAccountFlowFailure,
  submitCampaignDetails, submitCampaignDetailsSuccess, submitCampaignDetailsFailure
} from '../../actions/publisher';
import {setUserAccount, authenticateUser, authenticateUserSuccess, authenticateUserFailure} from '../../actions/user';

import {connect} from 'react-redux';
import PublisherHome from './PublisherHome';


const mapStateToProps = state => {
  return {
     user: state.user,
     publisher: state.publisher
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setupPublisher: function(payload) {
      dispatch(createPublisherIndex(payload)).then(function(response){
        dispatch(createPublisherIndexSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(createPublisherIndexFailure(err));
      })
    },
    createCampaignWallet: function(payload) {
      dispatch(createCampaignWallet(payload)).then(function(response){
        dispatch(createCampaignWalletSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(createCampaignWalletFailure(err));
      })
    },
    generateFunds: function(payload) {
      dispatch(generateFunds(payload)).then(function(response){
        dispatch(generateFundsSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(generateFundsFailure(err));
      })
    },
    getAccountFlow: function(id) {
      dispatch(getAccountFlow(id)).then(function(response){
        dispatch(getAccountFlowSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(getAccountFlowFailure(err));
      })
    },
    submitCampaignDetails: function(payload) {
      dispatch(submitCampaignDetails(payload)).then(function(response){
        dispatch(submitCampaignDetailsSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(submitCampaignDetailsFailure(err));
      })
    },
    authenticateUser: (payload) => {
      dispatch(authenticateUser(payload)).then(function(response){
        dispatch(authenticateUserSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(authenticateUserFailure(err));
      })
    }    
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PublisherHome);
