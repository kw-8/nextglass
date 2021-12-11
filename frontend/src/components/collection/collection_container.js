import { connect } from 'react-redux';
import { getCollection, updateCollection, deleteCollection } from '../../actions/collection_actions';
import { fetchOneWine } from '../../actions/wine_actions';
import Collection from './collection';

const mSTP = (state, ownProps) => {
  return {
    // collectionId: ownProps.match.params.collectionId,
    suggestion: Object.values(state.suggestions),
    collections: Object.values(state.collections)
    // suggestions: Object.values(state.suggestions)
  }
}

const mDTP = dispatch => ({
  getCollection: collectionId => dispatch(getCollection(collectionId)),
  updateCollection: collection => dispatch(updateCollection(collection)),
  deleteCollection: collectionId => dispatch(deleteCollection(collectionId)),
  fetchOneWine: wineId => dispatch(fetchOneWine(wineId))
})

export default connect(mSTP, mDTP)(Collection);