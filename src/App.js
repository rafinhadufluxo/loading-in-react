import React, { useState, useEffect } from 'react';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

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
          <ClipLoader
            color={"#36d7b7"}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )
      
        : (
        
          <header className="App-header">
            ola teste teste HSUAHS
          </header>
        )
      }
    </div>
  );
}

export default App;
