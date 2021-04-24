import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Camera from "../../components/Camera/Camera";

function CameraScreen(props) {
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
})

export default CameraScreen;