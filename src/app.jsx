import React, { Component } from 'react';
import headerImage from '../dist/images/header_graphic.png';
import icon from '../dist/images/icon1.png';
import AdvantageBar from './components/advantages/advantageBar';
import AdvantageList from './components/advantages/advantageList';
import Header from './components/header/header';

const App = () => (
  <div>
    <img src={headerImage}></img>
    <img src={icon}></img>
    <Header></Header>
    <AdvantageBar></AdvantageBar>
    <AdvantageList></AdvantageList>
  </div>
);

export default App;
