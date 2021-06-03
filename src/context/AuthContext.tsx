// definir como luce y que informacion tendre

import React,{ createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

export interface AuthState{
    isLoggedIn:boolean;
    username?:string;
    favoriteIcon?:string;
}
// asi va a lucir


//estado inicial
export const authInitialState:AuthState ={
    isLoggedIn:false,
    username:undefined,
    favoriteIcon:undefined
}

//lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState:AuthState;
    signIn:()=>void;
}

//crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

//componente proveedor del estado
export const AuthProvider=({children}:any)=>{

          //este se usa en el provider
    const [authState, dispatch] = useReducer(authReducer,authInitialState);

          //se va como valor de provider
    const signIn =()=>{
        dispatch({type:'signIn'})
    }




    return(
        <AuthContext.Provider value={{
            // authState:authInitialState,
            authState:authState,
            signIn:signIn,
        }}>
            {children}
        </AuthContext.Provider>

    )
}