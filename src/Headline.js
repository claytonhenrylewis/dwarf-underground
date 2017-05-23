import React, { Component } from 'react';
import './Headline.css';

class Headline extends Component {
  render() {
    return (
      <div className="headline text-center small-12 columns">
        <h1>The Dwarf Underground</h1>
        <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
      </div>
    );
  }
}

export default Headline;