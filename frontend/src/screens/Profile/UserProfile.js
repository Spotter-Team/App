import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import { API_BASE_URL } from '@env';
import COLORS from '../../utils/theme';
import { ActivityIndicator } from 'react-native';
import DumbbellLogo from '../../assets/dumbbell-logo.png';

const UserProfile = () => {
    const [selectedDay, setSelectedDay] = useState(null); // availability
    const [log, setLog] = useState(''); // since workout log is text based

    // hardcode to test visuals before pulling user data dynamically
    const user = {
        name: 'Mariyah',
        username: 'mjselreynolds',
        avatar: require('../../assets/gymGirl.png'),
        trainerBadge: true,
        buddyBadge: true,
        gymBuddies: 5,
        fitnessLevel: 2, // beginner = 1, intermediate = 2, etc..
        location: 'Gainesville, FL',
        preferredWorkout: 'HIIT + Lifting',
        availability: {
            Mon: true,
            Tue: false,
            Wed: true,
            Thu: false,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        times: {
            Mon: '7-9am',
            Wed: '6-8pm',
            Fri: '5-7pm',
            Sun: '8-10am',
        },
    };

    const days = Object.keys(user.availability);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.profileRow}>
                    <View style={styles.placeholder}></View>
                    <Image source={user.avatar} style={styles.avatarSquare} />
                    {/* Badges */}
                    <View style={styles.badges}>
                        {user.trainerBadge && 
                        <View style={styles.badge}>
                            <Text style={styles.badgeIcon}>🏅</Text>
                            <Text style={styles.badgeText}>Professional Trainer</Text>
                        </View>
                        }
                        {user.buddyBadge && 
                            <View style={styles.badge}>
                                <Text style={styles.badgeIcon}>💪</Text>
                                <Text style={styles.badgeText}>Looking for Gym Buddy</Text>
                            </View>
                        }
                    </View>
                </View>

                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.username}>@{user.username.toLowerCase().replace(/\s/g, '')}</Text>

                {/* Stats */}
                <View style={styles.statsRow}>
                    <Text style={styles.statLabel}>Gym Buddies: {user.gymBuddies}</Text>
                    <View style={styles.fitnessContainer}>
                        <View style={styles.fitnessLevel}>
                            {[...Array(4)].map((_, i) => (
                                <Image
                                    key={i}
                                    source={DumbbellLogo}
                                    style={{
                                        width: 15,
                                        height: 15,
                                        tintColor: i < user.fitnessLevel ? COLORS.accent : 'gray',
                                        marginHorizontal: 2,
                                    }}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                {/* More Stats */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBox}> {user.location}</Text>
                    <Text style={styles.infoBox}> {user.preferredWorkout}</Text>
                </View>

                {/* Schedule */}
                <View style={styles.grayWrapper}>
                    <Text style={styles.sectionHeader}>Workout Schedule</Text>

                    {/* Schedule */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
                        {days.map(day => (
                            <View
                                key={day}
                                style={[
                                    styles.dayCircle,
                                    // { backgroundColor: user.availability[day] ? COLORS.background : '#333' },
                                    selectedDay === day && styles.daySelected,
                                ]}
                                onTouchEnd={() => user.availability[day] && setSelectedDay(day)}
                            >
                                <Text style={{ 
                                        color: user.availability[day] ? 'white' : '#626264',
                                        fontWeight: user.availability[day] ? 800 : 400, 
                                    }}>{day[0]}</Text>
                            </View>
                        ))}
                    </ScrollView>

                    {/* Workout Log */}
                    {selectedDay && user.availability[selectedDay] && (
                        <View style={styles.availabilitySection}>
                            <Text style={styles.availabilityHeader}>Available: {user.times[selectedDay]}</Text>
                        </View>
                    )}

                    {/* Tab Bar Placeholder */}
                    <TextInput
                        style={styles.logInput}
                        placeholder="Log your workout..."
                        placeholderTextColor={'#898585'}
                        multiline
                        value={log}
                        onChangeText={setLog}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        marginTop: 30,
    },
    profileRow: { 
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatarSquare: { 
        width: 140, 
        height: 140, 
        borderRadius: 20, 
        marginBottom: 5,
    },
    name: { 
        fontSize: 26, 
        fontWeight: 'bold', 
        color: COLORS.text, 
        textAlign: 'center', 
        marginTop: 10,
    },
    placeholder: {
        width: '30%',
    },
    username: {
        color: COLORS.lightText, 
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    badges: {
        width: '30%',
        paddingTop: 10,
    },
    badge: { 
        flexDirection: 'row',
        backgroundColor: COLORS.background, 
        paddingHorizontal: 10, 
        paddingVertical: 6, 
        borderRadius: 10, 
        color: COLORS.text, 
        fontSize: 14,
    },
    badgeIcon: {
        paddingTop: 3,
    },
    badgeText: {
        color: COLORS.text,
        fontSize: 12,
        fontStyle: 'italic',
    },
    statsRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginVertical: 10,
    },
    statLabel: { 
        color: COLORS.accent, 
        fontSize: 12,
    },
    fitnessContainer: { 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    fitnessLevel: { 
        flexDirection: 'row', 
        gap: 5,
    },
    infoRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginVertical: 10,
    },
    infoBox: { 
        backgroundColor: '#131416', 
        padding:10, 
        borderRadius: 8, 
        color: COLORS.lightText, 
        width: '48%',
    },
    sectionHeader: { 
        color: COLORS.lightText, 
        fontSize: 18, 
        fontWeight: 'bold', 
        paddingBottom: 10,
        marginBottom: 10, 
        borderBottomColor: '#2A2B2E',
        borderBottomWidth: 0.2,
    },
    grayWrapper: {
        backgroundColor: '#111315',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 30,
        marginTop: 10,
        marginBottom: 100,
    },
    daysContainer: { 
        flexDirection: 'row', 
        marginVertical: 10,
        paddingBottom: 10,
    },
    dayCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: '#1E1F21',
    },
    daySelected: {
        borderWidth: 2,
        borderColor: COLORS.accent,
    },
    dayText: { 
        color: COLORS.text,
        fontWeight: 'bold',
    },
    unavailableBlock: {
        backgroundColor: '#333',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    unavailableText: {
        color: COLORS.lightText,
        fontSize: 12,
    },
    availabilitySection: { 
        alightItems: 'flex-start', 
        marginBottom: 10,
        marginHorizontal: 10,
    },
    availabilityHeader: {
        color: COLORS.text,
        fontSize: 16,
    },
    logInput: {
        backgroundColor: 'white',
        color: 'black',
        padding: 15,
        borderRadius: 8,
        height: 150,
        textAlignVertical: 'top',
        marginTop: 10,
        fontSize: 14,
        marginHorizontal: 10,
    },
});

export default UserProfile;