import * as APIUtil from '../util/wines_api_util';

export const RECEIVE_ALL_WINES = "RECEIVE_ALL_WINES";
export const RECEIVE_ONE_WINE = "RECEIVE_ONE_WINE";

const receiveAllWines = wines => ({
  type: RECEIVE_ALL_WINES,
  wines
});

const receiveOneWine = wine => ({
  type: RECEIVE_ONE_WINE,
  wine
});

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