import React, { Component } from 'react';
import { Form } from '../ContactForm';
import { SocialIconGroupLight } from '../Icon';

class Contact extends Component {
  render() {
    return (
      <div className="bg-primary py-10 text-center">
        <h4 className="text-white text-3xl font-extrabold font-display mb-8">
          Interested in collaborating?
        </h4>
        <p className="text-white text-sm max-w-lg m-auto mb-10">
          If you have an application you are interested in developing, a feature
          that you need built or a project that need coding, I’d love to help
          you with it.
        </p>
        <Form />
        <div className="mt-10 max-w-1/3 flex justify-center items-center">
          <p className="text-primaryLight text-xs mr-3">
            amita.roy@workmail.com
          </p>

          <SocialIconGroupLight />
        </div>
      </div>
    );
  }
}

export default Contact;
