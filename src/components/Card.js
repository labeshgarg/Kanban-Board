import React, { useState } from 'react';
import BacklogIcon from '../assets/Backlog.svg';
import CancelledIcon from '../assets/Cancelled.svg';
import DoneIcon from '../assets/Done.svg';
import InProgressIcon from '../assets/in-progress.svg';
import TodoIcon from '../assets/To-do.svg';
import './Card.css';

const statusIcons = {
  Backlog: BacklogIcon,
  'In progress': InProgressIcon,
  Done: DoneIcon,
  Cancelled: CancelledIcon,
  Todo: TodoIcon,
};

// Function to get initials
const getInitials = (name) => {
  if (!name) return '';
  return name.split(' ').map((n) => n[0]).join('').toUpperCase();
};

const Card = ({ task }) => {
  const { id, title, status, tag, user } = task;
  const statusIcon = statusIcons[status] || null;
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine user status icon (availability)
  const userStatusIcon = user?.available ? InProgressIcon : CancelledIcon;

  // Handle card click for expansion
  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="card-header">
        <span>{id}</span>
        {user && (
          <div className="user-info">
            <div className="user-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="avatar" />
              ) : (
                <div className="user-initials">{getInitials(user.name)}</div>
              )}
              <img src={userStatusIcon} alt="Status" className="status-icon-overlay" />
            </div>
          </div>
        )}
      </div>
      <div className="card-body">
        {statusIcon && <img src={statusIcon} alt={status} className="status-icon" />}
        <div>
          <h3 className="card-title">{title}</h3>
          {tag && <div className="card-tag">{tag[0]}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
