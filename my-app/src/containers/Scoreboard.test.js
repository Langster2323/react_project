import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './Scoreboard';
import { connect } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(connect()(Scoreboard), div);
});
