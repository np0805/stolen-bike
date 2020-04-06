import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Bikes from './Component/Bikes';
// import BikeList from './Component/BikeList'

function App() {
  return (
    <div className="App">
      <Header />
      <Bikes />
      {/* <BikeList /> */}
    </div>
  );
}

export default App;
