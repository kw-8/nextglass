import React from "react";

class CollectionItem extends React.Component {

  componentDidMount() {
    let { collectionId, collections } = this.props;
    if (collections.length === 0) this.props.getCollection(collectionId)

    if (collections[collectionId]) { 
      console.log(collections)
      const wineId = collections[collectionId].wines[0];
      this.props.fetchOneWine(wineId)
    }
    // console.log(wine);
    // console.log(wine1);
  }

render() {
  debugger
  if (this.props.collections[this.props.collectionId]) return null;
  return (
    <div className="collection-wines-container">
      {
      this.props.collections[0].wines
      }
    </div>
  )
}

}

export default CollectionItem;