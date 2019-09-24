import React, { Component } from "react";
import CommentForm from "./CommentForm.js";

class Comments extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newComment: false
    };
    this.insertNewComment = this.insertNewComment.bind(this);
  }
  insertNewComment(item) {
    this.props.comments.push(item);
    console.log(item);
    this.setState({
      newComment: true
    });
  }
  render() {
    return (
      <div className="col__wrapper article__comments">
        <h2>Commentarios</h2>
        <div className="comments__wrapper">
          {this.props.comments.map(comment => (
            <div className="comment__wrapper">
              <div className="comment__author">
                <p>{comment.User}</p>
              </div>
              <div className="comment__body">
                <p>{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
        <CommentForm
          articleID={this.props.articleId}
          action={this.insertNewComment.bind(this)}
        />
      </div>
    );
  }
}

export default Comments;
