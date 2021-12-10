import { connect } from 'react-redux';
import { getCollection, updateCollection, deleteCollection } from '../../actions/collection_actions';
import Collection from './collection';

const mSTP = (state, ownProps) => {
    console.log(state)

  return {
    collection: Object.values(state.collections),
    // suggestions: Object.values(state.suggestions)
  }
}

const mDTP = dispatch => ({
  getCollection: collectionId => dispatch(getCollection(collectionId)),
  updateCollection: collection => dispatch(updateCollection(collection)),
  deleteCollection: collectionId => dispatch(deleteCollection(collectionId))
})

export default connect(mSTP, mDTP)(Collection);