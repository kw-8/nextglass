import { RECEIVE_ALL_WINES, RECEIVE_ONE_WINE } from '../actions/wine_actions'


const WinesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_WINES:
      return Object.assign({}, state, action.wines.data)
    case RECEIVE_ONE_WINE:
      return Object.assign({}, state, action.wine.data)
    default:
      return state;
  }
}

export default WinesReducer;