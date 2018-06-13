import React, { Component } from 'react';


export const SmallAdvantage = ({title, image, children}) => (
  <div className='advantage'>
    <div className='title'>{title}</div>
    <a href={'#' + title}>
      <div className='content'>
        <img src={image}></img>
        {children}
      </div>
    </a>
  </div>
);

export const LargeAdvantage = ({title, image, children}) => (
  <div
    className='advantage'
    id={title}
    >
    <img src={image}></img>
    <div className='content'>
      <div className='title'>{title}</div>
      {children}
    </div>
  </div>
);

// export default smallAdvantage;
