import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'
import wines from './wines_reducer'
import collections from './collections_reducer'

const RootReducer = combineReducers({
  session,
  wines,
  collections,
  errors
});

export default RootReducer;