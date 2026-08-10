import { Routes, Route, Navigate } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import TaskDetailPage from './pages/TaskDetailPage';

export default function App() {
  return (
    <div
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '1.2rem 1.1rem 2rem'
      }}
    >
      <h1>Task Manager</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
      </Routes>
    </div>
  );
}