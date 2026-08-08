import { useParams } from 'react-router-dom'

function TaskDetail() {
  const { id } = useParams();
  return (
    <div className="task-detail">
      <h1>Task Detail</h1>
      <p>Task ID: {id}</p>
    </div>
  );
}
export default TaskDetail;  