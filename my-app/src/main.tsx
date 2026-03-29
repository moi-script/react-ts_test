import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from "@/components/ui/button"
import App from './App.tsx'

import { AuthProvider } from './hooks/Context.tsx'
import AuthPage from './pages/Authpage.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <AuthPage/>
    </AuthProvider>
  </StrictMode>
)
