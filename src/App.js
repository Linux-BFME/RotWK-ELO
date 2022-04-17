import logo from './logo.svg';
import './App.css';
import { initializeFirebase } from "./firebase";
import { updateScoreInDb } from "./database";
import GameSubmit from './GameSubmitForm.js';

function App() {
  initializeFirebase();


  return (
    <div className="App">
      <header className="App-header">
        <GameSubmit />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
