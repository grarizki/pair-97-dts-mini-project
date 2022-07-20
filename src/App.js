import './App.css';
import React from 'react';
import Row from './components/Row/Row';
import requests from './requests.js'

function App() {


  return (
    <div className="App">
      <Row title="Movies" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
