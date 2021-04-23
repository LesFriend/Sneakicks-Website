import React from 'react';
import './Form.css';
import logo from '../../assets/sneakicks-logo(white-variant).png'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>SUCCESS!<br></br>WELCOME TO</h1>
      <img className='form-img-2' src={logo} alt='success-image' />
    </div>
  );
};

export default FormSuccess;