import React, { Component } from 'react';
import './OtherArticles.css';

class OtherArticles extends Component {
  constructor() {
    super()
    this.state = {
      articles: [
        {
          title: "Single Orcs in Indianapolis",
          href: "#",
          img: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
          alt: "orc",
        },
        {
          title: "You won't believe what's under this mountain",
          href: "#",
          img: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
          alt: "mountain",
        },
        {
          title: "Mine 20% more gold with One Weird Trick",
          href: "#",
          img: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
          alt: "gold",
        },
        {
          title: "Surprise for Indiana Hobbits born before 1999",
          href: "#",
          img: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
          alt: "hobbit",
        }
      ],
    }
  }

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
      {this.state.articles.map((article, i) => this.renderArticle(article, i))}
    </div>
    );
  }
}

export default OtherArticles;