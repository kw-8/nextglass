import { connect } from "react-redux";
import { fetchTagWines } from "../../actions/wine_actions";
import {
  getCollections,
  updateCollection
} from '../../actions/collection_actions';
import Tag from './tag'

const mSTP = (state, ownProps) => ({
  wines: Object.values(state.wines),
  usersCollections: Object.values(state.collections),
  tagName: ownProps.match.params.tagName
})

const mDTP = dispatch => ({
  getCollections: () => dispatch(getCollections()),
  fetchTagWines: tagName => dispatch(fetchTagWines(tagName)),
  updateCollection: collection => dispatch(updateCollection(collection))
})

export default connect(mSTP, mDTP)(Tag)