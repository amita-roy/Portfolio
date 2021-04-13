import React, { Component } from 'react';
import { SocialIconGroupLight } from '../Icon';
import styles from './Contact.module.css';

class Contact extends Component {
  render() {
    return (
      <div
        className="bg-primary py-10 px-4 md:px-0 text-center md:mt-10 "
        id="contact"
      >
        <h4 className="text-white text-2xl md:text-3xl font-extrabold font-display mb-8">
          Interested in collaborating?
        </h4>
        <p className="text-white text-sm md:w-1/2 lg:w-1/4 m-auto mb-10">
          If you have an application you are interested in developing, a feature
          that you need building, or a project that needs coding, I’d love to
          help you with it.
        </p>
        <div className=" w-full mt-10 md:w-1/3 mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center pb-8 border-b border-borderLight">
          <p className={`text-primaryLight text-m mr-3 ${styles.email} mb-4`}>
            <a
              href="mailto:amita.roy@workmail.com"
              className="text-primaryLight"
            >
              amita.roy@workmail.com
            </a>
          </p>
          <div className="mt-3 sm:mt-0 flex justify-center md:block">
            <SocialIconGroupLight />
          </div>
        </div>
        <p className="text-primaryLight text-xs mt-6">© 2020 Amita</p>
      </div>
    );
  }
}

export default Contact;
