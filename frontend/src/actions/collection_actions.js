import * as APIUtil from "./../util/collections_api_util"

export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const REMOVE_COLLECTION = "REMOVE_COLLECTION";

export const receiveCollections = collections => ({
  type: RECEIVE_COLLECTIONS,
  collections
})

export const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection
})

export const removeCollection = collectionId => ({
  type: REMOVE_COLLECTION,
  collectionId
})

export const getCollections = () => dispatch => (
  APIUtil.getCollections()
    .then(collections => dispatch(receiveCollections(collections)))
)

export const getCollection = collectionId => dispatch => (
  APIUtil.getCollection(collectionId)
    .then(collection => dispatch(receiveCollection(collection)))
)

export const createCollection = collection => dispatch => (
  APIUtil.createCollection(collection)
    .then(collection => dispatch(receiveCollection(collection)))
)

export const updateCollection = collection => dispatch => (
  APIUtil.updateCollection(collection)
    .then(collection => dispatch(receiveCollection(collection)))
)

export const deleteCollection = collectionId => dispatch => (
  APIUtil.deleteCollection(collectionId)
    .then(collectionId => dispatch(removeCollection(collectionId)))
)