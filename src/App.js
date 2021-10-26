import practice from './practice.svg';
import ide from './ide.svg'
import logo from './qode_blue.svg'
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="Greet">Hi Username.</div>

      <header className="App-header">
        <div className="Row">
          <img src={ide} className="App-image" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec.
          </p>
         <button className="Button">Open Online IDE</button>
        </div>
        <div><br></br></div>
        <div className="Row">
          <img src={practice} className="App-image" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec.
          </p>
          <button className="Button">Start Practicing</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
