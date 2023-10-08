import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WorkoutCreation = ({ route }) => {
    const navigation = useNavigation();
    const { selectedMuscles, liftingLevel, commitment } = route.params;
    const [routine, setRoutine] = useState(null);

    // Determine workout routine based on commitment level
    const getWorkoutRoutine = () => {
        switch (commitment) {
            case 2:
                return "Full Body (3 days a week)";
            case 3:
                return "Full Body (3 days a week)";
            case 4:
                return "Upper/Lower (5 days a week)";
            case 5:
                return "Upper/Lower (5 days a week)";
            case 6:
                return "Upper/Lower (5 days a week)";
            case 7:
                return "Push/Pull/Legs (7 days a week)";
            default:
                return "Unknown";
        }
    };

    const handleNext = () => {
        setRoutine(getWorkoutRoutine()); // Update routine with the workout routine
        navigation.navigate('Home', { routine }); // Pass routine to Home screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Here's your custom workout routine:</Text>
            <Text style={styles.workoutRoutine}>{getWorkoutRoutine()}</Text>
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50, 
    },
    heading: {
        fontSize: 24,
        marginBottom: 10,
    },
    workoutRoutine: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WorkoutCreation;
