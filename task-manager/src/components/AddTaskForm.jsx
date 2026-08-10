import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddTaskForm({ onReset }) {
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
        border: '1px solid #3f5cd8',
        background: 'linear-gradient(180deg, #0e1550 0%, #090f3a 100%)',
        boxShadow: '0 14px 30px rgba(0, 0, 0, 0.35)',
        padding: '1rem',
        borderRadius: '14px'
      }}
    >
      <h3>Add New Task</h3>

      <div style={{ marginBottom: '0.5rem' }}>
        <input
          type="text"
          placeholder="Task Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '0.52rem 0.62rem', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <textarea
          placeholder="Task Description *"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '0.52rem 0.62rem', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <label style={{ color: '#c8d8ff' }}>
          Status:{' '}
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label style={{ color: '#c8d8ff' }}>
          Priority:{' '}
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-start' }}>
        <button
          type="submit"
          disabled={isFormInvalid}
          style={{
            padding: '0.4rem 0.8rem',
            backgroundColor: '#ffd447',
            borderColor: '#ffd447',
            color: '#161616',
            fontWeight: 700,
            cursor: isFormInvalid ? 'not-allowed' : 'pointer'
          }}
        >
          Add Task
        </button>
        <button
          type="button"
          onClick={onReset}
          style={{
            padding: '0.4rem 0.8rem',
            backgroundColor: '#ffd447',
            borderColor: '#ffd447',
            color: '#161616',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          Reset Defaults
        </button>
      </div>
    </form>
  );
}