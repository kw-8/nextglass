import React from "react";
import { Link } from "react-router-dom";
import { getCollections } from "../../util/collections_api_util";
import { WineImages } from "../wine_images/wine_images";

class TagIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let { tagName, pageNumber, fetchTagWines, getCollections } = this.props;
    fetchTagWines(tagName, pageNumber)
    getCollections()
  }
  
  // If a link tag is used to navigate from the current tags page, this will force the reload
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.tagName !== this.props.match.params.tagName ||
        prevProps.match.params.pageNumber !== this.props.match.params.pageNumber) {
      window.location.reload();
    }
  }

  handleSubmit(e, wine_id) {
    let selectedCollection = document.getElementById(wine_id)
    const updatedCollection = Object.assign({}, this.props.usersCollections[selectedCollection.value])
    updatedCollection.wines.push(wine_id)
    this.props.updateCollection(updatedCollection);
    e.target.classList.add("hidden")
  }
  
  render() {
    console.log(this.props.pageNumber)
    let { tagName, pageNumber, wines, usersCollections } = this.props
    return (
      <>
      <div className="tag-wines">
        <h2>{tagName}</h2>
        {
          wines.map(wine =>
            <div key={wine._id} className="tag-wine-item">
              <div className="tag-wine-img">
                <WineImages variety={wine.variety}/>
              </div>
              <div className="tag-wine-text">
                <h3 className="tag-wine-title">
                  {wine.title}
                </h3>
                <p className="tag-wine-description">
                  {wine.description}
                </p>
                <div className="tag-wine-tags-container">
                  {
                    wine.tags.map(tag =>
                      this.props.match.params.tagName === tag ?
                      <Link key={tag} to={`/wines/tags/${tag}`} className="matching-tag">
                        {tag}
                      </Link> : <Link key={tag} to={`/wines/tags/${tag}`} className="tag-wine-tag">
                        {tag}
                      </Link>
                    )
                  }
                </div>
              </div>
              <div className="choose-collection">
                <label>Choose a Collection</label>
                <select id={wine._id}>
                  {
                    usersCollections.map((collection, i) => <option value={i}>{collection ? collection.title : " "}</option>)
                  }
                </select>
                <button className="tag-add-button" onClick={(e) => this.handleSubmit(e, wine._id)}>Add to Collection</button>
              </div>
            </div>
          )
        }
      </div>
      <div className="page-index">
        { pageNumber && pageNumber > 1 ? <Link to={`/wines/tags/${tagName}/${pageNumber - 1}`}>❮ prev</Link> : ''}
        { pageNumber == 1 ? <Link to={`/wines/tags/${tagName}`}>❮ prev</Link> : ''}
        { wines.length == 10 ? <Link to={`/wines/tags/${tagName}/${pageNumber ? parseInt(pageNumber)+1 : 1}`}>next ❯</Link> : '' }
      </div>
      </>
    )
  }
}

export default TagIndex;