import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends Component {
  static defaultProps = {
    type: 'primary',
    block: false,
    href: null,
  };

  render() {
    const { type, href, block } = this.props;
    const anchorClasses = classNames(
      'py-3',
      'px-6',
      'text-white',
      'mb-50',
      'shadow-lg',

      {
        'bg-primary': type === 'primary',
        'bg-secondaryLight': type === 'secondary',
        block: !!block,
        'inline-block': !block,
      }
    );

    return (
      <a className={anchorClasses} href={href}>
        {this.props.children}
      </a>
    );
  }
}

export default Button;