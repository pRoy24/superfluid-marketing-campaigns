import {connect} from 'react-redux';
import MarketerHome from './MarketerHome';
import {setUserAccount, authenticateUser, authenticateUserSuccess, authenticateUserFailure} from '../../actions/user';
import {fetchOpenCampaigns, fetchOpenCampaignsSuccess, fetchOpenCampaignsFailure, fetchCurrentCampaign, 
  fetchCurrentCampaignSuccess, fetchCurrentCampaignFailure, submitJoinCampaign, submitJoinCampaignSuccess, submitJoinCampaignFailure,
  approvalSuccess, approvalPending
} from '../../actions/campaign';
const web3 = window.web3;
const SuperfluidSDK = require("@superfluid-finance/ethereum-contracts");
const sf = new SuperfluidSDK.Framework({version: "preview-20200928", web3Provider: web3.currentProvider, chainId: 5 });
let daix;

    

const mapStateToProps = state => {
  return {
     user: state.user,
     campaign: state.campaign
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOpenCampaigns: () => {
      dispatch(fetchOpenCampaigns()).then(function(response){
        dispatch(fetchOpenCampaignsSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(fetchOpenCampaignsFailure(err));
      })
    },
    
    fetchCurrentCampaign: (id) => {
      dispatch(fetchCurrentCampaign(id)).then(function(response){
        dispatch(fetchCurrentCampaignSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(fetchCurrentCampaignFailure(err));
      })
    },
    
    approveSubscription: (publisher, marketer) => {
    dispatch(approvalPending());
    

    
sf.initialize().then(function(response){
  sf.resolver.get("tokens.fDAI").then(function(daiAddress){
    sf.contracts.TestToken.at(daiAddress).then(function(dai){
      sf.getERC20Wrapper(dai).then(function(daixWrapper){
        sf.contracts.ISuperToken.at(daixWrapper.wrapperAddress).then(function(daixResponse){
          daix = daixResponse;
    sf.host.callAgreement(sf.agreements.ida.address, sf.agreements.ida.contract.methods.approveSubscription(daix.address, publisher, 42, "0x").encodeABI(), { from: marketer })
    .then(function(approvalResponse){
      dispatch(approvalSuccess());
    })
        });
      });
    });
  });
});    
    },
    
    submitJoinCampaign: (payload) => {
      dispatch(submitJoinCampaign(payload)).then(function(response){
        dispatch(submitJoinCampaignSuccess(response.payload.data));
      }).catch(function(err){
        dispatch(submitJoinCampaignFailure(err));
      })
    }
    

  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketerHome);