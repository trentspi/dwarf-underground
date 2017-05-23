import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Article from './Article/Article';
import Ad from './Ad/Ad';
import OtherArticleLinks from './RealmLinks/OtherArticleLinks'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">

          <Article />
          <Ad />
          <OtherArticleLinks />

        </main>

        <Footer />

      </div>
    )
  };
};

export default App;
