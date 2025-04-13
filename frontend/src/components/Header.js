import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import DumbbellLogo from '../assets/dumbbell-logo.png';

const Header = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={DumbbellLogo} style={styles.logo} />
                    <Text style={styles.title}>Spotter</Text>
                </View>
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
    },
    logoContainer: {
        flex: 1,
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
    settings: {
        color: 'white'
    },
    safeArea: {
        backgroundColor: '#141417'
    }
});

export default Header;