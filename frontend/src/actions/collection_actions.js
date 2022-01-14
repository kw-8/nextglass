import * as APIUtil from "./../util/collections_api_util"

export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const REMOVE_COLLECTION = "REMOVE_COLLECTION";

export const receiveCollections = collections => ({
  type: RECEIVE_COLLECTIONS,
  collections
})

export const receiveCollection = (collection, collectionId) => ({
  type: RECEIVE_COLLECTION,
  collection,
  collectionId
})

export const removeCollection = collectionId => ({
  type: REMOVE_COLLECTION,
  collectionId
})

export const getCollections = () => dispatch => (
  APIUtil.getCollections()
    .then(collections => dispatch(receiveCollections(collections)))
)

export const getCollection = collectionId => dispatch => {
  return (
  APIUtil.getCollection(collectionId)
    .then(collection => {
      dispatch(receiveCollection(collection, collection.data.collection._id))})
)}

export const createCollection = collection => dispatch => (
  APIUtil.createCollection(collection)
    .then(collection => dispatch(receiveCollection(collection, collection.data.collection._id)))
)

export const updateCollection = collection => dispatch => {
  return (
  APIUtil.updateCollection(collection)
    .then(collection => dispatch(receiveCollection(collection, collection.data._id)))
)}

export const deleteCollection = collectionId => dispatch => (
  APIUtil.deleteCollection(collectionId)
    .then(collection => dispatch(removeCollection(collection.data._id)))
)