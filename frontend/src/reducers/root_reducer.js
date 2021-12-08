import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'
import wines from './wines_reducer'

const RootReducer = combineReducers({
  session,
  wines,
  errors
});

export default RootReducer;