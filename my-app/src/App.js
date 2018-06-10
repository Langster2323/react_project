import React from 'react';
import PropTypes from 'prop-types';

var PLAYERS = [
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
  class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
    }

    getInitialState: () => {
      return {
        running: false,
        elapsedTime: 0,
        previousTime: 0,
      }
    },

  componentDidMount: () => {
    this.interval = setInterval(this.onTick, 100);
  },

  componentwillUnmount: () => {
    clearInterval(this.interval);
  },

  onTick: () => {
    if (this.state.running) {
      let now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
      });
    }
    console.log(onTick);
  },
    /*Implemented state within the start and stop button*/
    onStart: () => {
      this.setState({
        running: true,
        previousTime: Date.now(),
       });
    },

    onStop: () => {
      this.setState({ running: false });
    },

    onReset: () => {
      this.setState({
        elapsedTime: 0,
        previousTime: Date.now(),
      });
    },

    render() {
      var seconds = Math.floor(this.state.elapsedTime / 1000);
      return (
        <div className="stopwatch">
          <h2>Stopwatch</h2>
          <div className="stopwatch-time">{seconds}</div>
          { this.state.running ?
          <button onClick={this.onStop}>Stop</button>
          :
          <button onClick={this.onStart}>Start</button>
          }
          <button onClick={this.onReset}>Reset</button>
        </div>
      );
    }
  };

class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  propTypes: {
    onAdd: PropTypes.func.isRequired,
  },

  getInitialState: () => {
    return {
      name: "",
    };
  },

  onNameChange: e => {
    this.setState({name: e.target.value});
  },

  onSubmit: e => {
    e.preventDefault();

    this.props.onAdd(this.state.name);
    this.setState({name: ""});
  },


  render: () => {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

 const Stats = props => {
  var totalPlayers = props.players.length;
  var totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: PropTypes.array.isRequired,
};

const Header = props => {
  return (
    <div className="header">
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};

const Counter = props => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => {props.onChange(-1);}} > - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={() => {props.onChange(1);}}> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};



class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  propTypes: {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(React.PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  },

  getDefaultProps: () => {
    return {
      title: "Scoreboard",
    }
  },

  getInitialState: () => {
    return {
      players: this.props.initialPlayers,
    };
  },

  onScoreChange: (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onPlayerAdd: name => {
    this.state.players.push({
      name: name,
      score: 20,
      id: nextId,
    });
    this.setState(this.state);
    nextId += 1;
  },

  onRemovePlayer: index => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: () => {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map(function(player, index) {
            return (
              <Player
                onScoreChange={function(delta) {this.onScoreChange(index ,delta)}.bind(this)}
                onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}



ReactDOM.render(<Application initialPlayers={PLAYERS}/>, container);
