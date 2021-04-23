import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          LOG IN TO YOUR ACCOUNT.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>*EMAIL</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>*PASSWORD</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          LOG IN
        </button>
        <span className='form-input-login'>
          Don't have an account? Create one <Link to='/accountSignUp'>here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;