import React from 'react';

const WineIndexItem = (props) => (
  <div className="wine-index-item-container">
    <div className="wine-image">placeholder for image</div>
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
)

export default WineIndexItem