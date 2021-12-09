import React from 'react';
import { updateCollection } from '../../util/collections_api_util';

const WineIndexItem = (props) => (
  <div className="wine-index-item-container">
    <div className="wine-image"></div>
    <div className="wine-details-container">
      <h4 className="wine-title">{props.title}</h4>
      <p className="wine-description">{props.description}</p>
      <div className="wine-tag-container">
        {
          props.tags.map(tag => (
            <div className="wine-tag">{tag}</div>
          ))
        }
      </div>
    </div>
    {/* conditionally render button if a wine is not included in the collection. does not work for empty collections */}
    {/*  !Object.values(props.usersCollections[0].wines).includes(props.id) && <button className="wine-index-add-button">Add to Collection</button> */}
    <button className="wine-index-add-button" onClick={() => {
      const updatedCollection = Object.assign({}, props.usersCollections[0])
      updatedCollection.wines.push(props.id)
      console.log(updatedCollection)
      props.updateCollection(updatedCollection)
      }}>Add to Collection</button> 
  </div>
)

export default WineIndexItem