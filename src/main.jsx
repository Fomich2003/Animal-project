import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnimalsProvider from './context/AnimalsContext.jsx'
import UserProvider from './context/UserContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AnimalsProvider>
        <App />
      </AnimalsProvider>
    </UserProvider>
  </StrictMode>
)
