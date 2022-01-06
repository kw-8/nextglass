import React from 'react';
import { Link } from 'react-router-dom'
import { SearchBar } from '../search/search_bar'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/about'} onMouseEnter={e => this.handleHover(e)} onMouseLeave={e => this.handleHover(e)} className="nav-about" id="nav-about-button">?</Link>
                <button onClick={this.logoutUser} className="nav-logout">Logout</button>
            </div>
        );
      } else {
        return (
          <div>
                <Link to={'/about'} onMouseEnter={e => this.handleHover(e)} onMouseLeave={e => this.handleHover(e)} className="nav-about" id="nav-about-button">?</Link>
                <Link to={'/login'} className="nav-login">Login</Link>
                <Link to={'/signup'} className="nav-signup">Signup</Link>
            </div>
        );
      }
  }

  handleHover(e) {
    let aboutButton = document.getElementById("nav-about-button");
    aboutButton.innerText === "?" ? aboutButton.innerText = "About" : aboutButton.innerText = "?";
  }

  render() {
      return (
        <div className="nav-bar">
            <Link to={'/'}><span className="logo">NextGlass</span></Link>
            <SearchBar/>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;