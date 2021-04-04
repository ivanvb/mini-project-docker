import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [d, setD] = useState(null);
  useEffect(() => {
    async function f(){
      const r = await fetch("http://localhost:3001/");
      const data = await r.json();
      console.log(data)

      setD({...data})
    }

    f();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          {d !== null ? JSON.stringify(d) : ""}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
