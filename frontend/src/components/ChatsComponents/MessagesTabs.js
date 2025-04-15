import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';

const MessagesTabs = ({ activeTab, setActiveTab }) => {

    const [tabWidth, setTabWidth] = useState(0);
    const slideAnimation = useRef(new Animated.Value(0)).current;

    const handleTabLayout = (e) => {
        const { width } = e.nativeEvent.layout;
        setTabWidth(width / 2);
    }

    useEffect(() => {
        const toValue = activeTab === 'chats' ? 0 : tabWidth;
        Animated.timing(slideAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }, [activeTab, tabWidth]);

    const animatedBarStyles = {
        ...styles.animatedBar,
        width: tabWidth,
        transform: [{ translateX: slideAnimation }],
    };

    return (
        <View>
            <View style={styles.tabContainer} onLayout={handleTabLayout}>

                <Pressable onPress={() => setActiveTab('chats')}>
                    <Text style={activeTab === 'chats' ? styles.chatTabActive : styles.chatTabInactive}>CHATS</Text>
                </Pressable>

                <Pressable onPress={() => setActiveTab('matches')}>
                    <Text style={activeTab === 'matches' ? styles.matchesTabActive : styles.matchesTabInactive}>MATCHES</Text>
                </Pressable>

            </View>

            <Animated.View style={animatedBarStyles}/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 15,
        paddingBottom: 10,
    },
    chatTabActive: {
        color: 'white',
        fontFamily: 'Bebas Neue',
        fontSize: 22,
    },
    chatTabInactive: {
        color: '#959395',
        fontFamily: 'Bebas Neue',
        fontSize: 22,
    },
    matchesTabActive: {
        color: 'white',
        fontFamily: 'Bebas Neue',
        fontSize: 22,
    },
    matchesTabInactive: {
        color: '#959395',
        fontFamily: 'Bebas Neue',
        fontSize: 22,
    },
    animatedBar: {
        height: 3,
        backgroundColor: '#9C452F',
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        left: 15,
        right: 15,
    },
});

export default MessagesTabs;