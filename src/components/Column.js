import React from 'react';
import Card from './Card';
import AddIcon from '../assets/add.svg';  
import MenuIcon from '../assets/3 dot menu.svg'; 
import './Column.css';

const Column = ({ title, icon, avatar, tasks }) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className="header-content">
          {avatar ? (
            <img src={avatar} alt={title} className="avatar-icon" />
          ) : (
            icon && <img src={icon} alt={title} className="priority-icon" />
          )}
          <h2>{title}</h2>
        </div>
        <div className="column-controls">
          <img src={AddIcon} alt="Add" className="add-icon" />
          <img src={MenuIcon} alt="Menu" className="menu-icon" />
        </div>
      </div>
      <div className="cards">
        {tasks.length > 0 ? tasks.map((task) => (
          <Card key={task.id} task={task} />
        )) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Column;

