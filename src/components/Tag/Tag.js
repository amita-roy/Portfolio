import React, { Component } from 'react';
import classNames from 'classnames';

class Tag extends Component {
  render() {
    const { color } = this.props;
    const tagClasses = classNames(
      'mr-2',
      'px-4',
      'py-1',

      'text-white',
      'text-xs',
      'sm:text-sm',
      'mt-2',

      {
        'bg-primaryLight': color === 'primaryLight',
        'text-secondary': color === 'primaryLight',
        'bg-secondaryLight': color === 'secondaryLight',
        'text-white': color === 'secondaryLight',
      }
    );
    return <div className={tagClasses}>{this.props.children}</div>;
  }
}

export default Tag;
