import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import AddTaskForm from '../components/AddTaskForm';

export default function TaskListPage() {
  const { state, dispatch } = useTasks();
  const { tasks, filter, priorityFilter } = state;
  const [dragIndex, setDragIndex] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filter === 'all' || task.status === filter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    return matchesStatus && matchesPriority;
  });

  function reorderWithinFiltered(fromIndex, toIndex) {
    if (fromIndex === toIndex) return;
    if (fromIndex < 0 || fromIndex >= filteredTasks.length) return;
    if (toIndex < 0 || toIndex >= filteredTasks.length) return;

    const reorderedFiltered = [...filteredTasks];
    const [movedTask] = reorderedFiltered.splice(fromIndex, 1);
    reorderedFiltered.splice(toIndex, 0, movedTask);

    const filteredIds = new Set(filteredTasks.map((task) => task.id));
    const filteredQueue = [...reorderedFiltered];

    const reorderedGlobal = tasks.map((task) => {
      if (!filteredIds.has(task.id)) return task;
      return filteredQueue.shift();
    });

    dispatch({ type: 'REORDER_TASKS', payload: reorderedGlobal });
  }

  function moveWithinFiltered(index, direction) {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= filteredTasks.length) return;
    reorderWithinFiltered(index, targetIndex);
  }

  function moveUp(index) {
    moveWithinFiltered(index, -1);
  }

  function moveDown(index) {
    moveWithinFiltered(index, 1);
  }

  function resetTasks() {
    const confirmed = window.confirm('Reset all tasks to default sample data?');
    if (!confirmed) return;
    dispatch({ type: 'RESET_TASKS' });
  }

  function handleDragStart(index) {
    setDragIndex(index);
  }

  function handleDragEnd() {
    setDragIndex(null);
  }

  function handleDrop(dropIndex) {
    if (dragIndex === null) return;
    reorderWithinFiltered(dragIndex, dropIndex);
    setDragIndex(null);
  }

  function getStatusBadgeStyle(status) {
    const palette = {
      todo: { bg: '#e8f1ff', text: '#1f4aa0' },
      'in-progress': { bg: '#fff4dc', text: '#8a5a00' },
      done: { bg: '#e6f8ec', text: '#1d6f3a' }
    };

    const colors = palette[status] || { bg: '#efefef', text: '#333333' };
    return {
      backgroundColor: colors.bg,
      color: colors.text,
      border: `1px solid ${colors.text}33`,
      borderRadius: '999px',
      padding: '0.08rem 0.32rem',
      fontSize: '0.64rem',
      fontWeight: 600,
      lineHeight: 1.05,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      textTransform: 'capitalize'
    };
  }

  function getPriorityBadgeStyle(priority) {
    const palette = {
      high: { bg: '#fde8e8', text: '#9b1c1c' },
      medium: { bg: '#fff4dc', text: '#8a5a00' },
      low: { bg: '#e9f7ef', text: '#1f7a45' }
    };

    const colors = palette[priority] || { bg: '#efefef', text: '#333333' };
    return {
      backgroundColor: colors.bg,
      color: colors.text,
      border: `1px solid ${colors.text}33`,
      borderRadius: '999px',
      padding: '0.08rem 0.32rem',
      fontSize: '0.64rem',
      fontWeight: 600,
      lineHeight: 1.05,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      textTransform: 'capitalize'
    };
  }

  function getFilterChipStyle(type, value, isActive) {
    const statusPalette = {
      todo: { bg: '#e8f1ff', text: '#1f4aa0' },
      'in-progress': { bg: '#fff4dc', text: '#8a5a00' },
      done: { bg: '#e6f8ec', text: '#1d6f3a' }
    };
    const priorityPalette = {
      high: { bg: '#fde8e8', text: '#9b1c1c' },
      medium: { bg: '#fff4dc', text: '#8a5a00' },
      low: { bg: '#e9f7ef', text: '#1f7a45' }
    };

    const allColors = { bg: '#f2f2f2', text: '#555555' };
    const palette = type === 'status' ? statusPalette : priorityPalette;
    const colors = value === 'all' ? allColors : (palette[value] || allColors);

    if (!isActive) {
      return {
        backgroundColor: '#ffffff',
        color: '#666666',
        border: '1px solid #cfcfcf',
        borderRadius: '999px',
        padding: '0.08rem 0.32rem',
        fontSize: '0.64rem',
        fontWeight: 500,
        lineHeight: 1.05,
        cursor: 'pointer',
        textTransform: 'capitalize'
      };
    }

    return {
      backgroundColor: colors.bg,
      color: colors.text,
      border: `1px solid ${colors.text}33`,
      borderRadius: '999px',
      padding: '0.08rem 0.32rem',
      fontSize: '0.64rem',
      fontWeight: 600,
      lineHeight: 1.05,
      cursor: 'pointer',
      textTransform: 'capitalize'
    };
  }

  return (
    <div>
      <AddTaskForm onReset={resetTasks} />

      <br />
      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'baseline',
          gap: '0.45rem',
          marginBottom: '0.25rem',
          width: '100%'
        }}
      >
        <h2 style={{ margin: 0 }}>Task List</h2>
        <span style={{ fontSize: '0.88rem', color: '#666' }}>
          ({filteredTasks.length} of {tasks.length} tasks)
        </span>
      </div>

      <p id="reorder-help" style={{ fontSize: '0.78rem', color: '#666', fontStyle: 'italic' }}>
        *Reorder tasks by dragging a row, or use the up and down buttons for keyboard control.*
      </p>

      <br />

      {/* Filter Bar */}
      <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#666', minWidth: '3.8rem', textAlign: 'left' }}>
            Status
          </span>
          {['all', 'todo', 'in-progress', 'done'].map((status) => (
            <button
              key={status}
              onClick={() => dispatch({ type: 'SET_FILTER', payload: status })}
              style={getFilterChipStyle('status', status, filter === status)}
            >
              {status}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#666', minWidth: '3.8rem', textAlign: 'left' }}>
            Priority
          </span>
          {['all', 'low', 'medium', 'high'].map((priority) => (
            <button
              key={priority}
              onClick={() => dispatch({ type: 'SET_PRIORITY_FILTER', payload: priority })}
              style={getFilterChipStyle('priority', priority, priorityFilter === priority)}
            >
              {priority}
            </button>
          ))}
        </div>
      </div>

      <ul aria-describedby="reorder-help">
        {filteredTasks.map((task, index) => (
          <li
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            aria-grabbed={dragIndex === index}
            aria-label={`Task ${task.title}. Draggable item ${index + 1} of ${filteredTasks.length}.`}
            style={{
              marginBottom: '0.75rem',
              backgroundColor: dragIndex === index ? '#f4f4f4' : '#ffffff',
              padding: '0.7rem 0.8rem',
              borderRadius: '10px',
              border: '1px solid #d6d6d6',
              boxShadow: dragIndex === index ? '0 2px 8px rgba(0, 0, 0, 0.12)' : '0 1px 3px rgba(0, 0, 0, 0.08)',
              cursor: dragIndex === index ? 'grabbing' : 'grab',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <button
              type="button"
              onClick={() => moveUp(index)}
              disabled={index === 0}
              style={{ marginRight: '0.4rem', cursor: 'pointer' }}
              aria-label={`Move ${task.title} up`}
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => moveDown(index)}
              disabled={index === filteredTasks.length - 1}
              style={{ marginRight: '0.6rem', cursor: 'pointer' }}
              aria-label={`Move ${task.title} down`}
            >
              ↓
            </button>
            <span
              style={{ marginRight: '0.6rem', color: '#666' }}
              title="Drag to reorder"
              aria-hidden="true"
            >
              ⋮⋮
            </span>

            <Link to={`/tasks/${task.id}`}>
              <strong style={{ fontSize: '0.94rem' }}>{task.title}</strong>
            </Link>{' '}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.32rem' }}>
              <span style={getStatusBadgeStyle(task.status)}>{task.status}</span>
              <span style={getPriorityBadgeStyle(task.priority)}>{task.priority}</span>
              <button
                style={{ marginLeft: '0.45rem', cursor: 'pointer' }}
                onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}