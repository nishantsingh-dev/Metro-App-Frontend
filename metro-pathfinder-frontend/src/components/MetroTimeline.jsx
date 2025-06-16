import React from 'react';
import './MetroTimeline.css'; // import your CSS

const MetroTimeline = ({ path }) => {
  if (!path || path.length === 0) {
    return <p className="no-path">No path found</p>;
  }
  const interchanges = new Set([
    "Kashmere Gate", 
    "Rajiv Chowk", 
    "Central Secretariat", 
    "Mandi House", 
    "Kalkaji Mandir", 
    "Botanical Garden",
    "Yamuna Bank",
    "Akshardham",
    "Lajpat Nagar"
  ]);
  
  return (
    <div className="timeline-container">
      {path.map((station, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
          <div className="station-name">
  {station} {interchanges.has(station) && <span title="Interchange">🔁</span>}
</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetroTimeline;
