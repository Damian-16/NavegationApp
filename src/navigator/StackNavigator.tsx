import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    Pagina1Screen: undefined,//cuando no trae parametros la navegacion
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: {id:number,nombre:string},//cuando trae parametros
 //PersonaScreen y lo demas de esta fila se define por el name de Stack.Screen
}


const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator =()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{elevation:0},
        cardStyle:{
        backgroundColor:'white'
    }}}>
      <Stack.Screen name="Pagina1Screen" options={{title:"Home"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen"options={{title:"Notificaciones"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen"options={{title:"Notificado3"}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen"options={{title:"personita"}} component={PersonaScreen} />
     
    </Stack.Navigator>
  );
}


