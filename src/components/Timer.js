import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function Timer() {
    // Define a state variable called "seconds" and a function to update it called "setSeconds"
    const [seconds, setSeconds] = useState(0);
  
    // Use the useEffect hook to set up an interval that increments "seconds" every second
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
  
      // Return a cleanup function that clears the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
  
    // Define a function called "formatTime" that formats the time as "mm:ss"
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    // Render a View component with a Text component that displays the formatted time
    return (
      <View style={styles.container}>
        <Text style={styles.timer}>{formatTime(seconds)}</Text>
      </View>
    );
  };
  
  // Define a styles object that contains styles for the TimerScreen component
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

