import { connect } from 'react-redux';
import { getCollections, updateCollection, deleteCollection } from '../../actions/collection_actions';
import CollectionIndex from './collection_index';

const mSTP = state => ({
  collections: Object.values(state.collections),
  suggestions: Object.values(state.suggestions)
})

const mDTP = dispatch => ({
  getCollections: () => dispatch(getCollections()),
  updateCollection: collection => dispatch(updateCollection(collection)),
  deleteCollection: collectionId => dispatch(deleteCollection(collectionId))
})

export default connect(mSTP, mDTP)(CollectionIndex);