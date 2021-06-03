import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

const {signIn,authState}=useContext(AuthContext);


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contact</Text>
        
            { //aca decimos si isLoggedin es falso se muestra el button
                !authState.isLoggedIn &&  <TouchableOpacity
                //()=>signIn{}se quita ya que no recibe args
        onPress={signIn}
        ><Text>SignIN</Text></TouchableOpacity>
            }
           
        </View>
    )
}
