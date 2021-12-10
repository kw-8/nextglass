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
  
  render() {
    let icons = ['/rose.png', '/white_wine_2.png', '/public/four_bottles.jpg']
    return (
      <div className="main-page-contaner">
        <div className="home-page-header">
          <div className="home-page-header-overlay">
            <h1>Find your next glass...</h1>
          </div>
        </div>
        <div className="home-page-index-link">
          <Link to="/wines">Find a wine</Link>
          <h2>Your Collections</h2>
          <div id='user-collections'>
            {
              this.props.collections.map((collection, i) =>
                <div>
                  <Link to={`/collections/${collection._id}`}>
                    <img src={icons[i%3]}></img>
                    <p>{collection.title}</p>
                  </Link>
                </div>
              )
            }
          </div>
          <Link to="/collections">view your collections</Link>
          <h2>Create a new collection</h2>
          <form id="collection-form">
            <label htmlFor='title'></label>
            <input type='text' id='title' placeholder='Collection Name' onChange={this.update('title')}></input>
            
            <label htmlFor='title'></label>
            <textarea id='description' placeholder='Description' onChange={this.update('description')}></textarea>
            
            <button onClick={this.handleSubmit}>Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MainPage;