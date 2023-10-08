import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExerciseDisplay = ({exercises}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextExercise = () => {
    // Check if there are more exercises to display
    if (currentIndex < exercises.length - 1) {
      console.log(currentIndex)
      setCurrentIndex(currentIndex + 1);
    } else {
      // If you want to loop back to the first exercise when you reach the end of the array, you can use the following line:
      // setCurrentIndex(0);
      // Or you can simply do nothing when you reach the end.
    }
  };

  return (
    <View style={{flex: 2}}>
      <Text style={styles.set}>Next Workout:</Text>
      <Text style={styles.exercise}>{exercises[currentIndex]}</Text>
      <Button title="Next Exercise" onPress={handleNextExercise} />
    </View>
  );
};

const styles = StyleSheet.create({
  set: {
    fontSize: 40,
    fontWeight: '900',
    alignSelf: 'center',
  },
  exercise: {
    fontSize: 35,
    fontWeight: '900',
    alignSelf: 'center',
  }
})

export default ExerciseDisplay;
