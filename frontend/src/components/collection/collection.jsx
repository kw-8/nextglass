import React from "react";
import { withRouter } from "react-router-dom";
import SuggestedWinesContainer from './collection_suggestions_container';
import CollectionItemContainer from './collection_item_container';
import { Redirect } from "react-router-dom";

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteCollection = this.handleDeleteCollection.bind(this);
    this.amIDeleted = <div></div>
  }

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  handleDeleteCollection(e) {
    e.preventDefault();
    this.props.deleteCollection(this.props.match.params.collectionId);
    this.amIDeleted = <Redirect to="/" />
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
        <SuggestedWinesContainer
          collectionId={this.props.match.params.collectionId}
        />
        {this.amIDeleted}
      </div>
      
    )
  }
}

export default withRouter(Collection);