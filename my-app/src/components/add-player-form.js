import React, { Component, PropTypes } from 'react';
import '../App.css';

export default class AddPlayerForm extends Component {
    state = {
       name: "",
     };

  propTypes: {
    addPlayer: PropTypes.func.isRequired,
  }



  onNameChange = e => {
    this.setState({name: e.target.value});
  }

  addPlayer = e => {
    e.preventDefault();

    this.props.addPlayer(this.state.name);
    this.setState({name: ""});
  }


  render = () => {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}
