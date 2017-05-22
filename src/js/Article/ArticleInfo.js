import React, { Component } from 'react'
import '.../css/AuthorInfo.css'
import AuthorName from './AuthorName'
import ArticleDate from './ArticleDate'

class ArticleInfo extends Component {
  render() {
    return (
      <div className="author-info">
        <AuthorName />
        <ArticleDate />
      </div>
    )
  }
}

export default ArticleInfo
