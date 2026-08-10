import { createContext, useContext, useEffect, useReducer } from 'react';
import { taskReducer, initialState } from '../reducer/taskReducer';

const TASKS_STORAGE_KEY = 'task-manager.tasks';

function initTaskState(baseState) {
  try {
    const saved = localStorage.getItem(TASKS_STORAGE_KEY);
    if (!saved) return baseState;

    const parsed = JSON.parse(saved);

    // Backward compatible: old format stored only an array of tasks.
    if (Array.isArray(parsed)) {
      return {
        ...baseState,
        tasks: parsed
      };
    }

    if (
      parsed &&
      typeof parsed === 'object' &&
      Array.isArray(parsed.tasks) &&
      typeof parsed.filter === 'string'
    ) {
      return {
        ...baseState,
        tasks: parsed.tasks,
        filter: parsed.filter
      };
    }

    return baseState;
  } catch {
    return baseState;
  }
}

// 1. Create the Context object
export const TaskContext = createContext(null);

// 2. TaskProvider Component
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState, initTaskState);

  useEffect(() => {
    try {
      localStorage.setItem(
        TASKS_STORAGE_KEY,
        JSON.stringify({ tasks: state.tasks, filter: state.filter })
      );
    } catch {
      // ignore storage failures
    }
  }, [state.tasks, state.filter]);

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

