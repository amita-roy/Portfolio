import React, { Component } from 'react';
import Link from './Link';

class Nav extends Component {
  render() {
    return (
      <div className="flex items-center justify-between h-5 py-10 px-20">
        <div className="brand">
          <h1>
            <a href="/">ar</a>
          </h1>
        </div>
        <div className="links">
          <Link id="intro">Intro</Link>
          <Link id="portfolio">Portfolio</Link>
          <Link id="about">About</Link>
          <Link id="contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
