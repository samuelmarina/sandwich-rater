import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lottie from '../../components/Lottie/Lottie';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Lottie 
                source={require("../../assets/animations/Toaster/toaster.json")}
                style={styles.toaster}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    toaster: {
        width: '100%'
    }
})

export default HomeScreen;