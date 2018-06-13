import React, { Component } from 'react';
import {LargeAdvantage} from './advantages';
import brandIcon from '../../images/iconbig1.png';
import relatabilityIcon from '../../images/iconbig2.png';
import eventIcon from '../../images/iconbig3.png';
import interviewIcon from '../../images/iconbig4.png';

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";


const AdvantageList = () => (
  <div className='advantage-list'>
    <LargeAdvantage
      title="Brand Awareness"
      image={brandIcon}>
      {text}
    </LargeAdvantage>
    <LargeAdvantage
      title="Relatability"
      image={relatabilityIcon}>
      {text}
    </LargeAdvantage>
    <LargeAdvantage
      title="Event RSVP"
      image={eventIcon}>
      {text}
    </LargeAdvantage>
    <LargeAdvantage
      title="Interview Request"
      image={interviewIcon}>
      {text}
    </LargeAdvantage>
  </div>
);

export default AdvantageList;
