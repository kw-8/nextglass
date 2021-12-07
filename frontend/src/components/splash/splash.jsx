import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-page-main">
        <div className="splash-header-hero">
          <div className="splash-header-hero-overlay">
            <div className="splash-header-content">
              <h1>YOUR NEXT<span>GLASS</span> IS ON US</h1>
              <div className="splash-body">
              <p>Rather than trying out new drinks and asking all of your friends for recommendations, why not quickly receive recommendations based on your current preferences?</p>
              <Link className="splash-login-button" to="/login">Login</Link>
              <Link className="splash-signup-button" to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;