import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Stats from './stats';
import Stopwatch from './stop-watch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
