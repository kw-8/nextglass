import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION, REMOVE_COLLECTION } from "../actions/collection_actions";

const CollectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      nextState[action.collection.id] = action.collection;
      return nextState;
    case REMOVE_COLLECTION:
      delete nextState[action.collectionId];
      return nextState;
    default:
      return state;
  }
}

export default CollectionsReducer;