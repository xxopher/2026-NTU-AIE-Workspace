import { useParams, Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

export default function TaskDetailPage() {
  const { id } = useParams();
  const { state } = useTasks();
  const { tasks } = state;

  // Convert URL string param to number for lookup
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div>
        <h2>Task not found</h2>
        <Link to="/tasks">← Back to Task List</Link>
      </div>
    );
  }

  // Support older/newly created task shapes and preserve multiline descriptions.
  const fullDescription =
    task.description ?? task.details ?? task.desc ?? 'No description provided.';

  return (
    <div>
      <Link to="/tasks">← Back to Task List</Link>
      <h2>{task.title}</h2>
      
      <div style={{ marginTop: '1rem', lineHeight: '1.8' }}>
        <p>
          <strong>Description:</strong>{' '}
          <span style={{ whiteSpace: 'pre-wrap' }}>{fullDescription}</span>
        </p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        {task.category && <p><strong>Category:</strong> {task.category}</p>}
        {task.dueDate && <p><strong>Due Date:</strong> {task.dueDate}</p>}
      </div>
    </div>
  );
}