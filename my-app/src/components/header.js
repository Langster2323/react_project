import React, { PropTypes } from 'react';

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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};

export default Header;
