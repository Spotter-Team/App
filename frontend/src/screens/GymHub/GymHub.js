import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HubCommunityScroll from '../../components/GymHubComponents/HubCommunityScroll';
import GymHubTabs from '../../components/GymHubComponents/GymHubTabs';

const GymHub = () => {

    const navigation = useNavigation();
    const handleViewAllPress = () => navigation.navigate('CommunityList');

    const [ activeTab, setActiveTab ] = useState('feed');
    
    const renderContent = () => {
        if(activeTab === 'feed') {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Feed Content</Text>
                </View>
            );
        }
        else if(activeTab === 'communities') {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Communities Content</Text>
                </View>
            );
        };
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Gym Hub
                </Text>
                <TouchableOpacity style={styles.viewAllBtn} onPress={handleViewAllPress}>
                    <Text style={styles.viewAllText}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexShrink: 0 }}>
                <HubCommunityScroll />
                <View style={styles.divider} />
                <GymHubTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 19,
    },
    title: {
        fontFamily: 'Bebas Neue',
        color: 'white',
        fontSize: 26,
        marginLeft: 8,
    },
    viewAllBtn: {
        marginRight: 8,
    },
    viewAllText: {
        color: 'white',
    },
    communityListContainer: {
        paddingHorizontal: 17,
        flexDirection: 'row',
    },
    communityLogo: {
        height: 60,
        width: 60,
        borderRadius: '100%',
        borderColor: 'red',
        borderWidth: 2,
    },
    divider: {
        height: 2,
        marginHorizontal: 17,
        borderRadius: 5,
        backgroundColor: '#B42B23',
    },
    hubListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    feedTab: {

    },
    myFeedText: {
        color: 'white',
        fontFamily: 'Bebas Neue',
        fontSize: 23,
    },
    redDots: {
        position: 'absolute',
        width: 57,
        height: 100,
        bottom: 0,
        right: 0,
        height: 100,
    },
});

export default GymHub;