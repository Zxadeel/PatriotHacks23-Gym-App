import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Timer from '../components/Timer';

export default function TimerScreen({ data }) {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    setTimerId(id);

    return () => clearInterval(id);
  }, []);

  const handleStop = () => {
    clearInterval(timerId);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/background1.webp')}>
        <LinearGradient colors={['rgb(240, 241, 160)', 'transparent']} style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }} />
        <Timer />
        <Button title="Stop" onPress={handleStop} />
        <Text style={styles.set}>Next Workout:{data}</Text>
        <Image source={require('../../assets/images/catworkout.png')} />
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
    alignSelf: 'center',
  },
});