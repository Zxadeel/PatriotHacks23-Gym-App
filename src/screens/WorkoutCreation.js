import React, { useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkoutCreation = ({ route }) => {
    const { selectedMuscles, liftingLevel, commitment } = route.params;

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('data');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          console.log("Async Get error", e)
        }
      };

    useEffect(() => {
        async function saveData() {
            data = {selectedMuscles, liftingLevel, commitment}
            const info = JSON.stringify(data)
            await AsyncStorage.setItem("data", info)
            console.log(info)
        }
        saveData();

    },[])
    
    

    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Selected Muscles:</Text>
            {selectedMuscles.map((muscle, index) => (
                <Text key={index}>{muscle}</Text>
            ))}
            <Text style={styles.experienceLevel}>Experience Level: {liftingLevel}</Text>
            <Text style={styles.commitment}>Experience Level: {commitment}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50, // Adjust as needed for the top padding
    },
    heading: {
        fontSize: 24,
        marginBottom: 10,
    },
    experienceLevel: {
        fontSize: 16,
    },
});

export default WorkoutCreation;
