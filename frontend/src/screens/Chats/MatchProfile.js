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
    TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { API_BASE_URL } from '@env';
import COLORS from '../../utils/theme';
import { ActivityIndicator } from 'react-native';
import DumbbellLogo from '../../assets/dumbbell-logo.png';
import { Ionicons } from '@expo/vector-icons';
import mockMatchProfiles from '../../mock/Matches/mockMatchProfiles';

const UserProfile = () => {

    const route = useRoute();
    const userId = route.params['userId'];
    const userData = mockMatchProfiles.find((val) => val.userId === userId);
    const firstAvailableDay = Object.keys(userData.availability).find((day) => userData.availability[day]);
    console.log("First Available Day: ", firstAvailableDay);

    const [selectedDay, setSelectedDay] = useState(firstAvailableDay); 

    const renderWorkoutLog = (day, workoutLog) => {
        const workoutLogData = workoutLog.find((workout) => workout.day === day);
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ color: 'white' }}>
                    {selectedDay === '' ? '' : workoutLogData.content}
                </Text>
            </View>
        );
    };

    const navigation = useNavigation();
    const handleBackBtnPress = () => navigation.goBack();

    const days = Object.keys(userData.availability);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>

            <View style={styles.matchProfileHeader}>
                <TouchableOpacity onPress={() => handleBackBtnPress()}>
                    <Ionicons name="chevron-back" size={25} style={styles.backButton}></Ionicons>         
                </TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={25} style={styles.moreButton}></Ionicons>    
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.profileRow}>
                    <View style={styles.placeholder}></View>
                    <Image source={userData.avatar} style={styles.avatarSquare} />
                    {/* Badges */}
                    <View style={styles.badges}>
                        {userData.trainerBadge && 
                        <View style={styles.badge}>
                            <Text style={styles.badgeIcon}>🏅</Text>
                            <Text style={styles.badgeText}>Professional Trainer</Text>
                        </View>
                        }
                        {userData.buddyBadge && 
                            <View style={styles.badge}>
                                <Text style={styles.badgeIcon}>💪</Text>
                                <Text style={styles.badgeText}>Looking for Gym Buddy</Text>
                            </View>
                        }
                    </View>
                </View>

                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.username}>@{userData.username.toLowerCase().replace(/\s/g, '')}</Text>

                {/* Stats */}
                <View style={styles.statsRow}>
                    <Text style={styles.statLabel}>Gym Buddies: {userData.gymBuddies}</Text>
                    <View style={styles.fitnessContainer}>
                        <View style={styles.fitnessLevel}>
                            {[...Array(4)].map((_, i) => (
                            <Image
                                key={i}
                                source={DumbbellLogo}
                                style={{
                                    width: 15,
                                    height: 15,
                                    tintColor: i < userData.fitnessLevel ? COLORS.accent : 'gray',
                                    marginHorizontal: 2,
                                }}
                            />
                            ))}
                        </View>
                    </View>
                </View>

                {/* More Stats */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBox}> {userData.location}</Text>
                    <Text style={styles.infoBox}> {userData.preferredWorkout}</Text>
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
                                // { color: user.availability[day] ? 'white' : '#353537' },
                                selectedDay === day && styles.daySelected,
                                ]}
                                onTouchEnd={() => userData.availability[day] && setSelectedDay(day)}
                            >
                                <Text style={{ 
                                        color: userData.availability[day] ? 'white' : '#626264',
                                        fontWeight: userData.availability[day] ? 800 : 400, 
                                    }}>{day[0]}</Text>
                            </View>
                        ))}
                    </ScrollView>

  

                    {/* Workout Log */}
                    {selectedDay && userData.availability[selectedDay] && (
                        <View style={styles.availabilitySection}>
                            <Text style={styles.availabilityHeader}>Available: {userData.times[selectedDay]}</Text>
                        </View>
                    )}

                    {/* Tab Bar Placeholder */}
                    {/* <TextInput
                        style={styles.logInput}
                        placeholder="Log your workout..."
                        placeholderTextColor={COLORS.lightText}
                        multiline
                        value={log}
                        onChangeText={setLog}
                    /> */}
                    {renderWorkoutLog(selectedDay, userData.workoutLog)}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1,
        padding: 20,
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
        marginTop: 10 
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
        marginVertical: 10 
    },
    infoBox: { 
        backgroundColor: '#131416', 
        padding:10, 
        borderRadius: 8, 
        color: COLORS.lightText, 
        width: '48%' 
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
        paddingBottom: 50,
        marginTop: 10,
        marginBottom: 20,
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
        fontWeight: 'bold'
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
    },
    availabilityHeader: { 
        color: COLORS.text, 
        fontSize: 16,
    },
    logInput: {
        backgroundColor: '#C3C3C3',
        color: COLORS.text,
        padding: 15,
        borderRadius: 8,
        height: 250,
        textAlignVertical: 'top',
        marginTop: 10,
    },
    backButton: {
        color: '#B42B23',
        paddingLeft: 20,
    },
    moreButton: {
        color: '#B42B23',
        paddingRight: 20,
    },
    matchProfileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
}); 

export default UserProfile;