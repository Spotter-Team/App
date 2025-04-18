import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import COLORS from '../../utils/theme';

const AccountInfo = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [password, setPassword] = useState('');
    const [availabilityDays, setAvailabilityDays] = useState('');
    const [availabilityTime, setAvailabilityTime] = useState('');
    const [interests, setInterests] = useState('');
    const [meetup, setMeetup] = useState('');

    const handleUpdate = () => {
        console.log('Saving preferences...');
        // Todo: logic to store preferences
    };

    return (
        <ScrollView style={styles.container}>
            {/* Profile section*/}
            <Text style={styles.sectionTitle}>Profile</Text>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />

                <Text style={styles.label}>Zipcode</Text>
                <TextInput
                    value={zipcode}
                    onChangeText={setZipcode}
                    keyboardType="numeric"
                    style={styles.input}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
            </View>

            {/* preferences section*/}
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Days Available</Text>
                <TextInput
                    placeholder="e.g. M/W/F"
                    placeholderTextColor={COLORS.lightText}
                    value={availabilityDays}
                    onChangeText={setAvailabilityDays}
                    style={styles.input}
                />

                <Text style={styles.label}>Available Time</Text>
                <TextInput
                    placeholder="e.g. 7pm"
                    placeholderTextColor={COLORS.lightText}
                    value={availabilityTime}
                    onChangeText={setAvailabilityTime}
                    style={styles.input}
                />

                <Text style={styles.label}>Fitness Interests</Text>
                <TextInput
                    placeholder="e.g. HIIT, yoga"
                    placeholderTextColor={COLORS.lightText}
                    value={interests}
                    onChangeText={setInterests}
                    style={styles.input}
                />

                <Text style={styles.label}>Meetup Type</Text>
                <TextInput
                    placeholder="e.g. Trainer, Buddy"
                    placeholderTextColor={COLORS.lightText}
                    value={meetup}
                    onChangeText={setMeetup}
                    style={styles.input}
                />
            </View>

            {/* submit button */}
            <TouchableOpacity onPress={handleUpdate} style={styles.button}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </ScrollView>
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
