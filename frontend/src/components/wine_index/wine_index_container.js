import { connect } from 'react-redux';
import { fetchAllWines } from '../../actions/wine_actions';
import WineIndex from './wine_index'


const mSTP = state => ({
  wines: Object.values(state.wines)
})

const mDTP = dispatch => ({
  fetchAllWines: () => dispatch(fetchAllWines())  
})

export default connect(mSTP, mDTP)(WineIndex)