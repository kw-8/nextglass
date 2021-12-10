import React from "react";

class SuggestedWines extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const addButton = e.currentTarget;
    addButton.disabled = true
    const updatedCollection = Object.assign({}, this.props.currentCollection)
    updatedCollection.wines.push(addButton.id)
    this.props.updateCollection(updatedCollection)
  }
  render() {
    return (
      <div className="suggested-wines-container">
        {
         this.props.suggestions.length && this.props.suggestions[0].map(suggestion => (
            <div className="suggested-wine">
              <div className="wine-image"></div>
              <h3 className="suggested-wine-title">{suggestion.title}</h3>
              <p className="suggested-wine-description">{suggestion.description}</p>
              <div className="suggested-wine-tag-container">
                {
                  suggestion.tags.map(tag => (
                    <div className="sugested-wine-tag">{tag}</div>
                  ))
                }
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