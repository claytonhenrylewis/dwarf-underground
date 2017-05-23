import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: [],
    }
    this.updateComment = this.updateComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  updateComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  addComment(e) {
    const state = {...this.state};
    const comment = {
      text: state.comment,
      time: new Date(),
    }
    state.comments.push(comment);
    this.setState(state);
    state.comment = '';
  }

  renderComments() {
      return (
        <div className="comments">
          <textarea className="comment" placeholder="Type your comment here" value={this.state.comment} onChange={this.updateComment}></textarea>
          <button className="article-link button" onClick={this.addComment}>
            <i className="fa fa-check"></i>
            <span className="article-link-text">Submit</span>
          </button>
          <div className="comments">
            {this.state.comments.map((comment, i) => this.renderComment(comment, i))}
          </div>
        </div>
      );
  }

  renderComment(comment, i) {
    return <div className="comment" key={i}>{comment.text}</div>;
  }

  render() {
    return (
      <div>
        {this.renderComments()}
      </div>
    );
  }
}

export default Comments;