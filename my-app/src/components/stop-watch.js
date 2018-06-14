import React from 'react';
import '../App.css';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      elapsedTime: 0,
      previousTime: 0,
    }
  }

componentDidMount = () => {
  this.interval = setInterval(this.onTick , 100);
}

componentwillUnmount = () => {
  clearInterval(this.interval);
}

onTick = () => {
  if (this.state.running) {
    var now = Date.now();
    this.setState({
      previousTime: now,
      elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
    });
  }
}
  /*Implemented state within the start and stop button*/
  onStart = () => {
    this.setState({
      running: true,
      previousTime: Date.now(),
     });
  }

  onStop = () => {
    this.setState({ running: false });
  }

  onReset = () => {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now(),
    });
  }

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

export default Stopwatch;
