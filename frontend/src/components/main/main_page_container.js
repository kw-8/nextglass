import { connect } from 'react-redux';
import MainPage from './main_page';
import {getCollections} from '../../actions/collection_actions'

const mSTP = state => ({
  currentUser: state.session.user,
  collections: Object.values(state.collections)
})
const mDTP = dispatch => ({
  getCollections: () => dispatch(getCollections())
})

export default connect(mSTP, mDTP)(MainPage)