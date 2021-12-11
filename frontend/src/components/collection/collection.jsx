import React from "react";
import { withRouter } from "react-router-dom";
import SuggestedWines from './collection_suggestions';
import CollectionWines from './collection_item';

class Collection extends React.Component {

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  render() {
    // debugger
    return(
      <div>
        <CollectionWines 
          collectionId={this.props.collectionId}
          collections={this.props.collections} 
          getCollection={this.props.getCollection} 
          fetchOneWine={this.props.fetchOneWine}/>
        <SuggestedWines
          updateCollection={this.props.updateCollection}
          currentCollection={this.props.collections[this.props.collections.length - 1]}
          suggestions={this.props.suggestion}/>
      </div>
      
    )
  }
}

export default withRouter(Collection);