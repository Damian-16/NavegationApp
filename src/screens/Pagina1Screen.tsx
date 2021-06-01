import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pag 1</Text>
            <Button title="Ir ala Pagina 2" onPress={()=>navigation.navigate('Pagina2Screen')}/>
        </View>
    )
}
