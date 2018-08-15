import React, { PropTypes } from 'react';
import '../App.css'
import Counter from './counter';

const Player = ({ name, index, score, removePlayer, updatePlayerScore }) => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={ () => removePlayer(index) }>✖</a>
        {name}
      </div>
      <div className="player-score">
        <Counter
        index={index}
        updatePlayerScore={updatePlayerScore}
        score={score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
};
export default Player;
