import React from "react";

class TagIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let { tagName, fetchTagWines } = this.props;
    fetchTagWines(tagName)
  }

  handleSubmit(e) {
    const addButton = e.currentTarget;
    addButton.disabled = true
    const updatedCollection = Object.assign({}, this.props.currentCollection)
    updatedCollection.wines.push(addButton.id)
    this.props.updateCollection(updatedCollection)
  }

  render() {
    let { wines } = this.props
    return (
      <div className="tag-wines">
        {
          wines.map(wine =>
            <div key={wine._id} className="wine-item">
              <div className="wine-img"></div>
              <div className="wine-text">
                <h3 className="tag-wine-title">
                  {wine.title}
                </h3>
                <p className="tag-wine-description">
                  {wine.description}
                </p>
                <div className="tag-wine-tags-container">
                  {
                    wine.tags.map(tag =>
                      <div key={tag} className="tag-wine-tag">
                        {tag}
                      </div>
                    )
                  }
                </div>
              </div>
              <button id={wine._id} className="add-to-collection" onClick={e => this.handleSubmit(e)}>
                Add to Collection
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

export default TagIndex;