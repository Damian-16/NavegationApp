import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons'

interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
    
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>
            // <Button title="Menu" onPress={()=>navigation.toggleDrawer()}/>
            <TouchableOpacity
                style={{
                    marginLeft:10
                }}
                onPress={()=>navigation.toggleDrawer()}>
                    <Icon  name="menu-outline" size={30} color='black'  />
            </TouchableOpacity>
        })
    })
    
    
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pag 1</Text>
            <Button title="Ir ala Pagina 2" onPress={()=>navigation.navigate('Pagina2Screen')}/>
        </View>
    )
}
