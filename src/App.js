import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className="App">
      {
        loading ?

        <ClipLoader
          color={'#F37A24'}
          loading={loading}
          //cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      
        :
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      }
    </div>
  );
}

export default App;
