import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HubCommunityScroll from '../../components/GymHubComponents/HubCommunityScroll';
import GymHubTabs from '../../components/GymHubComponents/GymHubTabs';
import FeedInput from '../../components/GymHubComponents/FeedInput';

const GymHub = () => {

    const navigation = useNavigation();
    const handleViewAllPress = () => navigation.navigate('CommunityList');

    const [ activeTab, setActiveTab ] = useState('feed');
    const [ value, onChangeText ] = useState('');
    
    const renderContent = () => {
        if(activeTab === 'feed') {
            return (
                <View style={styles.feedContainer}>
                    <FeedInput />
                </View>
            );
        }
        else if(activeTab === 'communities') {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Communities Content</Text>
                    <View style={styles.inputDivider} />
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

            {renderContent()}

            <Image source={require('../../assets/red-lines-graphic.png')} style={styles.redLines}></Image>
            
            <Image source={require('../../assets/red-dots-graphic.png')} style={styles.redDots}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
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
    feedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    redLines: {
        width: 120,
        height: 372,
        position: 'absolute',
        bottom: -40,
        zIndex: -1,
    },
    redDots: {
        position: 'absolute',
        width: 57,
        height: 100,
        bottom: 0,
        right: 0,
        height: 100,
        zIndex: -1,
    },
});

export default GymHub;