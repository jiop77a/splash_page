import React, { Component } from 'react';
import Advantage from './advantage';
import brandIcon from '../../images/icon1.png';
import relatabilityIcon from '../../images/icon2.png';
import eventIcon from '../../images/icon3.png';
import interviewIcon from '../../images/icon4.png';

const text = {
  brand:
  "Enable students to relate to your brand and your mission. Getting students familiar with your brand early on helps with forming positive brand associations.",
  relatability:
  "The best asset your company has in being able to relate to students is your current employees' carreer experiences. We help you leverage these in a powerful way.",
  event:
  "Are students aware of you on campus events? We target your messaging by school and class type to ensure that the students you care about are in the know.",
  interview:
  "We give students the opportunity to connect directly with you to request more information, to ask questions, and ultimately apply for a job. We keep things organized and simple. "
};


const AdvantageBar = () => (
  <div className='advantage-bar'>
    <Advantage
      title="Brand Awareness"
      image={brandIcon}>
      {text.brand}
    </Advantage>
    <div className='border'></div>
    <Advantage
      title="Relatability"
      image={relatabilityIcon}>
      {text.relatability}
    </Advantage>
    <div className='border'></div>
    <Advantage
      title="Event RSVP"
      image={eventIcon}>
      {text.event}
    </Advantage>
    <div className='border'></div>
    <Advantage
      title="Interview Request"
      image={interviewIcon}>
      {text.interview}
    </Advantage>
  </div>
);

export default AdvantageBar;
