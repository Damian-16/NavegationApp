import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';

const myIcon = <Icon name="rocket" size={30} color="#900"/>

export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tab1Screen effect');
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
            <Icon name="airplane-outline" size={30} color={colors.primary} />
            <Icon name="attach-outline" size={30} color={colors.primary} />
            <Icon name="bonfire-outline" size={30} color={colors.primary} />
            <Icon name="calculator-outline" size={30} color={colors.primary} />
            <Icon name="chatbubble-outline" size={30} color={colors.primary} />
            <Icon name="images-outline" size={30} color={colors.primary} />
            <Icon name="leaf-outline" size={30} color={colors.primary} />
            
            </Text>
            
        </View>
    )
}
