import { connect } from 'react-redux';
import { getCollection } from '../../actions/collection_actions';
import { fetchOneWine } from '../../actions/wine_actions';
import CollectionItem from './collection_item';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    collectionId: ownProps.match.params.collectionId,
    collections: state.collections
  }
}

const mDTP = dispatch => ({
  getCollection: collectionId => dispatch(getCollection(collectionId)),
  fetchOneWine: wineId => dispatch(fetchOneWine(wineId))
})

export default connect(mSTP, mDTP)(CollectionItem);