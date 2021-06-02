import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
    
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=><Button title="Menu" onPress={()=>navigation.toggleDrawer()}/>
        })
    })
    
    
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pag 1</Text>
            <Button title="Ir ala Pagina 2" onPress={()=>navigation.navigate('Pagina2Screen')}/>
        </View>
    )
}
