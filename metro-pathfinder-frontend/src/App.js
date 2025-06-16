import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MetroTimeline from './components/MetroTimeline';
import './App.css'; 

function App() {
  const [stations, setStations] = useState([]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [path, setPath] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/stations')
      .then(res => setStations(Array.from(res.data).sort()))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = () => {
    axios.get(`http://localhost:8080/api/path?source=${source}&destination=${destination}`)
      .then(res => setPath(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
  <h2 className="heading">Delhi Metro Route Finder</h2>
  <div className="form-group">
    <label htmlFor="source">Source Station</label>
    <select
      id="source"
      className="form-select"
      value={source}
      onChange={(e) => setSource(e.target.value)}
    >
      <option value="">Select Source</option>
      {stations.map((station) => (
        <option key={station} value={station}>
          {station}
        </option>
      ))}
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="destination">Destination Station</label>
    <select
      id="destination"
      className="form-select"
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
    >
      <option value="">Select Destination</option>
      {stations.map((station) => (
        <option key={station} value={station}>
          {station}
        </option>
      ))}
    </select>
  </div>

  <button onClick={handleSubmit}>Find Route</button>

  <MetroTimeline path={path} />
</div>

  );
}

export default App;
