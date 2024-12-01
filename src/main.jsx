import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/LandingPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminPage from './pages/AdminPage.jsx'
import LoginAdmin from './pages/LoginAdmin.jsx'
import MahasantriPage from './pages/MahasantriPage.jsx'
import MentorPage from './pages/MentorPage.jsx'
import SetoranPage from './pages/SetoranPage.jsx'

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
  },
  {
    path: '/mahasantri',
    element: <MahasantriPage />,
  },
  {
    path: '/mentor',
    element: <MentorPage />,
  },
  {
    path: '/setoran',
    element: <SetoranPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
