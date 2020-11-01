import { combineReducers } from 'redux';
import userReducer from './user';
import publisherReducer from './publisher';
import campaignReducer from './campaign';

const rootReducer = combineReducers({
  user: userReducer,
  publisher: publisherReducer,
  campaign: campaignReducer
})

export default rootReducer