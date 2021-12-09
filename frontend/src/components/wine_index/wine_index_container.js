import { connect } from 'react-redux';
import { fetchAllWines } from '../../actions/wine_actions';
import WineIndex from './wine_index'

//currentPage is passed in to render the initial 20 wines. currently placeholder for if we can get a basic "load more" working
const mSTP = state => ({
  wines: Object.values(state.wines),
  currentPage: 1
})

const mDTP = dispatch => ({
  fetchAllWines: () => dispatch(fetchAllWines())
})


export default connect(mSTP, mDTP)(WineIndex)