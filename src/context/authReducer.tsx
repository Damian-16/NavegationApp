
import { AuthState } from './AuthContext';


type AuthAction = {type:'signIn'}

             //genera estado
export const authReducer =(state:AuthState,action:AuthAction): AuthState=>{
    
   switch (action.type) {
       case 'signIn':
           //state.isLoggedIn=true esto NO se hace porque muta el estado original

           return {
               ...state,
               isLoggedIn:true,
               username:'no-username-yet' //de esta manera regreso un nuevo estado sin mutar el original
           }
           
           break;
   
       default:
           return state;
           break;
   }

}