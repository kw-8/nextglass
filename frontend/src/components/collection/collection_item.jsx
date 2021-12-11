import React from "react";

class CollectionItem extends React.Component {

  componentDidMount() {
    if (this.props.collection.length === 0) this.props.getCollection(this.props.collectionId)
    console.log(this.props.collection)

    if (this.props.collection.length !== 0) { 
      console.log(this.props.collection)
      const wine = this.props.collection[0].wines[0];
      this.props.fetchOneWine(wine)
    }
    // console.log(wine);
    // console.log(wine1);
  }

render() {
  if (this.props.collection.length === 0) return null;
  return (
    <div className="collection-wines-container">
      {
      this.props.collection[0].wines
      }
    </div>
  )
}

}

export default CollectionItem;