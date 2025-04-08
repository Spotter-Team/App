import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    Image,
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../utils/theme';
import DumbbellLogo from '../assets/dumbbell-logo.png';

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

            navigation.navigate('HomeTabs', {
                params: { screen: 'Profile', params: { name: email.split('@')[0] } },
            });
        } catch (err) {
            const msg =
                err.response?.data?.message || 'Login failed. Please try again.';
            setError(msg);
        }
    };

    return (
        <View style={styles.wrapper}>
            <Image source={DumbbellLogo} style={styles.logo} />
            <Text style={styles.appTitle}>SPOTTER</Text>

            <View style={styles.container}>
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={COLORS.lightText}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={COLORS.lightText}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.buttonWrapper}>
                    <Button title="Log In" color={COLORS.accent} onPress={handleLogin} />
                </View>

                <View style={styles.linkWrapper}>
                    <Text style={styles.linkText}>Don't have an account?</Text>
                    <Button
                        title="Create Account"
                        color={COLORS.accent}
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
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    appTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.accent,
        marginBottom: 40,
    },
    container: {
        width: '90%',
        alignItems: 'center',
    },
    error: {
        color: COLORS.accent,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        backgroundColor: '#1C1C1C',
        borderRadius: 6,
        color: COLORS.text,
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
        color: COLORS.lightText,
        marginBottom: 5,
    },
});

export default Login;
