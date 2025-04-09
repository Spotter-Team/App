import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const MessagesTabs = () => {

    const [chatsTab, setChatsTab] = useState(true);
    const [matchesTab, setMatchesTab] = useState(false);

    const chatsTabPressed = () => {
        setChatsTab(true);
        setMatchesTab(false);
    };

    const matchesTabPressed = () => {
        setMatchesTab(true);
        setChatsTab(false);
    };

    return (
        <View>
            <View style={styles.tabContainer}>

                <Pressable onPress={chatsTabPressed}>
                    <Text style={chatsTab ? styles.chatTabActive : styles.chatTabInactive}>CHATS</Text>
                </Pressable>

                <Pressable onPress={matchesTabPressed}>
                    <Text style={matchesTab ? styles.matchesTabActive : styles.matchesTabInactive}>MATCHES</Text>
                </Pressable>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 15,
        marginTop: 20,
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
});

export default MessagesTabs;