import React, { Component } from 'react';
import Article from './Article';
import Aside from './Aside';
import OtherArticles from './OtherArticles';

class Main extends Component {
  render() {
    return (
    <main className="expanded row">
      <Article />
      <Aside />
      <OtherArticles />
    </main>
    );
  }
}

export default Main;