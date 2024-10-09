import React, { useState, useEffect } from 'react';
import DisplayDropdown from './components/DisplayDropdown';
import Board from './components/Board';
import './App.css';  

const App = () => {
  //For LocalStorage
  const [tasks, setTasks] = useState([]);
  const [groupBy, setGroupBy] = useState(() => localStorage.getItem('groupBy') || 'status');
  const [orderBy, setOrderBy] = useState(() => localStorage.getItem('orderBy') || 'priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        const tasksWithUsers = data.tickets.map(ticket => {
          const user = data.users.find(u => u.id === ticket.userId);
          return {
            ...ticket,
            user: user ? { name: user.name, available: user.available, avatar: user.avatar } : null
          };
        });
        setTasks(tasksWithUsers);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  //Saving groupBy to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
  }, [groupBy]);

  //Saving orderBy to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('orderBy', orderBy);
  }, [orderBy]);

  return (
    <div className="app">
      <div className="navbar">
        <DisplayDropdown groupBy={groupBy} setGroupBy={setGroupBy} orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>
      <Board tasks={tasks} groupBy={groupBy} orderBy={orderBy} />
    </div>
  );
};

export default App;
