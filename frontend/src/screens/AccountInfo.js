import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Alert,
    Image,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import COLORS from '../utils/theme';
import DumbbellLogo from '../assets/dumbbell-logo.png';

const AccountInfo = () => {
    const route = useRoute();
    const { name: routeName = 'User' } = route.params || {};

    const [name, setName] = useState(routeName);
    const [zip, setZip] = useState('');
    const [availability, setAvailability] = useState('');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        if (!name || !zip || !availability) {
            Alert.alert('Missing Info', 'Please fill out all fields.');
            return;
        }

        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={DumbbellLogo} style={styles.logo} />

                <Text style={styles.name}>{name}</Text>
                <Text style={styles.username}>@{name.toLowerCase().replace(/\s/g, '')}</Text>

                <View style={styles.badgeContainer}>
                    <Text style={styles.badge}> Trainer</Text>
                    <Text style={styles.badge}> Gym Buddy</Text>
                </View>

                <Text style={styles.sectionHeader}>Edit Profile</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor={COLORS.lightText}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Zip Code"
                    placeholderTextColor={COLORS.lightText}
                    value={zip}
                    onChangeText={setZip}
                    keyboardType="numeric"
                />
                <TextInput
                    style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                    placeholder="Workout availability (e.g. M/W/F 5-7PM)"
                    placeholderTextColor={COLORS.lightText}
                    multiline
                    value={availability}
                    onChangeText={setAvailability}
                />

                <View style={styles.buttonWrapper}>
                    <Button title="Save Info" color={COLORS.accent} onPress={handleSave} />
                </View>

                {saved && <Text style={styles.savedText}> Saved!</Text>}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 60,
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLORS.text,
        marginTop: 10,
    },
    username: {
        fontSize: 16,
        color: COLORS.lightText,
        marginBottom: 10,
    },
    badgeContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 30,
    },
    badge: {
        backgroundColor: COLORS.accent,
        color: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        fontSize: 12,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        alignSelf: 'flex-start',
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
    savedText: {
        marginTop: 10,
        color: COLORS.accent,
        fontWeight: 'bold',
    },
});

export default AccountInfo;
