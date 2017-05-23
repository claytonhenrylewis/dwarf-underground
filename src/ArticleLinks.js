import React, { Component } from 'react';
import './ArticleLinks.css';
import Comments from './Comments';

class ArticleLinks extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('state')) || {showComments: false, comments: []};
    this.toggleShowComments = this.toggleShowComments.bind(this);
  }

  addComment(e) {
    e.preventDefault();
    const comments = [...this.state.comments];
    comments.push(this.commentText.value);
    this.setState({ comments });
    console.log('hey');
    console.log(this.state);
    this.save();
  }

  renderComments() {
    if (this.state.showComments) {
      return (
        <Comments />
      );
    } else {
      return null;
    }
  }

  renderComment(comment, i) {
    return <li key={i}>{comment}</li>;
  }

  toggleShowComments(e) {
    e.preventDefault();
    this.setState({showComments: !this.state.showComments});
    this.save();
  }

  render() {
    return (
      <div className="article-links">
        <a className="article-link" onClick={this.toggleShowComments}>
          <i className="fa fa-comments-o"></i>
          <span className="article-link-text">Comments</span>
        </a>
        <a className="article-link" href="#">
          <i className="fa fa-share"></i>
          <span className="article-link-text">Share Post</span>
        </a>
        {this.renderComments()}
      </div>
    );
  }

  save() {
    window.localStorage.setItem('state', JSON.stringify(this.state));
  }
}

export default ArticleLinks;