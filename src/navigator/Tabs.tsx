import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

const Tab = createBottomTabNavigator();

export const Tabs=()=> {
  return (
    <Tab.Navigator
    tabBarOptions={{
    activeTintColor:colors.primary,
    style:{
        borderTopColor:colors.primary,
        borderTopWidth:0,
        elevation:0,
    },
    labelStyle:{
        fontSize:15
    }
}}
                     
    screenOptions={({route})=>({
                    //props
        tabBarIcon:({color,focused,size})=>{
            let iconName :string=''
            switch(route.name){
                case 'Tab1Screen':
                    iconName='T1'
                    break;
                case 'Tab2Screen':
                    iconName='T2'
                    break;
                case 'StackNavigator':
                    iconName='Stk'
                    break;
            }
            return <Text>{iconName}</Text>
        }
    })}

    >
      <Tab.Screen name="Tab1Screen" options={{title:"tab1"}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title:"tab2"}} component={TopTabNavigator} />
      <Tab.Screen name="StackNavigator" options={{title:"Stack"}} component={StackNavigator} />
    </Tab.Navigator>
  );
}
