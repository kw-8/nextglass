import React from "react";
import { withRouter } from "react-router-dom";
import SuggestedWines from './collection_suggestions';
import CollectionItemContainer from './collection_item_container'

class Collection extends React.Component {

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  render() {
    // debugger
    return(
      <div>
        <CollectionItemContainer key={this.props.match.params.collectionId} collectionId={this.props.match.params.collectionId}/>
        <SuggestedWines
          updateCollection={this.props.updateCollection}
          currentCollection={this.props.collections[this.props.collections.length - 1]}
          suggestions={this.props.suggestion}/>
      </div>
      
    )
  }
}

export default withRouter(Collection);