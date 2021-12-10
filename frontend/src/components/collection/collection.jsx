import React from "react";
import { withRouter } from "react-router-dom";
import SuggestedWines from './collection_suggestions';
import CollectionWines from './collection_wines';

class Collection extends React.Component {

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  render() {
    return(
      <div>
        <button onClick={() => console.log(this.props)}>Console log props</button>
        <CollectionWines collection={this.props.collection}/>
        <SuggestedWines suggestions={this.props.suggestion}/>
      </div>
      
    )
  }
}

export default withRouter(Collection);