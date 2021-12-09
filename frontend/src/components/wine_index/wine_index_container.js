import { connect } from 'react-redux';
import { fetchAllWines } from '../../actions/wine_actions';
import WineIndex from './wine_index'


const mSTP = state => ({
  wines: Object.values(state.wines),
  currentPage: 1,
  scrolling: {
    error: false,
    hasMore: true,
    isLoading: false,
  }
})

const mDTP = dispatch => ({
  fetchAllWines: () => dispatch(fetchAllWines())
})


export default connect(mSTP, mDTP)(WineIndex)