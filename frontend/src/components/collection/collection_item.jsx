import React from "react";
import { Link } from "react-router-dom";

class CollectionItem extends React.Component {

  componentDidMount() {
    let { collectionId, collections } = this.props;
    if (collections[collectionId]) {
      collections[collectionId].wines.forEach(wineId => {
        this.props.fetchOneWine(wineId)
      })
      
    } else {
      this.props.getCollection(collectionId).then(res => {
        res.collection.data.collection.wines.forEach(wineId => {
          this.props.fetchOneWine(wineId)
        })
      })
    }
  }

  handleSubmit(e) {
    const removeButton = e.currentTarget;
    removeButton.disabled = true

    let { collectionId, collections } = this.props;
    const updatedCollection = Object.assign({}, collections[collectionId])
    
    updatedCollection.wines = updatedCollection.wines.filter(el => el !== removeButton.id)
    this.props.updateCollection(updatedCollection)
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // console.log(this.props, prevProps)
    if (this.props.wines.length !== prevProps.wines.length) {
      this.props.getCollection(this.props.collectionId);
    }
  }

  render() {
    let { collections, wines, collectionId } = this.props;
    
    if (!collections[collectionId] || wines.length === 0) return (
      <>
        <h2 className="collection-wines-title">Wines in Your Collection</h2>
        <div className="message">
          <p>Add a wine to this collection!</p>
          <p>Recommendations tailored to collection based on tags, points, and price.</p>
        </div>
      </>);

    let icons = ['/rose.png', '/white_wine_2.png', '/four_bottles.jpg']

    return (
      <div className="collection-wines-container">
        <h2 className="collection-wines-title">Wines in Your Collection</h2>
        {
          wines.map(wine => (
            <div className="collection-wine">
              <div className="collection-wine-img"><img src={icons[Math.floor(Math.random() * 3) % 3]}></img></div>
              <div className="collection-wine-details" key={wine.id}>
                <h3 className="collection-wine-title">{wine.title}</h3>
                <p className="collection-wine-description">{wine.description}</p>
                <div className="collection-wine-tag-container">
                  {
                  wine.tags.map(tag => (
                    <Link to={`/wines/tags/${tag}`} className="collection-wine-tag">{tag} </Link>
                  ))
                  }
                </div>
              </div>
              <button id={wine._id} className="wine-index-remove-button" onClick={e => this.handleSubmit(e)}>
                Remove from Collection
              </button>
            </div>
          ))
        }
      </div>
    )
  }

}

export default CollectionItem;