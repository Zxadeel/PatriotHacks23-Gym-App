import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({ route }) => {
    const { routine } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Home</Text>
            {routine && (
                <Text style={styles.routine}>Your Routine: {routine}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 10,
    },
    routine: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home;
