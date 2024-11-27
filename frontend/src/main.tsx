import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNav from './auth/Auth0ProviderWithNav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNav>
        <AppRoutes />
      </Auth0ProviderWithNav>
    </Router>
  </StrictMode>,
)
