import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, placeholder } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="py-2 px-4 text-sm"
      />
    );
  }
}

export default Input;
