import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
//import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
//<React.StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <App />
      </TaskProvider>
    </BrowserRouter>
//  </React.StrictMode>
);