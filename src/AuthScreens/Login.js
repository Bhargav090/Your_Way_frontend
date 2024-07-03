import React, { useContext, useState } from 'react';
import './auth.css';
import url from '../url';
import axios from 'axios';
import { Navigate, useNavigate} from 'react-router-dom';
import {store} from '../App' 
const Login = () => {
  const [toHome, setToHome] = useState(false);
  const [status, setStatus] = useState('');
  const {setToken } = useContext(store); 
  const navigate = useNavigate(); 
  const login = async (e) => {
    e.preventDefault();
    const obj = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    try {
      const posRes = await axios.post(url + '/login', obj);
      if (posRes.data.auth === "gosignup") {
        alert("Not A User Please Signup");
      } else {
        setToken(posRes.data.token);
        setToHome(true);
      }
    } catch (errRes) {
      setStatus("Connection problem.");
    }
  };

  if (toHome) {
    return <Navigate to="/home" />;
  }
  const navigateToSignup=()=>{
    navigate('/signup'); 
  }
  return (
    <div className='signup'>
      <div className="moving-background">
      </div>
      <div className='M-text'>
        <h1 className='M-heading'>
          Welcome To <br />YourWay
        </h1>
      </div>
      <div className='form'>
        <h1 className='f-heading'>
          Please Login With Your Credentials
        </h1>
        <form onSubmit={login}>
          <div className='uname'>
            <label className='label'>Username:</label><br />
            <input type="text" name="username" placeholder='User Name' className='username' required />
          </div><br></br>
          <div className='upwd'>
            <label className='label'>Password:</label><br />
            <input type="password" name="password" placeholder='Password' className='password' required />
          </div>
          <button className='sb-btn'>Submit</button>
        </form><br></br>
        <h5 className='already'>New To YourWay <span className='linkto' onClick={navigateToSignup}>Signup</span></h5>
      </div>
      {status && <p className='error-message'>{status}</p>}
    </div>
  );
};

export default Login;
