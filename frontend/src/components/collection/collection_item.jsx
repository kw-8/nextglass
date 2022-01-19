import React from "react";
import { Link } from "react-router-dom";
import { WineImages } from "../wine_images/wine_images";

class CollectionItem extends React.Component {

  componentDidMount() {
    let { collectionId, collections } = this.props;
    if (collections[collectionId]) {
      this.props.fetchSpecificWines(collections[collectionId].wines)
      // collections[collectionId].wines.forEach(wineId => {
      //   this.props.fetchOneWine(wineId)
      // })
      
    } else {
      this.props.getCollection(collectionId).then(res => {
        this.props.fetchSpecificWines(res.collection.data.collection.wines)
        // res.collection.data.collection.wines.forEach(wineId => {
        //   this.props.fetchOneWine(wineId)
        // })
      })
    }
  }

  handleSubmit(e) {
    const removeButton = e.currentTarget;

    let { collectionId, collections } = this.props;
    const updatedCollection = Object.assign({}, collections[collectionId])
    
    updatedCollection.wines = updatedCollection.wines.filter(el => el !== removeButton.id)
    this.props.updateCollection(updatedCollection)
  }

  render() {
    let { collections, wines, collectionId } = this.props;
    
    if (!collections[collectionId] || wines.length === 0) return (
      <>
        <h2 className="collection-wines-title">Wines in Your Collection</h2>
        <div className="message">
          <p>Add a wine to this collection!</p>
          <p>Recommendations are tailored to the collection based on tags, points, and price.</p>
        </div>
      </>);

    return (
      <div className="collection-wines-container">
        <h2 className="collection-wines-title">Wines in Your Collection</h2>
        {
          wines.map(wine => (
            <div className="collection-wine">
              <div className="collection-wine-img">
                <WineImages variety={wine.variety}></WineImages>
              </div>
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