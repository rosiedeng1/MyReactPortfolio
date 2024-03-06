// This is a static page mocking a "Contact" section about myself 
import Header from "../components/Header.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
            <>
        <Header></Header>
        <Nav></Nav>
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Here is how to contact me :) </h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Write a message here' v-model='subject' wrapperClass='mb-4' />

      {/* <MDBTextArea wrapperClass='mb-4' label='Message' /> */}

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
   <Footer></Footer>
         </>
  );
}