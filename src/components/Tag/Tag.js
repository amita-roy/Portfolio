import React, { Component } from 'react';
import classNames from 'classnames';

class Tag extends Component {
  render() {
    const tagClasses = classNames(
      'mr-2',
      'px-2',
      'py-1',
      'bg-secondaryLight',
      'text-white'
    );
    return <div className={tagClasses}>{this.props.children}</div>;
  }
}

export default Tag;
