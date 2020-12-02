import React, { Component } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

class Form extends Component {
  render() {
    return (
      <div className="border border-red-400 w-1/3 m-auto">
        <form className="contact-form">
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <textarea
            placeholder="Message"
            className="w-full mb-8 py-2 px-4 text-sm "
            rows="6"
          ></textarea>
          <Button type="secondary" block={true}>
            Get in toch
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
