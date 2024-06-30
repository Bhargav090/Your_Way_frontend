import React from 'react'
import './auth.css'
import url from '../url'
import axios from 'axios'
import Home from '../Home/Home'
import { Navigate } from 'react-router-dom';
export default class Signup extends React.Component {
  constructor(){
    super()
    this.state={
      toHome:false,
      navigateToLogin:false,
      status : ''
    }
  }
  signup = (e)=>{
    e.preventDefault()
    let obj = {
      username : e.target.username.value,
      email : e.target.email.value,
      password: e.target.password.value
    }
    axios.post(url+'/signup', obj)
      .then((posRes)=>{
        if(posRes.data.auth==="signedup"){
          this.setState({
            toHome : true
          }
        )}
        else if(posRes.data.auth==="logged"){
          alert("Already a User Please Login")
        }
        else{
          alert("Wrong crediantials")
        }
      }
    )
    .catch((errRes) => {
      this.setState({ status: "connection problem." });
  });
  }
  render() {
    if (this.state.toHome){
      return <Navigate to = "/login" />
    }
    return (
      <div className='signup'>
        <div class="moving-background">
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
          <div class="moving-object"></div>
        </div>
        <div className='M-text'>
            <h1 className='M-heading'>
                Welcome To <br></br>YourWay
            </h1>
        </div>
        <div className='form'>
            <h1 className='f-heading'>
                Please Fill The Details
            </h1>
        <form onSubmit={this.signup}>
            <div className='uname'>
                <label className='label'>Username:</label><br></br>
                <input type="text" name="username" placeholder='User Name' className='username'></input>
            </div>
            <div className='upwd'>
                <label className='label'>Password:</label><br></br>
                <input type="password" name="password" placeholder='Password' className='password'></input>
            </div>
            <div className='uemail'>
                <label className='label'>Email:</label><br></br>
                <input type="email" name="email" placeholder='abc@gmail.com' className='email'></input>
            </div>
            <button className='sb-btn'>Submit</button>
            <h5 className='already'>Already a User Please <span className='linkto' onClick={this.navigateToLogin}>Login</span></h5>
        </form>
        </div>
      </div>
    )
  }
}
