import React, { Component } from 'react';
import Headline from './Headline';
import ClearFix from './ClearFix';
import './Header.css';

class Header extends Component {
  render() {
    return (
    <div className="expanded row header">
      <ClearFix />
      <Headline />
    </div>
    );
  }
}

export default Header;