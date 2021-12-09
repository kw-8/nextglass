import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  componentDidMount() {
    this.props.getCollections()
    console.log(this.props)
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
        </div>
      </div>
    );
  }
}

export default MainPage;