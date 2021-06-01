import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

 interface Props extends StackScreenProps<any,any>{};


export const PersonaScreen = ({route}:Props) => {
    const params = route.params;
    // console.log(JSON.stringify(props,null,3))


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Persona {
                JSON.stringify(params,null,3)
            }</Text>
            
        </View>
    )
}
