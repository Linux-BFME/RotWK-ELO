import logo from './logo.svg';
import './App.css';
import {initializeFirebase} from './firebase';
import GameSubmit from './GameSubmitForm.js';
import React from 'react';
import HowItWorks from './HowItWorks';
import ScoreLookup from './ScoreLookup';

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
      <div style={{
        backgroundImage: 'url(images/background.webp)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // Add blur effect to background
        filter: 'blur(5px)',
        // Take up whole page
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        // Don't move on scroll
        transform: 'translateZ(0)',


      }}/>
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
