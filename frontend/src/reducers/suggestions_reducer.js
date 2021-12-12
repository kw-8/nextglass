import { RECEIVE_COLLECTION } from "../actions/collection_actions";

const SuggestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COLLECTION:
      return Object.assign({}, state, { [action.collectionId]: action.collection.data.suggestions });
    default:
      return state;
  }
}

export default SuggestionReducer;