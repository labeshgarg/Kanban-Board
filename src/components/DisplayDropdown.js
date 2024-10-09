import React from 'react';
import DisplayIcon from '../assets/Display.svg'; 
import DownIcon from '../assets/down.svg';
import './Dropdown.css';

const DisplayDropdown = ({ groupBy, setGroupBy, orderBy, setOrderBy }) => {
  return (
    <div className="dropdown">
      <button className="dropdown-button">
        <img src={DisplayIcon} alt="Display Icon" className="display-icon" />
        Display
        <img src={DownIcon} alt="Dropdown Icon" className="dropdown-icon" />
      </button>
      <div className="dropdown-content">
        <div className="dropdown-item">
          <label>Grouping</label>
          <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="dropdown-item">
          <label>Ordering</label>
          <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DisplayDropdown;
