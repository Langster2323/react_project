import React from 'react';
import { render } from 'react-dom';
import Scoreboard, { PLAYERS } from './Scoreboard';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


render(<Scoreboard initialPlayers={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
