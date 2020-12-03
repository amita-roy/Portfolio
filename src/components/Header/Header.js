import React, { Component } from 'react';
import { SocialIconGroupPrimary } from '../Icon';

export class Header extends Component {
  render() {
    return (
      <div
        className="mt-40 h-72 flex flex-col justify-between md:px-20 px-8"
        id="intro"
      >
        <div>
          <div>
            <h1 className="text-6xl mb-6  md:max-w-lg font-display font-extrabold">
              Pretty code by ingenious person
            </h1>

            <p className="w-full md:max-w-xl text-sm text-grayLight font-body">
              Hello I am a software developer! I can help you build a product,
              featre or website. Look through some of my work and experience! If
              you like what you see and have project you need coded, don’t
              hesistate to contact me.
            </p>
          </div>
          <div></div>
        </div>
        <div className="md:flex md:items-center mt-3 md:mt-0">
          <p className="mr-12 text-grayLight font-semibold">
            My works in social networks
          </p>
          <div className=" mt-3 md:mt-0">
            <SocialIconGroupPrimary />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
