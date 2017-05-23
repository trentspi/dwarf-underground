import React, { Component } from 'react';
import '../../css/AuthorInfo.css';
import AuthorName from './AuthorName';
import Avatar from './Avatar';
import ArticleDate from './ArticleDate';

class ArticleInfo extends Component {
  render() {
    return (
      <div className="avatar">
        <Avatar />
        <div className="author-info">
          <AuthorName />
          <ArticleDate />
        </div>
      </div>
    )
  }
}

export default ArticleInfo;
