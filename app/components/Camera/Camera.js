import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera } from 'expo-camera';
import CameraButton from './CameraButton';

function AppCamera(props) {
    const type = Camera.Constants.Type.back;

    return (
        <Camera 
            style={styles.camera}
            type={type}
        >
            <CameraButton />
        </Camera>
    );
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
    },
})

export default AppCamera;