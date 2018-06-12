import React, { Component } from 'react';
import hero from '../../images/hero_image.jpg';
import headerGraphic from '../../images/header_graphic.png';
import InterestForm from './interestForm';

const backgroundStyle = {
  width: "100%",
  height: "0",
  background: `url(${hero})`,
  backgroundSize: "contain",
  backgroundRepeat: 'no-repeat',
  paddingTop: "60.31%"
};

const headerBody = () => (
  <div
    style={backgroundStyle} className="header-main">
    <img src={headerGraphic}></img>
    <InterestForm></InterestForm>
  </div>
);

export default headerBody;
