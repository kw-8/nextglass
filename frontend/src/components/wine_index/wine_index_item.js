import React from 'react';
import { updateCollection } from '../../util/collections_api_util';

class WineIndexItem extends React.Component {

  render() {
    return (
      <div className="wine-index-item-container">
        <div className="wine-image"></div>
        <div className="wine-details-container">
          <h4 className="wine-title">{this.props.title}</h4>
          <p className="wine-description">{this.props.description}</p>
          <div className="wine-tag-container">
            {
              this.props.tags.map(tag => (
                <div className="wine-tag">{tag}</div>
              ))
            }
          </div>
        </div>
        {/* conditionally render button if a wine is not included in the collection. does not work for empty collections */}
        {/*  !Object.values(this.props.usersCollections[0].wines).includes(this.props.id) && <button className="wine-index-add-button">Add to Collection</button> */}
        <button className="wine-index-add-button" onClick={() => {
          const updatedCollection = Object.assign({}, this.props.usersCollections[0])
          updatedCollection.wines.push(this.props.id)
          this.props.updateCollection(updatedCollection)
          }}>Add to Collection</button> 
      </div>
    )
  }
}

export default WineIndexItem