import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const MessagesTabs = () => {
    return (
        <View>
            <View style={styles.tabContainer}>

                <Pressable style={styles.chatTab}>
                    <Text style={styles.chatTabText}>CHATS</Text>
                </Pressable>

                <Pressable style={styles.matchesTab}>
                    <Text style={styles.matchesTabText}>MATCHES</Text>
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
    chatTab: {

    },
    chatTabText: {
        color: 'white',
        fontFamily: 'Bebas Neue',
        fontSize: 22,
    },
    matchesTab: {

    },
    matchesTabText: {
        color: '#959395',
        fontFamily: 'Bebas Neue',
        fontSize: 22,
    },
});

export default MessagesTabs;