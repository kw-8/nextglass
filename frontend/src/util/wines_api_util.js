import axios from 'axios';

export const fetchAllWines = () => (
  axios.get("/api/wines")
)

export const fetchOneWine = wineId => (
  axios.get(`/api/wines/${wineId}`)
)

export const fetchTagWines = tagName => (
  axios.get(`/api/wines/tags/${tagName}`)
)

export const searchForWine = query => (
  axios.get(`/api/search/${query}`)
)