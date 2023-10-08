import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import TimerScreen from './src/screens/TimerScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DaysScreen from './src/screens/DaysScreen';
import MuscleSelect from './src/screens/MuscleSelect'; 
import WorkoutCreation from './src/screens/WorkoutCreation'; 
import NewOrExperienced from './src/screens/NewOrExperienced';
import HomeScreen from './src/screens/HomeScreen';

import { useFonts } from 'expo-font';



Icon.loadFont();

const Stack = createStackNavigator(); //intialize screen navigator

export default function App() {
  const [fontsLoaded] = useFonts({
    'PixelBoy' : require('./assets/fonts/PixelBoy.ttf'),
  });
 
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name = "NewOrExperienced" component={NewOrExperienced}/>
          <Stack.Screen name="DaysScreen" component={DaysScreen} />
          <Stack.Screen name = "MuscleSelect" component={MuscleSelect}/>
          <Stack.Screen name = "WorkoutCreation" component={WorkoutCreation}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Timer Screen" component={TimerScreen} />
          

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Pixellari', // Replace with the actual font family name
    fontSize: 16, // Adjust the font size as needed
  },
});


