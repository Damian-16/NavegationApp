import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon  from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets();

    const {authState} = useContext(AuthContext);
    // context.authState
    

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop:insets.top +20 
            }}>
            <Text style={styles.title}> Settings</Text>
            <Text >{JSON.stringify(authState,null,4)}</Text>
            {
               //aca preguntamos si es que hay un icono llamado lo va a renderizar
               
               authState.favoriteIcon && (
                    <Icon
                    name={authState.favoriteIcon} 
                    size={130} 
                    color={colors.primary} />
                )
            }
        </View>
    )
}
