import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MuscleSelect = () => {
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [confirmedMuscles, setConfirmedMuscles] = useState([]);

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
    setSelectedMuscles([]); // Clear selectedMuscles after confirmation if needed
    console.log('Confirmed Muscles:', selectedMuscles); // Debug statement
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MuscleSelect</Text>

      {/* Menu with List of Muscles */}
      <View>
        <Button title="Chest" onPress={() => handleMuscleSelection('Chest')} />
        <Button title="Back" onPress={() => handleMuscleSelection('Back')} />
        <Button title="Biceps" onPress={() => handleMuscleSelection('Biceps')} />
        <Button title="Triceps" onPress={() => handleMuscleSelection('Triceps')} />
        <Button title="Legs" onPress={() => handleMuscleSelection('Legs')} />
        <Button title="Shoulders" onPress={() => handleMuscleSelection('Shoulders')} />
        <Button title="Abs" onPress={() => handleMuscleSelection('Abs')} />
        <Button title="Traps" onPress={() => handleMuscleSelection('Traps')} />
      </View>

      {/* Display Selected Muscles */}
      <View>
        <Text>Selected Muscles:</Text>
        {selectedMuscles.map((muscle, index) => (
          <Text key={index}>{muscle}</Text>
        ))}
      </View>

      {/* Confirm Selection Button */}
      <Button title="Confirm Selection" onPress={handleConfirmation} />

      {/* Display Confirmed Muscles */}
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
