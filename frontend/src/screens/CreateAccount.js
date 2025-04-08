import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Image,
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';
import { useNavigation } from '@react-navigation/native';
import COLORS from './theme';
import DumbbellLogo from './assets/dumbbell-logo.png';

const CreateAccount = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleCreateAccount = async () => {
        if (!email || !password) {
            setError('Email and password are required.');
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

            
            navigation.navigate('HomeTabs', {
                params: {
                    screen: 'Profile',
                    params: { name: email.split('@')[0] },
                },
            });
        } catch (err) {
            const msg =
                err.response?.data?.message || 'Account creation failed. Please try again.';
            setError(msg);
        }
    };

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.formBox}>
                <Image source={DumbbellLogo} style={styles.logo} />
                <Text style={styles.header}>Create Account</Text>

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
                    <Button title="Submit" color={COLORS.accent} onPress={handleCreateAccount} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    formBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.accent,
        marginBottom: 20,
    },
    backBtn: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    backText: {
        color: COLORS.accent,
        fontSize: 16,
    },
    error: {
        color: COLORS.accent,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        backgroundColor: '#1C1C1C',
        color: COLORS.text,
        padding: 10,
        marginBottom: 12,
        borderRadius: 6,
        borderColor: COLORS.border,
        borderWidth: 1,
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 10,
    },
});

export default CreateAccount;
