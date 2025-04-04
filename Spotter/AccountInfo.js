import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AccountInfo = () => {
    const [name, setName] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [availability, setAvailability] = useState('');

    const handleSubmit = () => {
        if (!name || !zipcode || !availability) {
            Alert.alert('All fields are required.');
            return;
        }

        // store info locally
        console.log('User Info:', { name, zipcode, availability });

        Alert.alert('Success', 'Account info saved!');
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Complete Your Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Zip Code"
                keyboardType="numeric"
                value={zipcode}
                onChangeText={setZipcode}
            />
            <TextInput
                style={styles.input}
                placeholder="Availability (e.g., Mon-Fri 5-7PM)"
                value={availability}
                onChangeText={setAvailability}
            />
            <View style={styles.buttonWrapper}>
                <Button title="Save Info" onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 220,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        marginBottom: 15,
    },
    buttonWrapper: {
        marginTop: 20,
    },
});

export default AccountInfo;
