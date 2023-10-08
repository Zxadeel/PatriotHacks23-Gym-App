import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DaysScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedMuscles, liftingLevel, userInfo } = route.params;
  const [commitment, setCommitment] = useState(null);

  const handleButtonPress = (days) => {
    setCommitment(days);
  };

  const handleNext = () => {
    if (commitment !== null) {
      navigation.navigate('WorkoutCreation', {
        selectedMuscles: selectedMuscles, // You will pass the actual value of selected muscles here
        liftingLevel: liftingLevel, // Change this to the actual lifting level
        commitment: commitment,
        userInfo: userInfo
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How many days a week can you work out?</Text>
      <View style={styles.buttonContainer}>
        <Button title="2-3" onPress={() => handleButtonPress(3)} />
        <Button title="4-6" onPress={() => handleButtonPress(5)} />
        <Button title="7" onPress={() => handleButtonPress(7)} />
      </View>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Adjust as needed for the top padding
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default DaysScreen;
