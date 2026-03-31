import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from './hooks/Protect.tsx'
import { AuthProvider } from './hooks/Context.tsx'
import AuthPage from './pages/Authpage.tsx'
import { Dashboard } from './pages/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard /> 
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>

    </AuthProvider>
  </StrictMode>
)
