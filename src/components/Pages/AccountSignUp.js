import React, { useState } from 'react';
import '../Account/Form.css';
import FormSignup from '../Account/FormSignup';
import FormSuccess from '../Account/FormSuccess';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import handImage from '../../assets/hand.png';
import yeezy from '../../assets/shoes/yeezy.png';

const AccountSignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-shoeImage' src={yeezy} alt='hand'/>
          <img className='form-img' src={handImage} alt='hand'/>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <Footer/>
    </>
  );
};

export default AccountSignUp;