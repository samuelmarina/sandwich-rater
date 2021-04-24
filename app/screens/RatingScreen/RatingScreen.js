import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ImageFrame from '../../components/ImageFrame/ImageFrame';
import Title from '../../components/Title/Title';

import colors from '../../config/colors/colors';

function RatingScreen({
    route,
    navigation
}) {
    const [image, setImage] = useState();
    const [score, setScore] = useState(0);
    const [sentence, setSentence] = useState("");

    const addImage = () => {
        if(route.params.image){
            setImage({uri: route.params.image})
        }
        else{
            setImage(require('../../assets/images/Error/error.png'));
        }
    }

    const setRandomScore = () => {
        const num = Math.floor(Math.random() * 70);
        setScore(num);
        howCoolIsYoSandwich(num);
    }

    const howCoolIsYoSandwich = (score) => {
        let sent = "";
        if(score <= 10){
            sent = "a complete piece of sh*t";
        }
        else if(score <= 20){
            sent = "a total disaster, you're dumb af";
        }
        else if(score <= 30){
            sent = "not bad, but you're still stupid";
        }
        else if(score <= 40){
            sent = "good, i guess. Btw i hate u";
        }
        else if(score <= 50){
            sent = "ok";
        }
        else if(score <= 68){
            sent = "delicious, now go watch some anime, you nerd"
        }
        else{
            sent = "perfect, you da mvp, genius, master, captain, you rock"
        }
        setSentence(sent);
    }

    useEffect(() => {
        addImage();
        setRandomScore();
    }, []);

    return (
        <View style={styles.container}>
            <ImageFrame 
                source={image}
            />
            <Title style={[styles.title, styles.textShadow]}>
                {score}/69
            </Title>
            <Title style={styles.text}>
                Yo sandwich is {sentence}
            </Title>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    textShadow: {
        textShadowColor: colors.shadow,
        textShadowOffset: {
            width: -1,
            height: 2,
        },
        textShadowRadius: 10
    },
    title: {
        marginTop: 30,
        fontSize: 60,
        textAlign: "center",
        color: colors.primary
    }, 
    text: {
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 20,
        textAlign: 'center'
    }
})

export default RatingScreen;