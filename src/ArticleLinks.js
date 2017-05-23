import React, { Component } from 'react';
import './ArticleLinks.css';

class ArticleLinks extends Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem('state')) || {showComments: false, comments: []};
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
        <div>
          <form onSubmit={this.addComment.bind(this)}>
            <textarea className="comment" placeholder="Type your comment here" ref={(input) => this.commentText = input}></textarea>
            <button type="submit" className="article-link">
              <i className="fa fa-check"></i>
              <span className="article-link-text">Submit</span>
            </button>
          </form>
          <ul className="comments">
            {this.state.comments.map(this.renderComment)}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComment(comment) {
    return <li>{comment}</li>;
  }

  toggleShowComments() {
    this.setState({showComments: !this.state.showComments});
    this.save();
  }

  render() {
    return (
      <div className="article-links">
        <a className="article-link" onClick={this.toggleShowComments.bind(this)}>
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