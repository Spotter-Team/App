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
        height: 102,
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 65,
        paddingLeft: 20,
    },
    logo: {
        width: 27,
        height: 20,
    },
    title: {
        color: 'white',
        fontSize: 17,
        paddingLeft: 7,
        fontWeight: 700,
    },
});

export default Header;