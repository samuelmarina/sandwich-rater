import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import colors from '../../config/colors/colors';
import fonts from '../../config/fonts/fonts';

function AppButton({
    color = "primary",
    children,
    style,
    textStyle,
    onPress,
}) {
    return (
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: colors[color]}, style]}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyle]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 80,
    },
    text: {
        color: colors.text,
        fontSize: 25,
        textTransform: "uppercase",
        fontFamily: fonts.BlackHanSans,
        fontWeight: "bold"
    }
})

export default AppButton;