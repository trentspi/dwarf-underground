import React, { Component } from 'react'
import '../css/AuthorInfo.css'


class AuthorInfo extends Component {
  render() {
    return (
      <div className="author-info">
        <p className="author-name">By Domri, son of Flug</p>
        <p className="date">on 28 April, 3018 of the Third Age</p>
      </div>
    )
  }
}

export default AuthorInfo
