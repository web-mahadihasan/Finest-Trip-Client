import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './routes/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import AppContext from './provider/AppContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <AuthProvider> 
          <RouterProvider router={Router}/>
      </AuthProvider>
    </AppContext>
  </StrictMode>,
)
