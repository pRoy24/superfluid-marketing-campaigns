import {connect} from 'react-redux';
import AppHome from './AppHome';
import {setUserAccount, authenticateUser, authenticateUserSuccess, authenticateUserFailure} from '../../actions/user';

const mapStateToProps = state => {
  return {
     user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAccount: (payload) => {
      dispatch(setUserAccount(payload));
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
)(AppHome);