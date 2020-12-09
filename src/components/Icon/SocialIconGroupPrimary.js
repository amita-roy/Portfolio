import React, { Component } from 'react';
import { ReactComponent as Github } from '../../icons/github.svg';
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Medium } from '../../icons/medium.svg';
import { ReactComponent as Insta } from '../../icons/insta.svg';

class SocialIconGroupPrimary extends Component {
  render() {
    return (
      <div className="flex items-center">
        <a
          href="https://github.com/Amita-Roy"
          target="blank"
          className="social-icons"
          alt="github"
        >
          <Github width="30" height="30" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="blank"
          className="social-icons ml-3"
          alt="instagram"
        >
          <Insta width="30" height="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/amita-roy/"
          target="blank"
          className="social-icons ml-3"
          alt="linkedin"
        >
          <LinkedIn width="30" height="30" />
        </a>
        <a
          href="https://medium.com/@sardana.amita2"
          target="blank"
          alt="medium"
          className="social-icons ml-3"
        >
          <Medium width="30" height="30" />
        </a>
        <a
          href="https://twitter.com/AmitaRoy14"
          target="blank"
          alt="twitter"
          className="social-icons ml-3"
        >
          <Twitter width="30" height="30" />
        </a>
      </div>
    );
  }
}

export default SocialIconGroupPrimary;
