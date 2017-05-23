import React, { Component } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleInfo from './ArticleInfo';
import ArticleBody from './ArticleBody';
import ArticleLinks from './ArticleLinks';

class Article extends Component {
  render() {
    return (
      <div>
        <ArticleHeader />
        <ArticleInfo />
        <ArticleBody />
        <ArticleLinks />
      </div>
    )
  }
}

export default Article;
