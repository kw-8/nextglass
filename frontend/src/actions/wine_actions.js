import * as APIUtil from '../util/wines_api_util';

export const RECEIVE_ALL_WINES = "RECEIVE_ALL_WINES";
export const RECEIVE_ONE_WINE = "RECEIVE_ONE_WINE";
export const RECEIVE_TAG_WINES = "RECEIVE_TAG_WINES";
export const RECEIVE_SEARCHED_WINES = "RECEIVE_SEARCHED_WINES";
export const RECEIVE_SPECIFIC_WINES = "RECEIVE_SPECIFIC_WINES";

const receiveAllWines = wines => ({
  type: RECEIVE_ALL_WINES,
  wines
});

const receiveOneWine = wine => ({
  type: RECEIVE_ONE_WINE,
  wine
});

const receiveTagWines = wines => ({
  type: RECEIVE_TAG_WINES,
  wines
})

const receiveSearchedWines = wines => ({
  type: RECEIVE_SEARCHED_WINES,
  wines
})

const receiveSpecificWines = wines => ({
  type: RECEIVE_SPECIFIC_WINES,
  wines
})

export const fetchAllWines = () => dispatch => (
  APIUtil.fetchAllWines()
  .then(wines => dispatch(receiveAllWines(wines)))
  .catch(err => console.log(err))
)
export const fetchOneWine = wineId => dispatch => (
  APIUtil.fetchOneWine(wineId)
  .then(wine => dispatch(receiveOneWine(wine)))
  .catch(err => console.log(err))
)

export const fetchTagWines = (tagName, pageNumber) => dispatch => (
  APIUtil.fetchTagWines(tagName, pageNumber)
  .then(wines => dispatch(receiveTagWines(wines)))
  .catch(err => console.log(err))
)

export const searchForWine = query => dispatch => {
  return (
  APIUtil.searchForWine(query)
  // .then(wines => console.log(wines))
  .then(wines => dispatch(receiveSearchedWines(wines)))
  .catch(err => console.log(err))
)}

export const fetchSpecificWines = wineIds => dispatch => (
  APIUtil.fetchSpecificWines(wineIds)
    .then(wines => dispatch(receiveSpecificWines(wines)))
    .catch(err => console.log(err))
)