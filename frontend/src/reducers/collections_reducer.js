import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION, REMOVE_COLLECTION } from "../actions/collection_actions";

const CollectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_COLLECTIONS:
      action.collections.data.forEach(collection => {
        nextState[collection._id] = collection
      });
      return nextState;
    case RECEIVE_COLLECTION:
      nextState[action.collectionId] = action.collection.data.collection;
      return nextState;
    case REMOVE_COLLECTION:
      delete nextState[action.collectionId];
      return nextState;
    default:
      return state;
  }
}

export default CollectionsReducer;