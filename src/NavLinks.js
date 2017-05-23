import React, { Component } from 'react';
import './NavLinks.css';

class NavLinks extends Component {
  render() {
    return (
      <div className="float-right nav-links">
        {this.props.links.map((link, i) => <a href="#" key={i}>{link}</a>)}
      </div>
    );
  }
}

export default NavLinks;