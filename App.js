import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import TimerScreen from './src/screens/TimerScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DaysScreen from './src/screens/DaysScreen';


const Stack = createStackNavigator(); //intialize screen navigator

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
          <Stack.Screen name="How many days a week" component={DaysScreen} />
          <Stack.Screen name="Timer Screen" component={TimerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


