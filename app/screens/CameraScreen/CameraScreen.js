import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BackButton from '../../components/BackButton/BackButton';

import Camera from "../../components/Camera/Camera";

function CameraScreen({
    navigation
}) {
    const [camera, setCamera] = useState();
    const [loading, setLoading] = useState(false);

    const takePicture = async () => {
        if(!camera) return;
        const picture = await camera.takePictureAsync();
        
    }

    return (
        <View style={styles.container}>
            <Camera 
                setCamera={setCamera}
                onPress={takePicture}
                loading={loading}
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