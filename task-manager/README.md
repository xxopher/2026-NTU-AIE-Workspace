# Module 2 Assignment: Task Manager

A React-based Task Manager application that allows users to view, add, delete, and filter tasks. Global application state is managed cleanly using React's `useReducer` and shared seamlessly across components via the `useContext` API. Client-side routing is powered by `react-router-dom`.

---

## 🛠️ Tech Stack & Concepts Used

- **React (Vite):** Core UI framework setup using Vite template (`react`).
- **React Router (`react-router-dom`):** Handles client-side navigation between the Task List view (`/tasks`) and Task Detail view (`/tasks/:id`), as well as redirecting `/` to `/tasks`.
- **`useReducer` Hook:** Manages consolidated state logic for tasks and current filter selection (`ADD_TASK`, `DELETE_TASK`, `SET_FILTER`).
- **Context API (`useContext`):** Provides global state and `dispatch` functions across the component tree without prop drilling.
- **Controlled Components (`useState`):** Manages local form state inside the `AddTaskForm` component.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Instructions

1. **Installation - Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_LINK>
   cd task-manager

2. **Install dependencies:**
   npm install

3. **Start the development server:**
   npm run dev

4. **Open in browser:**
    Navigate to http://localhost:5173 (or the local URL printed in your terminal).

## ✨ Features Implemented

### Core Requirements

- **Global State Management:** Initial state pre-seeded with 6 task objects covering various priorities and statuses.
- **Task Reducer (`taskReducer.js`):** Handles state updates immutably for:
  - `ADD_TASK`: Appends a new task object to the task list.
  - `DELETE_TASK`: Filters out a task by its unique `id`.
  - `SET_FILTER`: Updates the current filter string (`all`, `todo`, `in-progress`, `done`).
- **Task List View (`TaskListPage.jsx`):**
  - Displays tasks filtered by selected status.
  - Includes a "Delete" button for each task row.
  - Links task titles to their respective detail pages.
- **Add Task Form (`AddTaskForm.jsx`):**
  - Controlled inputs for Title, Description, Status, and Priority.
  - Dispatches `ADD_TASK` on form submission and clears inputs.
- **Task Detail View (`TaskDetailPage.jsx`):**
  - Dynamically extracts the task `id` using `useParams()`.
  - Displays title, description, status, priority, category, and due date.
  - Includes fallback handling ("Task not found") for invalid task IDs.
  - Provides a back navigation link to the task list.
- **Client-Side Routing (`App.jsx`):**
  - Base route `/` redirects automatically to `/tasks`.
  - `/tasks/:id` opens the detail view for a specific task.

---

## 🌟 Bonus Challenges Completed

### Easy Bonus Challenges

1. **Task Summary Count:** Displayed a live-updating task count directly above the task list (`"Showing X of Y tasks"`).
2. **Disabled Submit Button:** The "Add Task" submit button remains disabled until both required fields (**Title** and **Description**) contain non-whitespace text.

---

## 🤖 AI and Tools Used

In accordance with the assignment guidelines, AI assistance was utilized as follows:

- **Tools Used:** ChatGPT / Claude / Copilot *(specify which one you used)*
- **Purpose:**
  - Guidance on setting up `useReducer` action types and maintaining immutability.
  - Debugging React Router route matching and file export/import mismatches.
  - Structuring standard component hierarchy (`context`, `reducer`, `pages`, `components`).
- **Understanding:** All generated code patterns (Context creation, destructuring context values, dynamic parameter lookup with `useParams()`) were thoroughly reviewed and understood.

## Screenshots
<img width="722" height="1187" alt="image" src="https://github.com/user-attachments/assets/daba53b3-85f5-472b-98a9-f57a6f6c30e4" />
<img width="909" height="475" alt="image" src="https://github.com/user-attachments/assets/bae81217-8658-45ec-9586-5ee7d71e0ee7" />


