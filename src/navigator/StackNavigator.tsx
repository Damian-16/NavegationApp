import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import {Pagina1Screen} from '../screens/Pagina1Screen'
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';


const Stack = createStackNavigator();

export const  StackNavigator =()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{elevation:0},
        cardStyle:{
        backgroundColor:'white'
    }}}>
      <Stack.Screen name="Home" options={{title:"Home"}} component={Pagina1Screen} />
      <Stack.Screen name="pagina2"options={{title:"Notificaciones"}} component={Pagina2Screen} />
      <Stack.Screen name="pagina3"options={{title:"Notificado3"}} component={Pagina3Screen} />
      <Stack.Screen name="personaScreen"options={{title:"personita"}} component={PersonaScreen} />
     
    </Stack.Navigator>
  );
}


