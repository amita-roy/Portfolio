import React, { Component } from 'react';

class Button extends Component {
  static defaultProps = {
    type: 'primary',
    block: false,
    href: null,
  };

  render() {
    return <a></a>;
  }
}

export default Button;
