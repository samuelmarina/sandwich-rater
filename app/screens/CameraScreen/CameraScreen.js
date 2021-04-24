import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BackButton from '../../components/BackButton/BackButton';

import Camera from "../../components/Camera/Camera";
import Loader from '../../components/Loader/Loader';

function CameraScreen({
    navigation
}) {
    const [camera, setCamera] = useState();
    const [loading, setLoading] = useState(false);

    const takePicture = async () => {
        if(!camera) return;
        setLoading(true);
        const picture = await camera.takePictureAsync();
        setLoading(false);
        navigation.navigate('Rating', {image: picture.uri});
    }

    return (
        <View style={styles.container}>
            <Loader 
                visible={loading}
            />
            <Camera 
                setCamera={setCamera}
                onPress={takePicture}
            />
            <BackButton 
                size={35}
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