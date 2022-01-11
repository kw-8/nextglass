import {
  RECEIVE_ALL_WINES,
  RECEIVE_ONE_WINE,
  RECEIVE_TAG_WINES,
  RECEIVE_SEARCHED_WINES,
  RECEIVE_SPECIFIC_WINES
} from '../actions/wine_actions'


const WinesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_WINES:
      return Object.assign({}, action.wines.data)
    case RECEIVE_ONE_WINE:
      nextState[action.wine.data._id] = action.wine.data;
      return nextState;
    case RECEIVE_TAG_WINES:
      return Object.assign({}, action.wines.data)
    case RECEIVE_SEARCHED_WINES:
      return Object.assign({}, action.wines.data)
    case RECEIVE_SPECIFIC_WINES:
      action.wines.data.forEach(wine =>
        {nextState[wine._id] = wine});
      return nextState;
    default:
      return state;
  }
}

export default WinesReducer;