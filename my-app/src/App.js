import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

var PLAYERS = [
  {
    name: "Nate",
    score: 20,
    id: 1,
  },
  {
    name: "Cameron",
    score: 20,
    id: 2,
  },
  {
    name: "Eric",
    score: 20,
    id: 3,
  },
  {
    name: "Ahkeem",
    score: 20,
    id: 4,
  }
];

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
};

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
    //The key is helping the loop understand exactly which objects map to each virtual DOM elements
     //The map function helps to create a list of JSX elements from an arry of JavaScript values
      <div className="players">
        {props.players.map(function(player) {
          return <Player name={player.name} score={player.score} key={player.id}/>
         })}
        </div>
      </div>
  );
}
//proptypes is an object that contains all the keys our component can take.
Application.propTypes = {
  //type definition
  title: React.PropTypes.string,
  //Actual properties Application takes...
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};

// To give a property a default value
Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));
