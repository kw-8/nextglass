import { connect } from 'react-redux';
import { getCollection } from '../../actions/collection_actions';
import { fetchOneWine } from '../../actions/wine_actions';
import CollectionItem from './collection_item';

const mSTP = (state, ownProps) => {
  let collectionId = ownProps.collectionId
  let wines = state.collections[collectionId] ? Object.values(state.wines).filter(wine => state.collections[collectionId].wines.includes(wine._id)) : []
  return ({
    collectionId,
    collections: state.collections,
    wines
  })
}

const mDTP = dispatch => ({
  getCollection: collectionId => dispatch(getCollection(collectionId)),
  fetchOneWine: wineId => dispatch(fetchOneWine(wineId))
})

export default connect(mSTP, mDTP)(CollectionItem);