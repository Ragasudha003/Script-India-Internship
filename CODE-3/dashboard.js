import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="top-bar">
        <select>
          <option>VAPI</option>
        </select>
        <input type="date" />
        <button>View</button>
      </div>
      <div className="cards">
        <div className="card violet">10<br />Total Employee</div>
        <div className="card orange">4<br />Total Present</div>
        <div className="card blue">6<br />Total Absent</div>
        <div className="card red">4<br />Total Missed Punch</div>
        <div className="card purple">0<br />Total Visit</div>
      </div>
    </div>
  );
}

export default Dashboard;
