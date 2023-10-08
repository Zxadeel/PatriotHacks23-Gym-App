import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Timer from '../components/Timer'; 

export default function TimerScreen({data}) {
  return(
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/background1.webp')}>
      <LinearGradient
              colors={['rgb(240, 241, 160)', 'transparent']}
              style={{position:'absolute', left:0,right:0,bottom:0,top:0,}}/>
        <Timer/>
        <Text style={styles.set}>Next Workout:{data}</Text>
        <Image source={require('../../assets/images/catworkout.png')}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  set: {
    flex: 1,
    fontSize: 30,
    fontWeight: '900',
    alignSelf: 'center'
    
  }

});
