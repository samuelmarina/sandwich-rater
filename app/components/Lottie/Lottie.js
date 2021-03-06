import React from 'react';
import LottieView from 'lottie-react-native';

function Lottie({
    source,
    style
}) {
    return (
        <LottieView 
            autoPlay
            loop
            source={source}
            style={style}
        />
    );
}

export default Lottie;