import React from "react";
import { Link } from "react-router-dom";

class TagIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let { tagName, fetchTagWines } = this.props;
    fetchTagWines(tagName)
  }

  // If a link tag is used to navigate from the current tags page, this will force the reload
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.tagName !== this.props.match.params.tagName) {
      window.location.reload();
    }
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
                      <Link key={tag} to={`/wines/tags/${tag}`} className="tag-wine-tag">
                        {tag}
                      </Link>
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