import React from 'react';
import MapView from './components/User1View';
import './App.css';

function App1() {
  return (
    <div className="App1">
      <MapView zoom={15} center={{ lat: 32.74197573175059, lng: 74.86066465077062 }} />
    </div>
  );
}

export default App1;
