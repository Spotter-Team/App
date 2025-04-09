import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import DumbbellLogo from '../assets/dumbbell-logo.png';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={DumbbellLogo} style={styles.logo} />
                <Text style={styles.title}>Spotter</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#141417',
        height: 105,
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 60,
        paddingLeft: 20,
    },
    logo: {
        width: 30,
        height: 30,
    },
    title: {
        color: 'white',
        fontSize: 25,
        paddingLeft: 8,
        fontWeight: 600,
    },
});

export default Header;