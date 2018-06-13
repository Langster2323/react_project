import React from 'react';
import ReactDOM from 'react-dom';
import App, { PLAYERS } from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<App initialPlayers={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
