import React,{ createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

// definir como luce y que informacion tendre
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
    logout:()=>void;
    changeFavoriteIcon: (iconName: string) => void;
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
    const logout =()=>{
        dispatch({type:'logout'})
    }
   
    const changeFavoriteIcon = (iconName:string)=>{
        dispatch({type:'changeFavIcon',payload:iconName})
    }


    return(
        <AuthContext.Provider value={{
            // authState:authInitialState,
            authState:authState,
            signIn:signIn,
            logout:logout,
            changeFavoriteIcon,
        }}>
            {children}
        </AuthContext.Provider>

    )
}