// import React, { createContext, useContext, useReducer, type ReactNode } from "react";

// // 1. Types
// interface AuthState {
//   user: string | null;
//   isAuthenticated: boolean;
// }

// type AuthAction =  
//   | { type: 'LOGIN'; payload: string }
//   | { type: 'LOGOUT' };

// // 2. The Reducer (Logic separated from UI)
// const authReducer = (state: AuthState, action: AuthAction): AuthState => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { user: action.payload, isAuthenticated: true };
//     case 'LOGOUT':
//       return { user: null, isAuthenticated: false };
//     default:
//       return state;
//   }
// };

// // 3. The Context (Initialize as undefined for safety)
// const AuthContext = createContext<{
//   state: AuthState;
//   dispatch: React.Dispatch<AuthAction>;
// } | undefined>(undefined);



// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(authReducer, { user: null, isAuthenticated: false });

//   // Optimization: Memoize the value object
//   const value = React.useMemo(() => ({ state, dispatch }), [state]);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };




// const LoginButton = () => {
//   const { dispatch } = useAuth(); // Clean and Type-safe!

//   return <button onClick={() => dispatch({ type: 'LOGIN', payload: 'Gemini' })}>Login</button>;
// };












// import React, { createContext, useContext, useState, type ReactNode } from 'react';

// interface AuthContextType {
//   user: string | null;
//   login: (name: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<string | null>(null);

//   const login = (name: string) => setUser(name);
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };





// // Navigate
// import { Navigate, useLocation } from 'react-router-dom';

// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     // Redirect to login, but save the current location so we can go back after login
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };



// // Login Page


// import { useNavigate, useLocation } from 'react-router-dom';

// const LoginPage = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Where did the user come from? Default to home.
//   const from = location.state?.from?.pathname || "/";

//   const handleLogin = () => {
//     login("User_123");
//     navigate(from, { replace: true });
//   };

//   return <button onClick={handleLogin}>Log In</button>;
// };




// // App.tsx


// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/" element={<h1>Home (Public)</h1>} />

//           {/* Protected Routes */}
//           <Route 
//             path="/dashboard" 
//             element={
//               <ProtectedRoute>
//                 <h1>Dashboard (Private)</h1>
//               </ProtectedRoute>
//             } 
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }



// // AuthContext
// // Navigate
// // Login
// // App

