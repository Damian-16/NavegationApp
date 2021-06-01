import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
//2 formas de recibir el tipo de dato de los argumentos, 1 Interface:

// interface RouterParams {
//     id:number,
//     nombre:string,
// }   

//  interface Props extends StackScreenProps<any,any>{};
//Segunda forma a travez de un tipo:
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};


export const PersonaScreen = ({route}:Props) => {

    // const params = route.params as RouterParams; //trata esto como la interface RouteParams, Primera forma


   const params = route.params;//ahora si hacemos hover en params vemos los argumentos


    // console.log(JSON.stringify(props,null,3))


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Persona {
                JSON.stringify(params,null,3)
            }</Text>
            
        </View>
    )
}
