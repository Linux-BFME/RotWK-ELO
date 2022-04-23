import logo from './logo.svg';
import './App.css';
import {initializeFirebase} from './firebase';
import GameSubmit from './GameSubmitForm.js';
import React from 'react';
import HowItWorks from './HowItWorks';
import ScoreLookup from './ScoreLookup';
import Background from './Background';

/**
 * Main App component that you see on the main page.
 * @typedef {object} Props
 * @extends {Component<Props>}
 * @return {React.Component}
 */
function App() {
  initializeFirebase();

  return (
    <div>
      <Background />
      <div className="App"
        id="App"
        style={{
          cursor: 'url(images/cursor.png),auto',
        }}
      >
        <header className="App-header">
          BFME ELO
        </header>
        <hr />
        <GameSubmit />
        <img src={logo} className="App-logo" alt="logo" />
        <ScoreLookup />
        <HowItWorks />
      </div>

    </div>
  );
}

export default App;
