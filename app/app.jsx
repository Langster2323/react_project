function Application() {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>Scoreboard</h1>
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

ReactDOM.render(<Application />, document.getElementById('container'));
