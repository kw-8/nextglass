import { RECEIVE_COLLECTION } from "../actions/collection_actions";

const SuggestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COLLECTION:
      if (action.collection.data.suggestions) {
        return Object.assign({}, state, { [action.collectionId]: action.collection.data.suggestions });
      } else if (state[action.collectionId]) {
        let nextState = Object.assign({}, state);
        let { _id, wines } = action.collection.data.collection;
        nextState[_id] = state[_id].filter(wine => !wines.includes(wine._id))
        return nextState;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default SuggestionReducer;