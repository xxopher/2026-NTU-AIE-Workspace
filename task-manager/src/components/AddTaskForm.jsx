import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddTaskForm() {
  const { dispatch } = useTasks();

  // 1. Controlled component local state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [priority, setPriority] = useState('medium');

  // 2. Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(), // Generate a unique ID using current timestamp
      title,
      description,
      status,
      priority,
      category: 'General',
      dueDate: new Date().toISOString().split('T')[0]
    };

    // Dispatch action to reducer
    dispatch({ type: 'ADD_TASK', payload: newTask });

    // Reset local form inputs on submit
    setTitle('');
    setDescription('');
    setStatus('todo');
    setPriority('medium');
  };

  // Bonus Challenge: Disable button if required fields are empty
  const isFormInvalid = !title.trim() || !description.trim();

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '2rem',
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px'
      }}
    >
      <h3>Add New Task</h3>

      <div style={{ marginBottom: '0.5rem' }}>
        <input
          type="text"
          placeholder="Task Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '0.4rem', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <textarea
          placeholder="Task Description *"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '0.4rem', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <label>
          Status:{' '}
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label>
          Priority:{' '}
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      <button type="submit" disabled={isFormInvalid} style={{ cursor: isFormInvalid ? 'not-allowed' : 'pointer' }}>
        Add Task
      </button>
    </form>
  );
}