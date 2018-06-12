import React, { Component } from 'react';
import logo from '../../images/logo.png';
import logos from '../../images/logos.png';
import hero from '../../images/hero_image.jpg';
import HeaderBody from './headerBody';

const Header = () => (
  <div className='header'>
    <div className='logo-top'>
      <img src={logo}></img>
    </div>
    <HeaderBody></HeaderBody>
    <div className='logos-bottom'>
      <img src={logos}></img>
    </div>
  </div>
);

export default Header;
