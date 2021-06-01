import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import {Pagina1Screen} from '../screens/Pagina1Screen'
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';


const Stack = createStackNavigator();

export const  StackNavigator =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Pagina1Screen} />
      <Stack.Screen name="Notifications" component={Pagina2Screen} />
      <Stack.Screen name="Profile" component={Pagina3Screen} />
     
    </Stack.Navigator>
  );
}


