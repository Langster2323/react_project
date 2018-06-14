import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       name: "",
     };
   }

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

export default AddPlayerForm;
