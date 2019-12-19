/*jshint esversion: 6 */


import React from 'react';
import { ContactSection, ContactTitle, Span, Form, FormInput, InputText, InputEmail, InputExp, TextArea, InputSubmit } from './style';
import Footer from '../Footer';



const Contact = () => {
    return (
      <React.Fragment>
        <ContactSection >
          <div className="container">
            <ContactTitle><Span>Drop</Span> Me A line</ContactTitle>
            <Form>
              <FormInput>
                <InputText type="text" placeholder="yourName"/>
                <InputEmail type="email" placeholder="YourEmail"/>
              </FormInput>
  
              <InputExp type="text" className="sub" placeholder="Your Subject"/>
              <TextArea cols="30" rows="10" placeholder="Your Message"/>
              <InputSubmit type="submit" value="Send Message"/>
            </Form>
          </div>
        </ContactSection>
        <Footer></Footer>
      </React.Fragment>
    );
}

export default Contact;
