import React, { Component } from 'react';
import hero from '../../images/hero_image.jpg';
import headerGraphic from '../../images/header_graphic.png';
import InterestForm from './interestForm';

const headerBody = ({style}) => (
  <div
    style={style}
    className="header-main">
    <img src={headerGraphic}></img>
    <InterestForm></InterestForm>
    <div
      className='company-tag'>
      Companies using Piazza Careers:
    </div>
  </div>
);

export default headerBody;
