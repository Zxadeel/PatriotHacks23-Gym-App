import React from 'react';
import { View, Alert, Image, TouchableOpacity } from 'react-native';
const App = () => {
  const handleRange23 = () => {
    Alert.alert("Button pressed!");
  };

  const handleRange46 = () => {
    Alert.alert("Button pressed!");
  };

  const handleNumber7 = () => {
    Alert.alert("Button pressed!");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleRange23} style={{ marginTop: 20 }}>
        <Image source={require('./../../assets/button23.png')} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRange46} style={{ marginTop: 20 }}>
        <Image source={require('./../../assets/button67.png')} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNumber7} style={{ marginTop: 20 }}>
        <Image source={require('./../../assets/button7.png')} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );
};

export default App;