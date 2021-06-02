import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator=()=> {
    const {top:paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
    style={{paddingTop}}
    sceneContainerStyle={{
        backgroundColor:'white',
    }}
    tabBarOptions={{
     pressColor:colors.primary,
     showIcon:true,
     indicatorStyle:{
         backgroundColor:colors.primary
     },
     style:{
         borderTopColor:colors.primary,
         borderTopWidth:0,
         elevation:0,
     },

    }}
    screenOptions={({route})=>({
        tabBarIcon:({color,focused})=>{
        let iconName:string = '';
        switch(route.name){
            case 'ChatScreen':
                iconName='CH'
                break;
            case 'ContactScreen':
                iconName='CtC'
                break;
            case 'AlbumScreen':
                iconName='AL'
                break;
            }
            return  <Text>{iconName}</Text>

        }
    })}>
      <Tab.Screen name="ChatScreen" options={{title:'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactScreen"options={{title:'Contact'}} component={ContactScreen} />
      <Tab.Screen name="AlbumScreen"options={{title:'Album'}} component={AlbumScreen} />
    </Tab.Navigator>
  );
}