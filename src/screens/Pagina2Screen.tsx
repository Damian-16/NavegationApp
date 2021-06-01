import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
    const navigator=useNavigation()
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pag 2</Text>
            <Button title="Ir ala Pagina 3" onPress={()=>navigator.navigate('pagina3')}/>
            <TouchableOpacity onPress={()=>navigator.navigate('personaScreen',
            {
                id:1,
                nombre:'pedro'
            })}>
                <Text>Ir ala persona</Text></TouchableOpacity>
        </View>
    )
}
