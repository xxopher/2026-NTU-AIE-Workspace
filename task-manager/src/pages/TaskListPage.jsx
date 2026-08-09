import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import AddTaskForm from '../components/AddTaskForm';

export default function TaskListPage() {
  const { state, dispatch } = useTasks();
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div>
      <h2>Task List</h2>
      <AddTaskForm />

      {/* Filter Bar */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
        {['all', 'todo', 'in-progress', 'done'].map((status) => (
          <button
            key={status}
            onClick={() => dispatch({ type: 'SET_FILTER', payload: status })}
            style={{
              fontWeight: filter === status ? 'bold' : 'normal',
              textTransform: 'capitalize',
              padding: '0.4rem 0.8rem',
              cursor: 'pointer'
            }}
          >
            {status}
          </button>
        ))}
      </div>

      <p>Showing {filteredTasks.length} of {tasks.length} tasks</p>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '0.75rem' }}>
            <Link to={`/tasks/${task.id}`}>
              <strong>{task.title}</strong>
            </Link>{' '}
            — <span>{task.status}</span> ({task.priority})
            <button
              style={{ marginLeft: '1rem', cursor: 'pointer' }}
              onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}