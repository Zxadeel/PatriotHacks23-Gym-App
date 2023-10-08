import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timer from '../components/Timer'; 

export default function TimerScreen({data}) {
  return(
    <View style={styles.container}>
      <Timer/>
      <Text style={styles.set}>Next Workout:{data}</Text>

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
