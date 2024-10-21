import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './LandingPage.jsx'
import LandingPage from './LandingPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
