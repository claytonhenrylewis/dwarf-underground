import React, { Component } from 'react';
import NavLinks from './NavLinks';
import './ClearFix.css';

class ClearFix extends Component {
  render() {
    return (
      <div className="clearfix">
        <div className="float-left logo">
          <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
        </div>
        <NavLinks />
      </div>
    );
  }
}

export default ClearFix;