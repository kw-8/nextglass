import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION, REMOVE_COLLECTION } from "../actions/collection_actions";

const CollectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_COLLECTIONS:
      return action.collections.data;
    case RECEIVE_COLLECTION:
      console.log(action); 
      return Object.assign({}, { collection: action.collection.data.collection });
    case REMOVE_COLLECTION:
      delete nextState[action.collectionId];
      return nextState;
    default:
      return state;
  }
}

export default CollectionsReducer;