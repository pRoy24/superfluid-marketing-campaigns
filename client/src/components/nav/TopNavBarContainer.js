import {connect} from 'react-redux';
import TopNavBar from './TopNavBar';


const mapStateToProps = state => {
  return {
     user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNavBar);