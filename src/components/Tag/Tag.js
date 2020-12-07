import React, { Component } from 'react';
import classNames from 'classnames';

class Tag extends Component {
  render() {
    const tagClasses = classNames(
      'mr-2',
      'px-4',
      'py-1',
      'bg-primaryLight',
      'text-white',
      'text-xs',
      'sm:text-sm',
      'text-secondary'
    );
    return <div className={tagClasses}>{this.props.children}</div>;
  }
}

export default Tag;
