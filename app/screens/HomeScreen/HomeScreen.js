import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lottie from '../../components/Lottie/Lottie';
import Title from '../../components/Title/Title';

import colors from "../../config/colors/colors";

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Lottie 
                source={require("../../assets/animations/Toaster/toaster.json")}
                style={styles.toaster}
            />
            <Title style={[styles.text, styles.shadow]}>
                Sandwich Rater
            </Title>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    shadow: {
        textShadowColor: colors.shadow,
        textShadowOffset: {
            width: -1,
            height: 2,
        },
        textShadowRadius: 10
    },
    text: {
        fontSize: 60,
        textAlign: "center",
        color: colors.primary
    },  
    toaster: {
        width: '100%'
    }
})

export default HomeScreen;