export const initialState = {
  tasks: [
      {
    id: 1,
    title: 'Set up project repository',
    description: 'Initialise a Git repo, add a .gitignore, and push the first commit.',
    status: 'done',
    priority: 'high',
    category: 'Setup',
    dueDate: '2026-08-10'
  },
  {
    id: 2,
    title: 'Design database schema',
    description: 'Draft the ERD for the contacts and deals tables.',
    status: 'done',
    priority: 'high',
    category: 'Database',
    dueDate: '2026-08-12'
  },
  {
    id: 3,
    title: 'Build login page',
    description: 'Create a login form with email and password fields and basic validation.',
    status: 'in-progress',
    priority: 'high',
    category: 'Frontend',
    dueDate: '2026-08-15'
  },
  {
    id: 4,
    title: 'Write unit tests for reducer',
    description: 'Cover ADD_TASK, DELETE_TASK, and SET_FILTER with at least two cases each.',
    status: 'todo',
    priority: 'medium',
    category: 'Testing',
    dueDate: '2026-08-18'
  },
  {
    id: 5,
    title: 'Update README',
    description: 'Add setup instructions, a screenshot, and a description of the tech stack.',
    status: 'todo',
    priority: 'low',
    category: 'Documentation',
    dueDate: '2026-08-20'
  },
  {
    id: 6,
    title: 'Deploy to Vercel',
    description: 'Connect the GitHub repo to Vercel and configure environment variables.',
    status: 'todo',
    priority: 'medium',
    category: 'DevOps',
    dueDate: '2026-08-22'
  }
  ],
  filter: 'all',
  priorityFilter: 'all',
};

// 2. Task Reducer Function
export function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };

    case 'SET_PRIORITY_FILTER':
      return {
        ...state,
        priorityFilter: action.payload
      };

    case 'REORDER_TASKS':
      return {
        ...state,
        tasks: action.payload
      };

    case 'RESET_TASKS':
      return {
        ...state,
        tasks: initialState.tasks.map((task) => ({ ...task }))
      };

    default:
      return state;
  }
}
