import { connect } from 'react-redux';
import { getCollection, updateCollection } from '../../actions/collection_actions';
import CollectionSuggestions from './collection_suggestions'

const mSTP = (state, ownProps) => {
  // console.log('col sug state:', state, ownProps)
  return {
    collectionId: ownProps.collectionId,
    suggestions: Object.values(state.suggestions),
    collections: state.collections
  }
}

const mDTP = dispatch => ({
  getCollection: collectionId => dispatch(getCollection(collectionId)),
  updateCollection: collection => dispatch(updateCollection(collection))
})

export default connect(mSTP, mDTP)(CollectionSuggestions);