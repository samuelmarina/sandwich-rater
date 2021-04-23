import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from "../../components/Button/Button";
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
            <Title style={[styles.text, styles.textShadow]}>
                Sandwich Rater
            </Title>
            <Button 
                style={[styles.button, styles.shadow]}
            >
                Start
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 30
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    shadow: {
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textShadow: {
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