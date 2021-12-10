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
    return (
      <div className="main-page-contaner">
        <div className="home-page-header">
          <div className="home-page-header-overlay">
            <h1>Home Page</h1>
          </div>
        </div>
        <div className="home-page-index-link">
          <Link to="/wines">Find a wine</Link>
          {
            this.props.collections.map(collection => <Link to={`/collections/${collection._id}`}>{collection.title}</Link>)
          }
          <Link to="/collections">view your collections</Link>
          <form>
            <label htmlFor='title'></label>
            <input type='text' id='title' placeholder='Collection Name' onChange={this.update('title')}></input>
            
            <label htmlFor='title'></label>
            <input type='text' id='description' placeholder='Description' onChange={this.update('description')}></input>
            
            <button onClick={this.handleSubmit}>Create Collection</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MainPage;