import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BackButton from '../../components/BackButton/BackButton';

import Camera from "../../components/Camera/Camera";

function CameraScreen({
    navigation
}) {
    const [camera, setCamera] = useState();

    const takePicture = async () => {
        if(!camera) return;
        const picture = await camera.takePictureAsync();
        navigation.navigate('Rating', {image: picture.uri});
    }

    return (
        <View style={styles.container}>
            <Camera 
                setCamera={setCamera}
                onPress={takePicture}
            />
            <BackButton 
                size={50}
                style={styles.back}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    back: {
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 10,
        top: 50,
    }
})

export default CameraScreen;