import axios from 'axios';

export const fetchAllWines = () => (
  axios.get("/api/wines")
)

export const fetchOneWine = wineId => (
  axios.get(`/api/wines/${wineId}`)
)

export const fetchTagWines = (tagName, pageNumber) => {
  if (pageNumber) {
    return axios.get(`/api/wines/tags/${tagName}/${pageNumber}`)
  } else {
    return axios.get(`/api/wines/tags/${tagName}`)
  }
}

export const searchForWine = query => (
  axios.get(`/api/wines/search/${query}`)
)

export const fetchSpecificWines = wineIds => (
  axios.get(`/api/wines/specific/${wineIds.join('-')}`)
)