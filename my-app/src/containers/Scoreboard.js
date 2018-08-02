import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import { connect } from 'react-redux';
import '../App.css';

import Player from '../components/player';
import AddPlayerForm from '../components/add-player-form';
import Header from '../components/header';

class Scoreboard extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired
  }

  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) =>
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
       />
  );

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);
