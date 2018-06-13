import React, { Component } from 'react';
import AdvantageBar from './components/advantages/advantageBar';
import AdvantageList from './components/advantages/advantageList';
import Header from './components/header/header';

const App = () => (
  <div>
    <Header></Header>
    <AdvantageBar></AdvantageBar>
    <AdvantageList></AdvantageList>
  </div>
);

export default App;
