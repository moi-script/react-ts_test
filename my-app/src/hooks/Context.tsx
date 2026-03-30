import React, { useContext, createContext, type ReactNode, useReducer, Children } from "react";



interface AuthState {
    user : SignPayload | null,
    isAuthenticated : boolean,
    isLoading : boolean,
    error : string | null
}
 interface SignPayload {
    email : string,
    password :string,
    token? : string,
    fullname : string,
    birthdate? : string,
}


 export type AuthAction = 
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: SignPayload }
  | { type: "SIGNIN_SUCCCESS"; payload: SignPayload }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };


const AuthContext = createContext<{
    state : AuthState,
    dispatch : React.Dispatch<AuthAction>
} | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch(action.type) {
        case "LOGIN_START":
            return { ...state, isLoading: true, error: null };
        case "LOGIN_SUCCESS": 
            return { user: action.payload, isAuthenticated: true, isLoading: false, error: null };
        case "LOGIN_FAILURE":
            return { ...state, isLoading: false, error: action.payload };
        case "LOGOUT": 
            return { user: null, isAuthenticated: false, isLoading: false, error: null };
        case "SIGNIN_SUCCCESS" : 
            return { user: action.payload, isAuthenticated: true, isLoading: false, error: null };
        default: 
            return state;
    }
}


export const AuthProvider = ({children} : {children : ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, {user : null, isAuthenticated : false, isLoading : false, error : null });

    const value = React.useMemo(() => ({state, dispatch}), [state]);

    return <AuthContext.Provider  value={value}>
        {children}
    </AuthContext.Provider>
}



export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("Context must be within provider");
    }
    return context
}


