// This is a static page mocking a "Contact" section about myself 
import Header from "../components/Header.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';

function Contact() {
  // Here we set two state variables for Name and Email using `useState`
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either Name or Email based on what field the user is typing in
    return name === 'Name' ? setName(value) : setEmail(value) & setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first name and email, clear the inputs
    alert(`Hello ${Name} ${Email}`);
    setName('');
    setEmail('');
  };

  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <div className="container text-center">
      <h1>
        Here is how you can contact me :) {Name} {Email}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={Email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
          <MDBInput
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Write a Message here"
        />
        <button type="submit">
          Submit
        </button>
      </form>

    </div>

    <div> My email is : rdeng@specialtyscript.com and my phone number is (914)-316-3854</div>

    <Footer></Footer>
    </>
  );

}

export default Contact;

// export default function Contact() {
  //   return (
  //             <>
  //         <Header></Header>
  //         <Nav></Nav>
  // //     <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
  // //       <h2>Here is how you can contact me :) </h2>
  
  // //       <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />
  
  // //       <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />
  
  // //       <MDBInput label='Write a message here' v-model='subject' wrapperClass='mb-4' />
  
  // //       <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
  
  // //       <MDBBtn color='primary' block className='my-4'>
  // //         Send
  // //       </MDBBtn>
  // //     </form>
  
  // //    <Footer></Footer>
  // //          </>
  //   );
  // }