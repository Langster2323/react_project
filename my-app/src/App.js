import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Application(props) {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Nate Littlejon
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
     <div className="counter-score"> 20 </div>
    <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>

     <div className="player">
          <div className="player-name">
            Cameron
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
     <div className="counter-score"> 20 </div>
    <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
//proptypes is an object that contains all the keys our component can take.
Application.propTypes = {
  //type definition
  title: React.PropTypes.string,
};

// To give a property a default value
Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application />, document.getElementById('container'));
