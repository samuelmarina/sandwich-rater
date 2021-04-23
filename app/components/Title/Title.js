import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from "../../config/colors/colors";
import fonts from "../../config/fonts/fonts";

function Title({
    children,
    style,
}) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.BlackHanSans,
        fontSize: 30,
        color: colors.text
    }
})

export default Title;