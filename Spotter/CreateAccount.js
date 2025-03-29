import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env'; // Uses .env file

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleCreateAccount = async () => {
        
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/api/create-account`, {
                email,
                password,
            });

            Alert.alert('Success', response.data.message);
            setEmail('');
            setPassword('');
            setError('');
        } catch (err) {
            console.error(err);
            const msg =
                err.response?.data?.message || 'Failed to create account. Try again.';
            setError(msg);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.buttonWrapper}>
                <Button title="Submit" onPress={handleCreateAccount} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        width: '90%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        marginBottom: 15,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    buttonWrapper: {
        width: '90%',
        marginTop: 10,
    },
});

export default CreateAccount;
