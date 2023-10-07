import { useState } from "react";
import { TextInput,View,Text,TouchableOpacity, } from "react-native";


export default function WelcomeScreen({navigation}) {
    // Define a state object that holds the user's input for name, gender, and age
    const [userInfo, setUserInfo] = useState({
      name: '',
      gender: '',
      age: '',
    });
  
    // Define functions that update the state object when the user types in their information
    const handleNameChange = (text) => {
      setUserInfo({ ...userInfo, name: text });
    };
  
    const handleGenderChange = (text) => {
      setUserInfo({ ...userInfo, gender: text });
    };
  
    const handleAgeChange = (text) => {
      setUserInfo({ ...userInfo, age: text });
    };
  
    // Define a function that navigates to the next screen when the "START" button is pressed
    const handleStartPress = () => {
      navigation.navigate('NextScreen', { userInfo });
    };
  
    // Render a view with text inputs for name, gender, and age, and a "START" button
    return (
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO PIXEL GYM</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={handleNameChange}
          value={userInfo.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          onChangeText={handleGenderChange}
          value={userInfo.gender}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={handleAgeChange}
          value={userInfo.age}
        />
        <TouchableOpacity style={styles.button} onPress={handleStartPress}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    );
  };