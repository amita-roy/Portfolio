import React, { Component } from 'react';
import classNames from 'classnames';

export class Link extends Component {
  static defaultProps = {
    to: '',
  };

  render() {
    const { to } = this.props;
    const linkClassnames = classNames(
      'text-sm',
      'ml-5',
      'focus:text-primary',
      'hover:text-primary'
    );
    return (
      <a href={`#${to}`} className={linkClassnames}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
