import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const MuscleSelect = ({ route }) => {
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [confirmedMuscles, setConfirmedMuscles] = useState([]);
  const navigation = useNavigation(); // Access navigation
  const { liftingLevel } = route.params;



  const handleMuscleSelection = (muscle) => {
    setSelectedMuscles(prevState => {
      if (prevState.includes(muscle)) {
        return prevState.filter(item => item !== muscle);
      } else {
        return [...prevState, muscle];
      }
    });
  };

  const handleConfirmation = () => {
    setConfirmedMuscles([...selectedMuscles]);
    setSelectedMuscles([]);
    console.log('Confirmed Muscles:', selectedMuscles);
    console.log('Lifting Level:',liftingLevel);
    navigation.navigate('WorkoutCreation', { selectedMuscles, liftingLevel });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select the muscles you want to grow:</Text>

      <Image
        source={require('../../assets/mmimwithback.png')} // Replace with actual image path
        style={{ width: '50%', height: '50%' }} // Adjust width and height as needed
        resizeMode="contain"
      />

      <View>
        <Button
          title="Chest"
          onPress={() => handleMuscleSelection('Chest')}
          color={selectedMuscles.includes('Chest') ? 'steelblue' : 'blue'} // Change color based on selection
        />
        <Button
          title="Back"
          onPress={() => handleMuscleSelection('Back')}
          color={selectedMuscles.includes('Back') ? 'steelblue' : 'darkolivegreen'} // Change color based on selection
        />
        <Button
          title="Biceps"
          onPress={() => handleMuscleSelection('Biceps')}
          color={selectedMuscles.includes('Biceps') ? 'steelblue' : 'purple'} // Change color based on selection
        />
        <Button
          title="Triceps"
          onPress={() => handleMuscleSelection('Triceps')}
          color={selectedMuscles.includes('Triceps') ? 'steelblue' : 'coral'} // Change color based on selection
        />
        <Button
          title="Quads"
          onPress={() => handleMuscleSelection('Quads')}
          color={selectedMuscles.includes('Quads') ? 'steelblue' : 'chartreuse'} // Change color based on selection
        />
        <Button
          title="Shoulders"
          onPress={() => handleMuscleSelection('Shoulders')}
          color={selectedMuscles.includes('Shoulders') ? 'steelblue' : 'gold'} // Change color based on selection
        />
        <Button
          title="Abs"
          onPress={() => handleMuscleSelection('Abs')}
          color={selectedMuscles.includes('Abs') ? 'steelblue' : 'pink'} // Change color based on selection
        />
        <Button
          title="Calves"
          onPress={() => handleMuscleSelection('Calves')}
          color={selectedMuscles.includes('Calves') ? 'steelblue' : 'goldenrod'} // Change color based on selection
        />
      </View>

      <Button title="Confirm Selection" onPress={handleConfirmation} />

      {confirmedMuscles.length > 0 && (
        <View>
          <Text>Confirmed Muscles:</Text>
          {confirmedMuscles.map((muscle, index) => (
            <Text key={index}>{muscle}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default MuscleSelect;