import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import Player from '../components/player';
import AddPlayerForm from '../components/add-player-form';
import Header from '../components/header';

export const PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andrew Chalkley",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Holligan",
    score: 42,
    id: 3,
  },
];
var nextId = 4;
  /*In order to have state, impliment getInitialState*/

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {players: props.initialPlayers}
  }

  // propTypes: {
  //   title: PropTypes.string,
  //   initialPlayers: PropTypes.arrayOf(React.PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     score: PropTypes.number.isRequired,
  //     id: PropTypes.number.isRequired,
  //   })).isRequired,
  // },

  getDefaultProps = () => {
    return {
      title: "Scoreboard",
    }
  }

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd = name => {
    this.state.players.push({
      name: name,
      score: 20,
      id: nextId,
    });
    this.setState(this.state);
    nextId += 1;
  }

  onRemovePlayer = index => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render = () => {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onScoreChange={(delta) => {this.onScoreChange(index ,delta)}}
                onRemove={() => {this.onRemovePlayer(index)}}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          })}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}
