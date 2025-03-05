'use client';

import React, { useEffect, useState } from 'react';

export default function TaskList({ tasks, setTasks }) {

  // Fetch tasks when the component mounts
  useEffect(() => {
    // console.log("requesting tasks from backend");

    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data.tasks || []);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [setTasks]); // Empty array ensures this runs only once after the initial mount

  const handleComplete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'completed' }),
      });

      const data = await response.json();

      if (data.message === 'Task updated') {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, status: 'completed' } : task
          )
        );
      }
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.message === 'Task deleted') {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="space-y-6 mt-6">
      <div className="border-t border-gray-300 pt-4">
        <h2 className="text-xl font-semibold mb-4">All Tasks</h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 transition-all"
            >
              <div>
                <span className="font-semibold text-lg">{task.task}</span>
                <div className="text-sm text-gray-500 mt-1">{task.status}</div>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
                  onClick={() => handleComplete(task.id)}
                >
                  Complete
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
