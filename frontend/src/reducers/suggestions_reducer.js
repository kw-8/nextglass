import { RECEIVE_COLLECTION } from "../actions/collection_actions";

const SuggestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COLLECTION:
      console.log(action); 
      return Object.assign({}, state, { suggestions: action.collection.data.suggestions });
    default:
      return state;
  }
}

export default SuggestionReducer;