/*jshint esversion: 6 */

import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeDesc, HomeBtn, HomeInfo, Span } from './style';



const Home = () => {
    return (

      <HomeSection>

        <div className="container">
            <HomeInformation>
              <HomeTitle>Ali VLK</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                I am a professional <Span>UX Designer</Span> and Fornt-End Developer 
                creating modern and responsive designs to Web and Mobile.
                 let us work together.
              </HomeDesc>
              <HomeBtn>Let's Begin</HomeBtn>
            </HomeInformation>
        </div>
        
      </HomeSection>
    );
}

export default Home;
