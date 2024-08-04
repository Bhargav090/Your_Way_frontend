import React, { useState } from 'react';
import './auth.css';
import url from '../url';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate(); // Using useNavigate hook here

  const [toHome, setToHome] = useState(false);
  const [status, setStatus] = useState('');

  const signup = async (e) => {
    e.preventDefault();
    const obj = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    try {
      const posRes = await axios.post(url + '/signup', obj);
      if (posRes.data.auth === "signedup") {
        alert('This website backend is hosted with render😅, So please wait for 1-2 minutes it will automatically take you to home page.')
        setToHome(true);
      } else if (posRes.data.auth === "logged") {
        alert('This website backend is hosted with render😅, So please wait for 1-2 minutes it will automatically take you to home page.')
        alert("Already a User Please Login");
      } else {
        alert('This website backend is hosted with render😅, So please wait for 1-2 minutes it will automatically take you to home page.')
        alert("Wrong credentials");
      }
    } catch (error) {
      setStatus("Connection problem.");
    }
  };

  const navigateToLogin = () => {
    navigate('/'); // Correct usage of navigate function
  };

  if (toHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className='signup'>
      <div className='M-text'>
        <h1 className='M-heading'>
          Welcome To <br />YourWay
        </h1>
      </div>
      <div className='form'>
        <h1 className='f-heading'>
          Please Fill The Details
        </h1>
        <form onSubmit={signup}>
          <div className='uname'>
            <label className='label'>Username:</label><br />
            <input type="text" name="username" placeholder='User Name' className='username' />
          </div>
          <div className='upwd'>
            <label className='label'>Password:</label><br />
            <input type="password" name="password" placeholder='Password' className='password' />
          </div>
          <button className='sb-btn'>Submit</button><br></br>
          <h5 className='already'>Already a User? Please <span className='linkto' onClick={navigateToLogin}>Login</span></h5>
        </form>
      </div>
      {status && <p className='error-message'>{status}</p>}
    </div>
  );
};

export default Signup;
