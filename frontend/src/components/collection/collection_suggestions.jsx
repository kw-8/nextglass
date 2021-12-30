import React from "react";
import { Link } from "react-router-dom";

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
    this.props.updateCollection(updatedCollection)
  }
  render() {
    let icons = ['/rose.png', '/white_wine_2.png', '/four_bottles.jpg']
    return (
      <div className="suggested-wines-container">
        <h2 className="suggestions-title">Suggestions</h2>
        {
          this.props.suggestions.length && this.props.suggestions[0].map(suggestion => (
            <div className="suggested-wine" key={suggestion._id}>
              <div className="suggested-wine-img"><img src={icons[Math.floor(Math.random()*3) % 3]}></img></div>
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