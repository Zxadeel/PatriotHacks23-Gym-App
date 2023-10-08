import React from "react";
import { useState, useCallback, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen({ navigation }) {

  const [userInfo, setUserInfo] = useState({
    name: '',
    gender: '',
    age: '',
  });

  const handleNameChange = (text) => { 
    setUserInfo({ ...userInfo, name: text });
  };

  const handleGenderChange = (text) => {
    setUserInfo({ ...userInfo, gender: text });
  };

  const handleAgeChange = (text) => {
    setUserInfo({ ...userInfo, age: text });
  };

  const handleStartPress = () => {
    navigation.navigate('NewOrExperienced', { userInfo });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/background3.jpg')}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['rgba(130, 87, 129, 0.5)', 'transparent']}
          style={styles.gradient} />
        <View style={styles.welcome}>
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
            keyboardType="numeric" // Allow only numeric input for age
          />
          <TouchableOpacity style={styles.button} onPress={handleStartPress}>
            <Image source={require('../../assets/images/Startbtn.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: "stretch",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  welcome: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    margin: 10,
    marginBottom: 20,
    fontWeight: '900',
    color: "black",
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    marginTop: 30,
  },
  input: {
    padding: 8,
    backgroundColor: 'white',
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
  }
});
