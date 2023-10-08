import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View,Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'; // Import useState

export default function HomeScreen({data}) {
    const navigation = useNavigation();
    const [xp, setXp] = useState(0); // Step 1: Define XP state
    const maxXP = 100; // Step 1: Define maximum XP

    const handleStartPress = () => {
        navigation.navigate('TimerScreen', {});
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/background4.jpg')}
                resizeMode='cover'
                style={{flex:1, justifyContent:'center',}}>
                <LinearGradient 
                colors={['rgb(130, 87, 129)', 'transparent']}
                style={{position:'absolute', left:0,right:0,bottom:0,top:0,}}/>
                <View style={{flex: 1, flexDirection: "row", alignItems:'center', marginBottom: 5}}>
                    <Image source={require('../../assets/images/character.png')} style={styles.character}/>
                    <View style={{justifyContent: 'center', flexDirection: 'column'}}>
                        <View style={styles.surround}>
                            <Text style={{fontSize:40, fontWeight: '900', alignSelf: 'center'}}>0</Text>
                            <Text style={styles.text}>Workouts</Text>
                        </View>
                        <View style={styles.surround}>
                            <Text style={{fontSize:40, fontWeight: '900', alignSelf: 'center'}}>0</Text>
                            <Text style={styles.text}>Streak</Text>
                        </View>
                    </View>
                    
                </View>

                <View style={styles.surroundother}>
                    <Text style={styles.text}>Level: 1</Text>
                </View>

                {/* XP Bar */}
                <View style={styles.xpBarContainer}>
                    <View style={styles.xpBar}>
                        <View style={{width: `${(xp / maxXP) * 100}%`, backgroundColor: '#4CAF50', height: '100%'}} />
                    </View>
                    <View style={styles.xpTextContainer}>
                        <Text style={styles.xpText}>XP: {xp}/{maxXP}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleStartPress}>
                    <Image source={require('../../assets/images/Startbtn.png')} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'stretch'
        

    },
    character: {
        flex: 1,
        resizeMode: 'center',
        margin: 5,

    },
    surround: {
        // flex: 1
        backgroundColor: 'rgba(77, 182, 248, 0.7)',
        padding: 20,
        margin: 10,
    },
    surroundother: {
        // flex: 1,
        alignSelf: 'center',
        width: 100,
        backgroundColor: 'rgba(77, 182, 248, 0.7)',
        padding: 20,
        margin: 10,
    },
    text: {
        fontSize: 20,
        // marginLeft: 50,
        // margin: 10,
        alignSelf: 'center',
        overflow: 'visible',
        flexWrap: 'wrap',
        fontWeight:'700',
        color: 'white',
        textAlign: 'center',

    },
    button:{
        alignSelf:'center',
        marginTop: 30,
        
      },

    xpBarContainer: {
        backgroundColor: 'rgba(77, 182, 248, 0.7)',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    xpBar: {
        backgroundColor: 'white',
        height: 20,
        borderRadius: 5,
        overflow: 'hidden',
    },
    xpTextContainer: {
        marginTop: 5,
        alignItems: 'flex-end',
    },
    xpText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }

})

