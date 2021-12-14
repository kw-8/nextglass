import React from "react";

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

  render() {

    let { collections, wines, collectionId } = this.props;
    // if (!collections[collectionId] || !wines[collectionId]) return null;
    if (!collections[collectionId] || wines.length === 0) return null;

    return (
      <div className="collection-wines-container">
        <h2 className="collection-wines-title">Wines in Your Collection</h2>
        {
          Object.keys(wines).map(wine => (
            <div className="wine-details" key={wine.id}>
              <h3 className="wine-title">{wines[wine].title}</h3>
              <p className="wine-description">{wines[wine].description}</p>
              <div className="wine-tags-container">
                {
                wines[wine].tags.map(tag => (
                  <div className="wine-tag">{tag} </div>
                ))
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  }

}

export default CollectionItem;