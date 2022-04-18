import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      setResponse(response);
      console.log(`useEffect`);
      console.log(`response?.body = ${response?.body}`)
    })
  }, []);

  return (
    <div className="App">
      <h1>Hello from the frontend!</h1>
      <h1>{response?.body}</h1>
    </div>
  );
}

export default App;
