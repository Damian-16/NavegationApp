import React from 'react'


import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const  MenuLateral=()=> {

    const {width}= useWindowDimensions();
  return (
    <Drawer.Navigator
    drawerType={width >= 700? 'permanent':'front'}
    drawerContent ={(props) => <MenuInterno {...props}/>}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Article" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
                       //props
const MenuInterno = ({navigation}:DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>

            {/* parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                source={{
                    uri:'https://previews.123rf.com/images/apoev/apoev1709/apoev170900088/85467744-default-avatar-anime-girl-profile-icon-grey-photo-manga-placeholder.jpg'
                }}
                style={styles.avatar}/>
            </View>

            {/* menu opciones */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                 style={{
                     ...styles.menuBoton,
                    flexDirection:'row'
                }}
                 onPress={()=>navigation.navigate("StackNavigator")}>
                        <Icon name="compass-outline" size={30} color='black' />
                    <Text style={styles.menuTexto}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{
                     ...styles.menuBoton,
                     flexDirection:'row'
                }}
                 onPress={()=>navigation.navigate("Article")}>
                     <Icon name="settings-outline" size={30} color='black'/>
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}