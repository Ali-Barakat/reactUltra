/*jshint esversion: 6 */

import React from 'react';
import { AboutSection, AboutInfo, Span, InfoDesc, Anchor, InfoTitle, InfoDir } from './style';


const About = () => {
    return (
      <AboutSection>
        <div className="container">
          <AboutInfo>
            <InfoTitle><Span>this is </Span>Me</InfoTitle>
            <InfoDir>Creative Director</InfoDir>
            <InfoDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor>explicabo</Anchor>
            </InfoDesc>
            <InfoDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibuscej lorm ipsum.
            </InfoDesc>
          </AboutInfo>
        </div>
      </AboutSection>
    );
}

export default About;
