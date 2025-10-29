import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/components_css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
