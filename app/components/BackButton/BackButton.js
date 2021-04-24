import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors/colors';

function BackButton({
    onPress,
    size = 24,
    color = colors.primary,
    style
}) {
    return (
        <TouchableOpacity 
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Ionicons 
                name='chevron-back'
                size={size}
                color={color}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default BackButton;