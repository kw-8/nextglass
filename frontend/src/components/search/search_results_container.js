import { connect } from "react-redux";
import { searchForWine } from "../../actions/wine_actions";
import {
  getCollections,
  updateCollection
} from '../../actions/collection_actions';
import SearchResults from './search_results'

const mSTP = (state, ownProps) => ({
  wines: Object.values(state.wines),
  usersCollections: Object.values(state.collections),
  searchQuery: ownProps.match.params.keyword
})

const mDTP = dispatch => ({
  getCollections: () => dispatch(getCollections()),
  searchForWine: query => dispatch(searchForWine(query)),
  updateCollection: collection => dispatch(updateCollection(collection))
})

export default connect(mSTP, mDTP)(SearchResults)