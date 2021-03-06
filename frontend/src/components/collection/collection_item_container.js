import { connect } from 'react-redux';
import {
  getCollection,
  updateCollection
} from '../../actions/collection_actions';
import { fetchOneWine, fetchSpecificWines } from '../../actions/wine_actions';
import CollectionItem from './collection_item';

const mSTP = (state, ownProps) => {
  let collectionId = ownProps.collectionId
  let wines = state.collections[collectionId] ? Object.values(state.wines).filter(wine => state.collections[collectionId].wines.includes(wine._id)) : []
  return ({
    collectionId,
    currentCollection: state.collections[collectionId],
    collections: state.collections,
    wines
  })
}

const mDTP = dispatch => ({
  getCollection: collectionId => dispatch(getCollection(collectionId)),
  updateCollection: collection => dispatch(updateCollection(collection)),
  fetchOneWine: wineId => dispatch(fetchOneWine(wineId)),
  fetchSpecificWines: wineIds => dispatch(fetchSpecificWines(wineIds))
})

export default connect(mSTP, mDTP)(CollectionItem);