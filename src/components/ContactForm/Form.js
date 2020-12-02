import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Input } from '../Input';

class Form extends Component {
  render() {
    const txtAreaClasses = classNames(
      'w-full',
      'mb-8',
      'py-2',
      'px-4',
      'text-sm',
      'border',
      'border-transparent',
      'focus:border-grayLight',
      'focus:outline-none'
    );
    return (
      <div className="border border-red-400 w-1/3 m-auto">
        <form className="contact-form">
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <textarea
            placeholder="Message"
            className={txtAreaClasses}
            rows="6"
          ></textarea>
          <Button type="secondary" block={true}>
            Get in touch
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
