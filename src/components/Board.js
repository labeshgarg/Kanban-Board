import React from 'react';
import Column from './Column';
import UrgentIcon from '../assets/SVG - Urgent Priority colour.svg'; 
import HighPriorityIcon from '../assets/Img - High Priority.svg'; 
import MediumPriorityIcon from '../assets/Img - Medium Priority.svg'; 
import LowPriorityIcon from '../assets/Img - Low Priority.svg'; 
import NoPriorityIcon from '../assets/No-priority.svg'; 
import TodoIcon from '../assets/To-do.svg';
import InProgressIcon from '../assets/in-progress.svg'; 
import DoneIcon from '../assets/Done.svg'; 
import CancelledIcon from '../assets/Cancelled.svg'; 
import BacklogIcon from '../assets/Backlog.svg';
import './Board.css';

//priority categories
const priorityCategories = {
  4: { label: 'Urgent', icon: UrgentIcon },
  3: { label: 'High', icon: HighPriorityIcon },
  2: { label: 'Medium', icon: MediumPriorityIcon },
  1: { label: 'Low', icon: LowPriorityIcon },
  0: { label: 'No Priority', icon: NoPriorityIcon },
};

//status categories
const statusCategories = {
  'Todo': { label: 'Todo', icon: TodoIcon },
  'In progress': { label: 'In Progress', icon: InProgressIcon },
  'Done': { label: 'Done', icon: DoneIcon },
  'Cancelled': { label: 'Cancelled', icon: CancelledIcon },
  'Backlog': { label: 'Backlog', icon: BacklogIcon },
};

//Function to sort tasks based on 'priority' or 'title'
const sortTasks = (tasks, orderBy) => {
  if (orderBy === 'priority') {
    return [...tasks].sort((a, b) => a.priority - b.priority);
  }
  if (orderBy === 'title') {
    return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
  }
  return tasks;
};

//Group tasks based on groupBy (priority, status, or user)
const groupTasks = (tasks, groupBy) => {
  return tasks.reduce((grouped, task) => {
    const key = task[groupBy]?.name || task[groupBy] || 'No Priority';  // Handle user.name, priority, or status
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(task);
    return grouped;
  }, {});
};

const Board = ({ tasks, groupBy, orderBy }) => {
  const groupedTasks = groupTasks(tasks, groupBy);

  return (
    <div className="board">
      {Object.keys(groupedTasks).map(group => {
        //If grouping by priority, show priority labels and icons
        const isPriorityGroup = groupBy === 'priority' && priorityCategories[group];
        //If grouping by status, show status labels and icons
        const isStatusGroup = groupBy === 'status' && statusCategories[group];
        //If grouping by user, get the user's avatar
        const user = tasks.find(task => task.user?.name === group)?.user;
        const avatar = user?.avatar;

        return (
          <Column 
            key={group} 
            title={
              isPriorityGroup 
                ? `${group} - ${priorityCategories[group].label}` 
                : isStatusGroup 
                ? statusCategories[group].label 
                : group
            }
            icon={
              isPriorityGroup 
                ? priorityCategories[group].icon 
                : isStatusGroup 
                ? statusCategories[group].icon 
                : null
            }  
            avatar={avatar}  
            tasks={sortTasks(groupedTasks[group], orderBy)} 
          />
        );
      })}
    </div>
  );
};

export default Board;
