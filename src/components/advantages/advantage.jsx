import React, { Component } from 'react';


const advantage = ({title, image, children}) => (
  <div className='advantage'>
    <div className='title'>{title}</div>

    <div className='content'>
      <img src={image}></img>
      {children}
    </div>
  </div>
);

export default advantage;
