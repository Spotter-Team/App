import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import COLORS from '../../utils/theme';
import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AccountHeader from '../../components/SettingsComponents/AccountHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountInfo = () => {
    const [username, setUsername] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fitnessLevel, setFitnessLevel] = useState('');
    const [trainerBadge, setTrainerBadge] = useState(false);

    const handleUpdate = async () => {
        try {

            const token = await AsyncStorage.getItem('token');

            if (!token) {
                console.warn('No token found');
                return;
            }

            const response = await axios.put(
                `${API_BASE_URL}/api/user/account-info`,
                {
                    username,
                    zipcode,
                    firstName,
                    lastName,
                    fitnessLevel,
                    trainerBadge,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log(' Updated successfully:', response.data);
            alert('Account info updated!');
        } catch (err) {
            console.error(' Update failed:', err);
            alert('An error occurred while updating account info.');
        }
    };


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#141417'}}>
        <AccountHeader />
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />

                <Text style={styles.label}>Zipcode</Text>
                <TextInput
                    value={zipcode}
                    onChangeText={setZipcode}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <Text style={styles.label}>First Name</Text>
                <TextInput
                    value={firstName}
                    onChangeText={setFirstName}
                    style={styles.input}
                />

                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.input}
                />

                <Text style={styles.label}>Fitness Level</Text>
                <TextInput
                    value={fitnessLevel}
                    onChangeText={setFitnessLevel}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={styles.label}>Trainer Badge</Text>
                    <Switch
                        value={trainerBadge}
                        onValueChange={setTrainerBadge}
                        style={{ marginLeft: 10 }}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={handleUpdate} style={styles.button}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
    sectionTitle: {
        color: COLORS.text,
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 40,
        marginBottom: 10,
    },
    formGroup: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 5,
        marginBottom: 5,
    },
    label: {
        color: COLORS.lightText,
        marginTop: 10,
        fontSize: 16,
    },
    input: {
        backgroundColor: '#333',
        color: COLORS.text,
        padding: 10,
        borderRadius: 6,
        marginTop: 5,
    },
    button: {
        backgroundColor: COLORS.accent,
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 40,
        width: 200,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AccountInfo;
