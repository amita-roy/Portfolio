import React, { Component } from 'react';
import { ReactComponent as Github } from '../../icons/githubLight.svg';
import { ReactComponent as LinkedIn } from '../../icons/linkedinLight.svg';
import { ReactComponent as Twitter } from '../../icons/twitterLight.svg';
import { ReactComponent as Medium } from '../../icons/mediumLight.svg';

class SocialIconGroupLight extends Component {
  render() {
    return (
      <div className="flex items-center justify-evenly sm:justify-start w-full">
        <a
          className="socialIcon"
          href="https://github.com/Amita-Roy"
          target="blank"
          alt="github"
        >
          <Github width="30" height="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/amita-roy/"
          target="blank"
          className="socialIcon ml-3"
          alt="linkein"
        >
          <LinkedIn width="30" height="30" />
        </a>
        <a
          href="https://medium.com/@sardana.amita2"
          target="blank"
          alt="medium"
          className="socialIcon ml-3"
        >
          <Medium width="30" height="30" />
        </a>
        <a
          href="https://twitter.com/AmitaRoy14"
          target="blank"
          alt="twitter"
          className="socialIcon ml-3"
        >
          <Twitter width="30" height="30" />
        </a>
      </div>
    );
  }
}

export default SocialIconGroupLight;
