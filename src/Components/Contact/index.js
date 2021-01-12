import React from 'react';
import Footer from './../Footer';
import {InputEmail,InputExp, InputSub,InputText, Form, FormInput, Textarea, Title, Span, ContactSec } from './style.js';

const Contact = () => {
    return ( 
<React.Fragment>
<ContactSec>
            <div className="container">
                <Title><Span>Drop </Span>Me A line</Title>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text" className="sub" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSub type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSec>
        <Footer/>
</React.Fragment>

       );
}
 
export default Contact;