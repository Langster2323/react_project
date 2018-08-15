import React, { PropTypes } from 'react';
import '../App.css';

const Counter = ({ score, updatePlayerScore, index }) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={ () => updatePlayerScore(index, -1) } > - </button>
      <div className="counter-score"> {score} </div>
      <button className="counter-action increment" onClick={ () => updatePlayerScore(index, 1) }> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default Counter;
