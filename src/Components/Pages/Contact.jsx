import React from "react";
import './Contact.css';
import { Contactinfo } from '../Contactinformation';
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

export default function Contact() {
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Contact</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <Contactinfo />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <Form>
              <FormGroup className='row mb-3'>
                <h2>
                  For Party Booking
                </h2>
              </FormGroup>
              <FormGroup className='row mb-3'>
                <div className='col-md-6'>
                  <FormLabel htmlFor='first-name'>First Name</FormLabel>
                  <FormControl type='text' id='first-name' required />
                </div>
                <div className='col-md-6'>
                  <FormLabel htmlFor='last-name'>Last Name</FormLabel>
                  <FormControl type='text' id='last-name' required />
                </div>
              </FormGroup>
              <FormGroup className='row mb-3'>
                <div className='col-md-6'>
                  <FormLabel htmlFor='email-address'>Email Address</FormLabel>
                  <FormControl type='email' id='email-address' required />
                </div>
                <div className='col-md-6'>
                  <FormLabel htmlFor='phone-number'>Phone Number</FormLabel>
                  <FormControl type='tel' id='phone-number' required />
                </div>
              </FormGroup>
              <FormGroup className='row mb-3'>
                <div className='col-md-6'>
                  <FormLabel htmlFor='date'>Date</FormLabel>
                  <FormControl type='date' id='date' required />
                </div>
                <div className='col-md-6'>
                  <FormLabel htmlFor='guests-number'>Number Of Guests</FormLabel>
                  <FormControl type='number' id='guests-number' required />
                </div>
              </FormGroup>
              <FormGroup className='mb-4'>
                <FormLabel htmlFor='comments'>Comments</FormLabel>
                <FormControl as='textarea' id='comments' required />
              </FormGroup>

              <button type='submit' className='btn btn-success btn-lg'>Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
