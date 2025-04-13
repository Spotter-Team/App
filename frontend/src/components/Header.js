import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DumbbellLogo from '../assets/dumbbell-logo.png';

const Header = ({ activeScreen }) => {

    const navigation = useNavigation();
    const handleSettingsPress = () => navigation.navigate('Settings');
    const handleFilterPress = () => navigation.navigate('Filter');

    const renderContent = () => {
        if(activeScreen === 'Profile' || activeScreen === 'Settings') {
            return (
                <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSettingsPress()}>
                    <Text style={styles.buttonText}>
                        Settings
                    </Text>
                    <View style={styles.buttonIconContainer}>
                        <Ionicons name="settings" size={16} color={'white'}></Ionicons>
                    </View>
                </TouchableOpacity>
            );
        }
        else if(activeScreen === 'Matching' || activeScreen === 'Filter') {
            return (
                <TouchableOpacity style={styles.buttonContainer} onPress={() => handleFilterPress()}>
                    <Text style={styles.buttonText}>
                        Filter
                    </Text>
                    <View style={styles.buttonIconContainer}>
                        <Ionicons name="options" size={16} color={'white'}></Ionicons>
                    </View>
                </TouchableOpacity>
            );
        };
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={DumbbellLogo} style={styles.logo} />
                    <Text style={styles.title}>Spotter</Text>
                </View>
                {renderContent()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#141417',
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 10,
        justifyContent: 'space-between',
    },
    logoContainer: {
        flexDirection: 'row',
        paddingLeft: 20,
    },
    logo: {
        width: 27,
        height: 20,
        paddingTop: 2.5,
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Bebas Neue',
        paddingLeft: 7,
        fontWeight: 700,
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 2,
        paddingRight: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 17
    },
    buttonIconContainer: {
        paddingTop: 3,
        paddingLeft: 5,
    },
    safeArea: {
        backgroundColor: '#141417'
    }
});

export default Header;