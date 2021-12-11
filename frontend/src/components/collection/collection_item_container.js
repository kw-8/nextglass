import { connect } from 'react-redux';
import { getCollection } from '../../actions/collection_actions';
import CollectionItem from './collection_item';

const mSTP = state => {
  return {

  }
}

const mDTP = dispatch => ({
  getCollection: collectionId => dispatch(getCollection(collectionId))
})

export default connect(mSTP, mDTP)(CollectionItem);