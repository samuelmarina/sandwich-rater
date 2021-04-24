import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Lottie from '../Lottie/Lottie';

function Loader({
    visible = false
}) {
    if(!visible) return null;
    
    return (
        <View 
            style={styles.container}
        >
            <Lottie 
                source={require('../../assets/animations/Loader/loader.json')}
                style={styles.loader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "black",
        height: "100%",
        opacity: 0.7,
        width: "100%",
        zIndex: 1
    },
})

export default Loader;