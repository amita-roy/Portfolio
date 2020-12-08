import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Thumbnail.module.css';

class Thumbnail extends Component {
  render() {
    const thumbClasses = classNames(
      'h-16',
      ' w-20',
      'border-2',
      'border-primary',
      'bg-purple-800',
      'md:mr-4'
    );
    const { background } = this.props;
    return (
      <div
        onClick={this.props.onClick}
        className={`${thumbClasses} ${styles.thumbnail}`}
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
    );
  }
}

export default Thumbnail;
