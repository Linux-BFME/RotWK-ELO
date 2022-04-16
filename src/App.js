import logo from './logo.svg';
import './App.css';
import { initializeFirebase } from "./firebase";
import { updateScoreInDb } from "./database";

function App() {
  initializeFirebase();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <button onClick={() => updateScoreInDb("test", 50)}> Write to database </button>
      </header>
    </div>
  );
}

export default App;
