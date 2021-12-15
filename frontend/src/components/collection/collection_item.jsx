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

  render() {
    let { collections, wines, collectionId } = this.props;
    // if (!collections[collectionId] || !wines[collectionId]) return null;
    if (!collections[collectionId] || wines.length === 0) return (<img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/be585d49104437.58ab53277e681.gif"></img>);

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
                  <Link to={`/wines/tags/${tag}`} className="wine-tag">{tag} </Link>
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