import React from 'react';
import { Link } from 'react-router-dom';

class WineIndexItem extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.collectionsArray = []
  }

  handleSubmit(e) {
    let selectedWine = document.getElementById(this.props.id)
    const selectedCollection = Object.assign({}, this.props.usersCollections[selectedWine.value])
    selectedCollection.wines.push(this.props.id)
    this.props.updateCollection(selectedCollection)
    e.target.classList.add("hidden")
  }

  render() {
    this.collectionsArray.length === 0 ? this.collectionsArray = Object.values(this.props.usersCollections) : this.collectionsArray = this.collectionsArray;
    return (
      <div className="wine-index-item-container">
        <div className="wine-image"></div>
        <div className="wine-details-container">
          <h4 className="wine-title">{this.props.title}</h4>
          <p className="wine-description">{this.props.description}</p>
          <div className="wine-tag-container">
            {
              this.props.tags.map(tag => (
                <Link className="wine-tag" to={{pathname: `/wines/tags/${tag}`, state: {wines: []}}}>{tag}</Link>
              ))
            }
          </div>
        </div>
        <div className="collection-adder">
          <label>Choose a Collection</label>
          <select id={this.props.id}>
            {
              this.collectionsArray.map((collection, i) => <option value={i}>{collection ? collection.title : " "}</option>)
            }
          </select> 
          <button className="wine-index-add-button" onClick={e => this.handleSubmit(e)}>Add to Collection</button>
        </div>
      </div>
    )
  }
}

export default WineIndexItem