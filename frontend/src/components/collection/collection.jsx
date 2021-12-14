import React from "react";
import { withRouter } from "react-router-dom";
import SuggestedWines from './collection_suggestions';
import CollectionItemContainer from './collection_item_container'

class Collection extends React.Component {

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  render() {
    //Creates an array of all wines in the current collection

    // let wineArray = []
    // for (let i = 0; i < this.props.collections.length; i++) {
    //   if (this.props.collections[i]._id === this.props.match.params.collectionId) {
    //     wineArray = [...this.props.collections[i].wines]
    //   }
    // }
    return(
      <div>
        <CollectionItemContainer 
          key={this.props.match.params.collectionId} 
          collectionId={this.props.match.params.collectionId}
          wines={this.props.match.params.wines}
        />
        <br/>
        <SuggestedWines
          updateCollection={this.props.updateCollection}
          currentCollection={this.props.collections[this.props.collections.length - 1]}
          suggestions={this.props.suggestion}
        />
      </div>
      
    )
  }
}

export default withRouter(Collection);