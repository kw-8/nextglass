import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-page-main">
        <div className="splash-header-hero">
          <div className="splash-header-signup">
            <h1>Nextglass</h1>
            <p>Rather than trying out new drinks and asking all of your friends for recommendations, why not quickly receive recommendations based on your current preferences?</p>
            <Link className="splash-header-button" to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;