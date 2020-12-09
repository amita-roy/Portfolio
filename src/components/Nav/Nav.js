import React, { Component } from 'react';
import Link from '../Link';
import { ReactComponent as Logo } from '../../images/temp-logo1.svg';
// import styles from './Nav.module.css';
import classNames from 'classnames';
// import './helper';

class Nav extends Component {
  render() {
    const navClasses = classNames(
      'flex',
      'items-center',
      'justify-between',
      'py-5',
      'md:h-40',
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
          <a href="/">
            <Logo width={50} />
          </a>
        </div>
        <div className="links">
          <Link to="intro">Intro</Link>
          <Link to="portfolio">Portfolio</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
