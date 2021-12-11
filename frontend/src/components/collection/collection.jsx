import React from "react";
import { withRouter } from "react-router-dom";
import SuggestedWines from './collection_suggestions';
import CollectionWines from './collection_item';

class Collection extends React.Component {

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  render() {
    return(
      <div>
        <CollectionWines 
          collection={this.props.collection} 
          getCollection={this.props.getCollection} 
          fetchOneWine={this.props.fetchOneWine}/>
        <SuggestedWines updateCollection={this.props.updateCollection} currentCollection={this.props.collection[this.props.collection.length - 1]} suggestions={this.props.suggestion}/>
      </div>
      
    )
  }
}

export default withRouter(Collection);