import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Thumbnail.module.css';

class Thumbnail extends Component {
  render() {
    const { isActive, index } = this.props;
    const thumbClasses = classNames(
      'h-16',
      ' w-20',
      'md:mr-4',
      'border-2',
      'border-transparent',
      {
        'border-primary': index === isActive,
      }
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
