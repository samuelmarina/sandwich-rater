import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

function CameraButton({
    onPress
}) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}
        >
            <Image 
                style={styles.image}
                source={require("../../assets/images/Sandwich/sandwich.png")}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        height: 110,
        width: 130
    }
})

export default CameraButton;