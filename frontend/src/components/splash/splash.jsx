import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-page-main">
        <div className="splash-header-hero">
          <div className="splash-header-hero-overlay">
            <div className="splash-header-content">
              <div className='splash-header-hero-text'>
                <h1>FIND YOUR NEXT<span>GLASS</span></h1>
                <p>Recommendations based on your current favorites!</p>
              </div>
              <div className="splash-body">
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