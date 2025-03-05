'use client'; // Mark this file as a client component

import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Page() {
  const [tasks, setTasks] = useState([]); 
  
  

  return (
    <div>
      <TaskForm setTasks={setTasks} />  
      <TaskList tasks={tasks} setTasks={setTasks} />  
    </div>
  );
}
