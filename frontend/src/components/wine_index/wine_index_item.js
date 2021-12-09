import React from 'react';

const WineIndexItem = (props) => (
  <div className="wine-index-item-container" key={props.key}>
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
    <button className="wine-index-add-button">Add to Collection</button>
  </div>
)

export default WineIndexItem