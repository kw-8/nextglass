import React from "react";

class CollectionItem extends React.Component {

  componentDidMount() {
    let { collectionId, collections } = this.props;
    // debugger
    if (collections[collectionId]) {
      collections[collectionId].wines.forEach(wineId => {
        this.props.fetchOneWine(wineId)
      })
      
    } else {
      // debugger
      this.props.getCollection(collectionId).then(res => {
        // console.log(res.collection.data.collection.wines, collectionId, this.props)
        res.collection.data.collection.wines.forEach(wineId => {
          // console.log(wineId)
          this.props.fetchOneWine(wineId)
        })
      })
    }
  }

  render() {
    let { collections, wines, collectionId } = this.props;
    // debugger
    if (!collections[collectionId] || !wines[collectionId]) return null;
    // debugger
    return (
      <div className="collection-wines-container">
        {
          collections[collectionId].wines
        }
      </div>
    )
  }

}

export default CollectionItem;