import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
    const navigator=useNavigation()
    return (
        <View style={styles.globalMargin}>
            <Text>Pag 2</Text>
            <Button title="Ir ala Pagina 3" onPress={()=>navigator.navigate('pagina3')}/>
        </View>
    )
}
