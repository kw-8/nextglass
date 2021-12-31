import axios from 'axios';

// get all collections
export const getCollections = () => {
  return axios.get('/api/collections')
};

// get collection by id
export const getCollection = collectionId => {
  return axios.get(`/api/collections/${collectionId}`)
};

// get user's collections
// export const getUserCollections = userId => {
//   return axios.get(`/api/collections/users/${userId}`)
// }

// create new collection
export const createCollection = collection => {
  return axios.post('/api/collections/', collection)
}

// update collection
export const updateCollection = collection => {
  return axios.patch(`/api/collections/${collection._id}`, collection)
}

export const deleteCollection = collectionId => {
  return axios.delete(`/api/collections/${collectionId}`)
}

