import { useState, useCallback, useEffect } from "react";
import { TextInput,View,Text,TouchableOpacity,StyleSheet,ImageBackground, Image } from "react-native";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'




export default function WelcomeScreen({navigation}) {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

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


    return (
      <View style={styles.container} >
        <ImageBackground source={require('../../assets/images/background3.jpg')}  style={{flex:1, justifyContent:'center', resizeMode:"stretch",}}>
          <Image source={require('../../assets/images/Title.png')} style={{resizeMode:'center', justifyContent: 'center', width: 600, height:30, margin:20}} />
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
            />
            <TouchableOpacity style={styles.button} onPress={handleStartPress}>
              <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>   
      </View>

    );
  };


styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
  },
  welcome: {
    alignSelf: 'center',
    // backgroundColor: 'white',

  },
  title: {
    fontSize: 30,
    margin: 10,
    marginBottom: 300,
    // fontFamily: 'Roboto',
    // fontWeight: '900',
    color: "white",
    fontFamily: 'Inter_900Black',
  },
  button:{
    padding:5,
    // fontFamily: "PixelBoy"
    
  },
  input:{
    padding: 5,
    backgroundColor: 'white',
    fontSize: 20,
  }
});