// src/components/Main.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-nav">
        <NavLink to='/home' className='linklu'>Home</NavLink>
        <NavLink to='/profile' className='linklu'>Profile</NavLink>
        <NavLink to='/contact' className='linklu'>Contact Us</NavLink>
        <NavLink to='/' className='linklu'>Logout</NavLink>
      </div>
    );
  }
}
