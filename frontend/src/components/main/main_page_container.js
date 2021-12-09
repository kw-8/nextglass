import { connect } from 'react-redux';
import MainPage from './main_page';

const mSTP = state => ({
  currentUser: state.session.user
})

export default connect(mSTP)(MainPage)