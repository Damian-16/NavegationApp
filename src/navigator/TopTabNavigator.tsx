import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

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
                iconName='chatbubble-ellipses-outline'
                break;
            case 'ContactScreen':
                iconName='people-outline'
                break;
            case 'AlbumScreen':
                iconName='albums-outline'
                break;
            }
            // return  <Text>{iconName}</Text>
            return <Icon name={iconName} size={20} color={color}/>

        }
    })}>
      <Tab.Screen name="ChatScreen" options={{title:'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactScreen"options={{title:'Contact'}} component={ContactScreen} />
      <Tab.Screen name="AlbumScreen"options={{title:'Album'}} component={AlbumScreen} />
    </Tab.Navigator>
  );
}