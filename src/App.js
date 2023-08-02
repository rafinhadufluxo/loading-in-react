import React, { useState, useEffect } from 'react';
import './App.css';
import {Vortex} from "react-loader-spinner";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className="App-header">
      {
        loading ? (
          < Vortex
            visible={true}
            height="100"
            width="100"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            message = "Loading Message"
            wrapperClass="vortex-wrapper"
            colors={['purple', 'purple', 'purple', 'purple', 'purple', 'purple']}
          />
        ) : (

          <header className="App-header">
             ola teste teste HSUAHS
          </header>
        )
      }
    </div>
  );
}

export default App;
