import React, { Component } from 'react';
import classNames from 'classnames';

class Input extends Component {
  render() {
    const { type, placeholder } = this.props;
    const inputClasses = classNames(
      'py-2',
      'px-4',
      'text-sm',
      'border',
      'border-transparent',
      'focus:border-grayLight',
      'focus:outline-none'
    );
    return (
      <input type={type} placeholder={placeholder} className={inputClasses} />
    );
  }
}

export default Input;
