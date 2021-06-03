import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
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
            <TouchableIcon iconName="airplane-outline" />
            <TouchableIcon iconName="attach-outline" />
            <TouchableIcon iconName="bonfire-outline" />
            <TouchableIcon iconName="calculator-outline" />
            <TouchableIcon iconName="chatbubble-outline" />
            <TouchableIcon iconName="images-outline"  />
            <TouchableIcon iconName="leaf-outline"  />
            
            </Text>
            
        </View>
    )
}
