import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Header.module.css';
import { SocialIconGroupPrimary } from '../Icon';

export class Header extends Component {
  render() {
    const introClassnames = classNames(
      'flex',
      'flex-col',
      'justify-between',
      'md:px-20',
      'px-4'
    );
    return (
      <div className={`${styles.intro} ${introClassnames}`} id="intro">
        <div>
          <h1 className=" text-3xl md:text-5xl lg:text-6xl mb-6  md:max-w-lg font-display font-extrabold">
            Pretty code by ingenious person
          </h1>
          <p className="w-full md:max-w-xl text-sm text-grayLight font-body leading-7">
            Hello I am a software developer! I can help you build a product,
            feature or website. Look through some of my work and experience! If
            you like what you see and have project you need coded, don’t
            hesistate to contact me.
          </p>
        </div>
        <div className="md:flex md:items-center mt-10 md:mt-20">
          <p className="sm:mr-12 text-grayLight font-semibold">
            My works in social networks
          </p>
          <div className=" mt-3 md:mt-0">
            <SocialIconGroupPrimary />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
