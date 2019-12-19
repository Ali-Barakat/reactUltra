/*jshint esversion: 6 */

import React from 'react';

import{NavbarSec, Logo, LogoText, UlList, ListItem, Anchor, StyledLink} from  './style.js';



const Navbar = () => {
    return (
      <NavbarSec>

        <div className="container">
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>

          <UlList>
            <ListItem><StyledLink to="/" >Home</StyledLink></ListItem>
            <ListItem><Anchor href="#">work</Anchor></ListItem>
            <ListItem><Anchor href="#">Protfolio</Anchor></ListItem>
            <ListItem><Anchor href="#">Resume</Anchor></ListItem>
            <ListItem><Anchor href="#">About</Anchor></ListItem>
            <ListItem><StyledLink to="/contact" >Contact</StyledLink></ListItem>

          </UlList>
        </div>
      </NavbarSec>
    );
}

export default Navbar;
