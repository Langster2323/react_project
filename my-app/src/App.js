import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Header (props) {
  return (
    <div className="header">
        <h1>{props.title}</h1>
      </div>
  );
}

Header.propTypes = {
  //type definition
  title: React.PropTypes.string.isRequired,
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <div className="counter">
          <button className="counter-action decrement"> - </button>
 <div className="counter-score"> {props.score} </div>
<button className="counter-action increment"> + </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        <Player name="Nate" score={20} />
        <Player name="Ahkeem" score={20} />
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
