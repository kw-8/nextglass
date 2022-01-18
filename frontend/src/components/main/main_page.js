import React from 'react';
import { Link } from 'react-router-dom'
import { MainSearchBar } from '../search/main_search_bar'

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

  //add to collection, close and reset form
  handleSubmit(e) {
    e.preventDefault();
    const coll = Object.assign({}, this.state, {user: this.props.currentUser.id}, {wines: []})
    this.props.createCollection(coll).then(this.props.getCollections()).then(this.closeForm())
    let title = document.getElementById("title")
    let description = document.getElementById("description")
    title.value = ""
    description.value = ""
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
    let tag_icons = [
      '/grapes/black_grapes_1.jpg',
      '/grapes/black_grapes_2.jpg',
      '/grapes/grapes_1.jpg',
      '/grapes/red_grapes_1.jpg',
      '/grapes/red_grapes_2.jpg',
      '/grapes/red_grapes_3.jpg',
      '/grapes/red_grapes_4.jpg',
      '/grapes/red_grapes_5.jpg'
    ]
    let icons = [
      '/rose.png',
      '/bottles_2.jpg',
      '/white_wine_2.png',
      // '/bottles_1.jpg',
      '/drinks.jpg',
      '/bottles_3.jpg',
      '/barrels.jpg',
      '/bottles_4.jpg',
      '/four_bottles.jpg'
    ]
    let curated = ['fruity', 'dry', 'bright', 'complex', 'smooth', 'chewy', 'green', 'spicy']
    return (
      <div className="main-page-contaner">
        <div className="home-page-header">
          <div className="home-page-header-overlay">
            <h1>Find your next glass...</h1>
            <MainSearchBar/>
        <div className="home-collections-container">
          {/* <Link className='home-index-link' to="/wines">View Our Curated Wine List</Link> */}
          <h2>Explore Categories</h2>
          <div className='curated-tag-container'>
            {
              curated.map((tag, i) =>
                <div className='curated-tag'>
                  <Link to={`/wines/tags/${tag}`}>
                    <img src={tag_icons[i % tag_icons.length]} alt={tag} />
                    <p>{tag}</p>
                  </Link>
                </div>
              )
            }
          </div>
          <h2>Your Collections</h2>
          <div id='user-collections'>
            <div className='add-new-collection' onClick={() => this.displayForm()}>Add New Collection
            </div>
            {
              this.props.collections
              .filter(el => el !== undefined)
              .map((collection, i) =>
                <div className='home-collection-item' key={collection._id}>
                  <Link to={`/collections/${collection._id}`}>
                    <img src={icons[i % icons.length]}></img>
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
            <Link className='home-index-link' to="/wines"><h2>View All Wines</h2></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;