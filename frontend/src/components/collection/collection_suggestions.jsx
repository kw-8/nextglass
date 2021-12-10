import React from "react";

class SuggestedWines extends React.Component {


render() {
  console.log(this.props)
  return (
    <div className="suggested-wines-container">
      {
        this.props.suggestions[0].map(suggestion => (
          <div className="suggested-wine">
            <h3 className="suggested-wine-title">{suggestion.title}</h3>
            <p className="suggested-wine-description">{suggestion.description}</p>
            <div className="suggested-wine-tag-container">
            {
              suggestion.tags.map(tag => (
                <div className="sugested-wine-tag">{tag}</div>
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

export default SuggestedWines