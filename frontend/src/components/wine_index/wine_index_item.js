import React from 'react';
import { updateCollection } from '../../util/collections_api_util';

class WineIndexItem extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    let selectedCollection = document.getElementById(this.props.id)
    const updatedCollection = Object.assign({}, this.props.usersCollections[selectedCollection.value])
    updatedCollection.wines.push(this.props.id)
    this.props.updateCollection(updatedCollection)
  }

  render() {
    const collectionsArray = Object.values(this.props.usersCollections)
    console.log(collectionsArray)
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
        <label>Choose a Collection
        <select id={this.props.id}>
          {
            collectionsArray.map((collection, i) => <option value={i}>{collection.title}</option>)
          }
        </select> 
        </label>
        <button className="wine-index-add-button" onClick={() => this.handleSubmit()}>Add to Collection</button>
      </div>
    )
  }
}

export default WineIndexItem