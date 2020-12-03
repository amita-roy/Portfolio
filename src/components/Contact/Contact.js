import React, { Component } from 'react';
import { Form } from '../ContactForm';
import { SocialIconGroupLight } from '../Icon';

class Contact extends Component {
  render() {
    return (
      <div className="bg-primary py-10 text-center" id="contact">
        <h4 className="text-white text-3xl font-extrabold font-display mb-8">
          Interested in collaborating?
        </h4>
        <p className="text-white text-sm w-1/4 m-auto mb-10">
          If you have an application you are interested in developing, a feature
          that you need built or a project that need coding, I’d love to help
          you with it.
        </p>
        <Form />
        <div className="mt-10 w-1/3 mx-auto flex justify-center items-center pb-8 border-b border-borderLight">
          <p className="text-primaryLight text-xs mr-3">
            amita.roy@workmail.com
          </p>

          <SocialIconGroupLight />
        </div>
        <p className="text-primaryLight text-xs mt-6">© 2020 Amita</p>
      </div>
    );
  }
}

export default Contact;