import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/LandingPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminPage from './pages/AdminPage.jsx'
import LoginAdmin from './pages/LoginAdmin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginAdmin />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
