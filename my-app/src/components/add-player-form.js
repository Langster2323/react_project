import React, { Component, PropTypes } from 'react';
import '../App.css';

export default class AddPlayerForm extends Component {
    state = {
       name: "",
     };

  propTypes: {
    onAdd: PropTypes.func.isRequired,
  }



  onNameChange = e => {
    this.setState({name: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.onAdd(this.state.name);
    this.setState({name: ""});
  }


  render = () => {
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
