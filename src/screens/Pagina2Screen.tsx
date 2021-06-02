import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
    const navigator=useNavigation()
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pag 2</Text>
            <Button title="Ir ala Pagina 3" onPress={()=>navigator.navigate('Pagina3Screen')}/>
           <View style={{flexDirection:'row',justifyContent:'center',padding:5}}>
           <TouchableOpacity 
           style={{
               ...styles.botonGrande,
               backgroundColor:'#5856D6',
               marginLeft:10,
        }}
           onPress={()=>navigator.navigate('PersonaScreen',
            {
                id:1,
                nombre:'pedro'
            })}>
                  <Icon name="person-outline" size={30} color="#980" />
                <Text style={styles.botonGrandeTexto}>Ir ala persona</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{
                    ...styles.botonGrande,
                    backgroundColor:'#FF9427'}}
                onPress={()=>navigator.navigate('PersonaScreen',
            {
                id:2,
                nombre:'maria'
            })}>
             <Icon name="woman-outline" size={30} color="#980" />
                <Text style={styles.botonGrandeTexto}>maria</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={styles.botonGrande}
                 onPress={()=>navigator.navigate('PersonaScreen',
            {
                id:3,
                nombre:'shorch'
            })}>
                <Icon  name="man-outline" size={30} color='black'  />
                <Text style={styles.botonGrandeTexto}>george</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}
