import { createContext, useContext, useReducer } from 'react';
import { taskReducer, initialState } from '../reducer/taskReducer';

// 1. Create the Context object
export const TaskContext = createContext(null);

// 2. TaskProvider Component
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

// 3. Custom Hook for clean consumption across components
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}

