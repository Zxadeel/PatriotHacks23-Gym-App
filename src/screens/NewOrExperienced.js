import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewOrExperienced = () => {
  const navigation = useNavigation();

  const handleSelection = (level) => {
    navigation.navigate('MuscleSelect', { liftingLevel: level });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How new are you to lifting?</Text>

      {/* Wrap buttons and images together */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="I'm brand new!" onPress={() => handleSelection('new')} />
        <Image
          source={require('../../assets/baby.png')} // Replace with actual image path
          style={{ width: 50, height: 50, marginLeft: 10 }} // Adjust width and height as needed
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Button title="I already have some experience." onPress={() => handleSelection('experienced')} />
        <Image
          source={require('../../assets/lifter.png')}  // Replace with actual image path
          style={{ width: 50, height: 50, marginLeft: 10 }} // Adjust width and height as needed
        />
      </View>
    </View>
  );
};

export default NewOrExperienced;
