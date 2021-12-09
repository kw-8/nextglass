import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

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
        </div>
      </div>
    );
  }
}

export default MainPage;