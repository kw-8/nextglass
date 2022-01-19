import React from "react";
import { Link } from "react-router-dom";
import { WineImages } from "../wine_images/wine_images";

class SuggestedWines extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const addButton = e.currentTarget;
    addButton.disabled = true

    const { collectionId, collections } = this.props
    const updatedCollection = Object.assign({}, collections[collectionId])
    updatedCollection.wines.push(addButton.id)
    this.props.updateCollection(updatedCollection).then(res => { this.props.fetchSpecificWines(res.collection.data.collection.wines)})
  }
  render() {
    return (
      <div className="suggested-wines-container">
        <h2 className="suggestions-title">Suggestions</h2>
        {
          this.props.suggestions[0] && this.props.suggestions[0].map(suggestion => (
            <div className="suggested-wine" key={suggestion._id}>
              <div className="suggested-wine-img">
                <WineImages variety={suggestion.variety}></WineImages>
              </div>
              <div className="suggested-wine-text">
                <h3 className="suggested-wine-title">{suggestion.title}</h3>
                <p className="suggested-wine-description">{suggestion.description}</p>
                <div className="suggested-wine-tag-container">
                  {
                    suggestion.tags.map(tag => (
                      <Link key={tag} to={`/wines/tags/${tag}`} className="suggested-wine-tag">{tag}</Link>
                    ))
                  }
                </div>
              </div>
              <button id={suggestion._id} className="wine-index-add-button" onClick={e => this.handleSubmit(e)}>
                Add to Collection
              </button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default SuggestedWines