import React, { Component } from 'react';
import Article from './Article';
import Aside from './Aside';
import OtherArticles from './OtherArticles';

const articles = [
  {
    title: "Single Orcs in Indianapolis",
    href: "https://mitzialexander.itch.io/orc-dating-sim",
    img: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
    alt: "orc",
  },
  {
    title: "You won't believe what's under this mountain",
    href: "https://en.wikipedia.org/wiki/Lonely_Mountain",
    img: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
    alt: "mountain",
  },
  {
    title: "Mine 20% more gold with One Weird Trick",
    href: "http://www.mygoldpanning.com/tipstricksandsecretstofindinggold.html",
    img: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
    alt: "gold",
  },
  {
    title: "Surprise for Indiana Hobbits born before 1999",
    href: "http://www.dailymail.co.uk/news/article-2261862/So-Mrs-Bilbo-DO-live-like-Hobbit--The-Oxford-graduate-whos-lived-13-years-mud-hut--really-away-fairies.html",
    img: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
    alt: "hobbit",
  }
];

class Main extends Component {
  render() {
    return (
    <main className="expanded row">
      <Article />
      <Aside />
      <OtherArticles articles={articles} />
    </main>
    );
  }
}

export default Main;