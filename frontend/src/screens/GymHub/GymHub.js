import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HubCommunityScroll from '../../components/GymHubComponents/HubCommunityScroll';
import GymHubTabs from '../../components/GymHubComponents/GymHubTabs';
import { Ionicons } from '@expo/vector-icons';

const GymHub = () => {

    const navigation = useNavigation();
    const handleViewAllPress = () => navigation.navigate('CommunityList');

    const [ activeTab, setActiveTab ] = useState('feed');
    const [ value, onChangeText ] = useState('');
    
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

            <View style={styles.feedContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        multiline
                        maxLength={200}
                        style={styles.input}
                        placeholder="Share your grind!"
                        placeholderTextColor={'#737373'}
                        onChangeText={text => onChangeText(text)}
                    >
                        
                    </TextInput>
                    <View style={styles.inputDivider} />

                    <View style={styles.inputSubmitContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={styles.hubText}>
                                HUB
                            </Text>
                            <Ionicons name="chevron-down" size={16} style={styles.postInHubButton} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.publishPostBtn}>
                            <Text style={styles.publishBtnText}>PUBLISH POST</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
      
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
    inputContainer: {
        backgroundColor: '#0D0E0D',
        height: 113,
        width: 340,
        borderColor: '#222525',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 25,
        paddingVertical: 10,
        justifyContent: 'space-around',
    },
    input: {
        fontSize: 14,
        color: 'white',
    },
    inputDivider: {
        height: 2,
        backgroundColor: '#1F2221',
    },
    inputSubmitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hubText: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: 800,
    },
    postInHubButton: {
        color: 'white',
    },
    publishPostBtn: {
        backgroundColor: '#9F301C',
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 10,
        borderColor: '#AF331E',
        borderWidth: 1,
    },
    publishBtnText: {
        color: 'white',
        fontWeight: 800,
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