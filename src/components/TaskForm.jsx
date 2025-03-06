import React, { useState } from 'react';

export default function TaskForm({ setTasks }) {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!task || !status) return;

    const response = await fetch('https://farhan.mahbub.dev/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task, status }),
    });

    const data = await response.json();
    if (data.message === 'Task added') {
      
      setTasks((prev) => [...prev, { id: data.task.id, task, status }]);
      setTask(''); 
      setStatus('pending'); 
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-center">Add New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 w-full rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
