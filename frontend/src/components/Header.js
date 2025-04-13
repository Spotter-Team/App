import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DumbbellLogo from '../assets/dumbbell-logo.png';

const Header = ({ activeScreen }) => {

    const renderContent = () => {
        if(activeScreen === 'Profile') {
            return (
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Settings
                    </Text>
                    <View style={styles.buttonIconContainer}>
                        <Ionicons name="settings" size={16} color={'white'}></Ionicons>
                    </View>
                </View>
            );
        }
        else if(activeScreen === 'Matching') {
            return (
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Filter
                    </Text>
                    <View style={styles.buttonIconContainer}>
                        <Ionicons name="options" size={16} color={'white'}></Ionicons>
                    </View>
                </View>
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