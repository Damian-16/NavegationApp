import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen= () => {

  const{logout,authState:{isLoggedIn}}= useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contact</Text>
            {
                isLoggedIn && (
            <TouchableOpacity
            style={styles.botonGrande}
            onPress={logout}
            ><Text style={styles.botonGrandeTexto}>Logout</Text>

            </TouchableOpacity> )}
            
        </View>
    )
}
