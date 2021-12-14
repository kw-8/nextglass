import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  componentDidMount() {
    this.props.getCollections()
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const coll = Object.assign({}, this.state, {user: this.props.currentUser.id}, {wines: []})
    this.props.createCollection(coll)
  }

  displayForm() {
    let newForm = document.getElementById("collection-form-container")
    newForm.classList.add("collection-form-container")
    newForm.classList.remove("hidden")
  }

  closeForm() {
    let newForm = document.getElementById("collection-form-container")
    newForm.classList.add("hidden")
    newForm.classList.remove("collection-form-container")
  }
  
  render() {
    let icons = ['/rose.png', '/white_wine_2.png', '/four_bottles.jpg']
    let curated = ['fruity', 'dry', 'bright', 'complex', 'smooth', 'chewy', 'green', 'spicy']
    return (
      <div className="main-page-contaner">
        <div className="home-page-header">
          <div className="home-page-header-overlay">
            <h1>Find your next glass...</h1>

        <div className="home-collections-container">
          {/* <Link className='home-index-link' to="/wines">View Our Curated Wine List</Link> */}
          <h2>Explore Categories</h2>
          <div className='curated-tag-container'>
            {
              curated.map(tag =>
                <div className='curated-tag'>
                  <Link to={`/wines/tags/${tag}`}>
                    <img src="/four_bottles.jpg" alt={tag} />
                    <p>{tag}</p>
                  </Link>
                </div>
              )
            }
          </div>
          <h2>Your Collections</h2>
          <div id='user-collections'>
            <div className='add-new-collection' onClick={() => this.displayForm()}>Add New Collection</div>
            {
              this.props.collections.map((collection, i) =>
                <div key={collection._id}>
                  <Link to={`/collections/${collection._id}`}>
                    <img src={icons[i%3]}></img>
                    <p>{collection.title}</p>
                  </Link>
                </div>
              )
            }
          </div>
          <div id="collection-form-container" className='hidden'>
            <p className='close-form' onClick={() => this.closeForm()}>X</p>
          <form id="collection-form">
          <h2>Create a new collection</h2>
            <label htmlFor='title'></label>
            <input type='text' id='title' placeholder='Collection Name' onChange={this.update('title')}></input>
            
            <label htmlFor='title'></label>
            <textarea id='description' placeholder='Description' onChange={this.update('description')}></textarea>
            
            <button onClick={this.handleSubmit}>Create</button>
          </form>
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;