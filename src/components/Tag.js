import React, { Component } from 'react';
import classNames from 'classnames';

class Tag extends Component {
  render() {
    const tagClasses = classNames();
    return <div>{this.props.childeren}</div>;
  }
}

export default Tag;
