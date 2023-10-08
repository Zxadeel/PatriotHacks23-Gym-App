import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutCreation = ({ route }) => {
    const { selectedMuscles, liftingLevel } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Selected Muscles:</Text>
            {selectedMuscles.map((muscle, index) => (
                <Text key={index}>{muscle}</Text>
            ))}
            <Text style={styles.experienceLevel}>Experience Level: {liftingLevel}</Text>
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
