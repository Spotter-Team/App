import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

        try {
            const res = await axios.post(`${API_BASE_URL}/api/login`, {
                email,
                password,
            });

            Alert.alert('Success', res.data.message);
            setEmail('');
            setPassword('');
            setError('');

            navigation.navigate('AccountInfo');
        } catch (err) {
            const msg =
                err.response?.data?.message || 'Login failed. Please try again.';
            setError(msg);
        }
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.appTitle}>SPOTTER</Text>

            <View style={styles.container}>
                
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
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
                    <Button title="Log In" onPress={handleLogin} />
                </View>

                <View style={styles.linkWrapper}>
                    <Text style={styles.linkText}>Don't have an account?</Text>
                    <Button
                        title="Create Account"
                        onPress={() => navigation.navigate('CreateAccount')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 250,
        backgroundColor: '#fff',
    },
    appTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 40,
        fontFamily: 'anton',
    },
    container: {
        width: '90%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 10,
    },
    linkWrapper: {
        marginTop: 20,
        alignItems: 'center',
    },
    linkText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default Login;
