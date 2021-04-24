import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../../config/colors/colors';

function ImageFrame({
    style,
    source
}) {
    return (
        <View style={[styles.container, style]}>
            <Image 
                style={styles.image}
                source={source}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderRadius: 5,
        borderColor: colors.primary,
        height: "50%",
        width: "50%"
    },
    image: {
        flex: 1,
        width: "100%"
    }
})

export default ImageFrame;