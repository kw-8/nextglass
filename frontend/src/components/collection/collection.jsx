import React from "react";
import { withRouter } from "react-router-dom";
import SuggestedWines from './collection_suggestions';
import CollectionItemContainer from './collection_item_container'

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteCollection = this.handleDeleteCollection.bind(this);
  }

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  handleDeleteCollection(e) {
    e.preventDefault();
    this.props.deleteCollection(this.props.match.params.collectionId);
  }

  render() {
    return(
      <div>
        <button className="delete-collection-btn" onClick={this.handleDeleteCollection}>Delete Collection</button>
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