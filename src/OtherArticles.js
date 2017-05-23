import React, { Component } from 'react';
import './OtherArticles.css';

class OtherArticles extends Component {
  renderArticle(article, i) {
    return (
      <div className="small-6 medium-3 columns other-article" key={i}>
        <a href={article.href}>
          <img src={article.img} alt={article.alt}/>
          <p>{article.title}</p>
        </a>  
      </div>
    );
  }

  render() {
    return (
    <div className="small-12 columns other-articles">
      <h2>From around the Realm</h2>
      {this.props.articles.map((article, i) => this.renderArticle(article, i))}
    </div>
    );
  }
}

export default OtherArticles;