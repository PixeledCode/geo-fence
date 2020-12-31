import React from 'react';
import MapView from './components/User2View';
import './App.css';

function App2() {
  return (
    <div className="App2">
      <MapView zoom={15} center={{ lat: 32.74197573175059, lng: 74.86066465077062 }} />
    </div>
  );
}

export default App2;
