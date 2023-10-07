// Timer.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
      <View style={styles.container}>
        <Text style={styles.timer}>{formatTime(seconds)}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timer: {
      fontSize: 48,
      fontWeight: 'bold',
    },
});
