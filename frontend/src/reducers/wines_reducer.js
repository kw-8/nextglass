import { RECEIVE_ALL_WINES, RECEIVE_ONE_WINE} from '../actions/wine_actions'


const WinesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_WINES:
      return Object.assign({}, action.wines.data)
    case RECEIVE_ONE_WINE:
      nextState[action.wine.data._id] = action.wine.data;
      return nextState;
    default:
      return state;
  }
}

export default WinesReducer;