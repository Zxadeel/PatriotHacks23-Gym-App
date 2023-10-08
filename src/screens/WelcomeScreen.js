import { useState, useCallback, useEffect } from "react";
import { TextInput,View,Text,TouchableOpacity,StyleSheet,ImageBackground, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function WelcomeScreen({navigation}) {

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
      navigation.navigate('NewOrExperienced', { userInfo });
    };


    return (
      <View style={styles.container} >
        <ImageBackground source={require('../../assets/images/background3.jpg')}  
          style={{flex:1, justifyContent:'center', resizeMode:"stretch"}}>
            <LinearGradient
              colors={['rgb(130, 87, 129)', 'transparent']}
              style={{position:'absolute', left:0,right:0,bottom:0,top:0,}}/>
            {/* <Image source={require('../../assets/images/Title.png')} style={{resizeMode:'center', justifyContent: 'center', width: 600, height:30, margin:20}} /> */}
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
                <Image source={require('../../assets/images/Startbtn.png')} />
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
    marginBottom: 200,
    // fontFamily: 'Roboto',
    fontWeight: '900',
    color: "white",
    fontSize: 30,
  },
  button:{
    // fontFamily: "PixelBoy"
    alignSelf:'center',
    marginTop: 30,
    
  },
  input:{
    padding: 8,
    backgroundColor: 'white',
    fontSize: 20,
    margin: 20,

  }
});