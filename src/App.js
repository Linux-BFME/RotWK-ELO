import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import { initializeFirebase } from "./firebase";

function App() {
  initializeFirebase();

  function writeHelloToDatabase() {
    const db = getDatabase();
    set(ref(db, '/elo/test'), 50);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <button onClick={writeHelloToDatabase}> Write to database </button>
      </header>
    </div>
  );
}

export default App;
