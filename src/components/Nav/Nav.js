import React, { Component } from 'react';
import Link from '../Link';
// import styles from './Nav.module.css';
import classNames from 'classnames';
// import './helper';

class Nav extends Component {
  render() {
    const navClasses = classNames(
      'flex',
      'items-center',
      'justify-between',
      'h-5',
      'py-5',
      'h-20',
      'md:px-20',
      'px-4',
      'fixed',
      'top-0',
      'w-full',
      'bg-body'
    );
    return (
      <div className={`${navClasses}`} id="fixed-nav">
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
