// TimerScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timer from '../components/Timer';  // Ensure the path to Timer is correct

export default function TimerScreen() {
  return(
    <View style={styles.container}>
      <Text style={styles.timeText}>hello</Text>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
