import { connect } from 'react-redux';
import { searchForWine } from '../../util/wines_api_util';

import Search from './search';

const mapStateToProps = state => ({
  slug: "",
  results: []
});

const mDTP = dispatch => ({
  
});

export default connect(mapStateToProps)(Search);