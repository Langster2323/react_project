import React from 'react';

import Stats from './stats';
import Stopwatch from './stop-watch';

const Header = ({ players, title }) => {
  return (
    <div className="header">
      <Stats players={players}/>
      <h1>{title}</h1>
      <Stopwatch />
    </div>
  );
}

export default Header;
