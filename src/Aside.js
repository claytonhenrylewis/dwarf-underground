import React, { Component } from 'react';
import Ad from './Ad';
import './Aside.css';

class Aside extends Component {
  render() {
    return (
    <aside className="large-4 medium-12 columns">
      <Ad />
    </aside>
    );
  }
}

export default Aside;