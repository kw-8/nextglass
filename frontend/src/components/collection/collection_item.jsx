import React from "react";

class CollectionItem extends React.Component {

  componentDidMount() {
    let { collectionId, collections } = this.props;
    if (collections.length === 0) this.props.getCollection(collectionId)

    if (collections[collectionId]) { 
      console.log(collections)
      const wineId = collections[collectionId].wines[0];
      this.props.fetchOneWine(wineId)
    } else {
      this.props.getCollection(collectionId)
    }
    // console.log(wine);
    // console.log(wine1);
  }

  render() {
    let { collections, wines, collectionId } = this.props;
    if (!collections[collectionId] || !wines[collectionId]) return null;
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