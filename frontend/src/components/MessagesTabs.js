import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessagesTabs = () => {
    return (
        <View>
            <Text style={styles.chatTab}>
                CHAT
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chatTab: {
        fontFamily: 'Bebas Neue',
        color: 'white',
    },
});

export default MessagesTabs;